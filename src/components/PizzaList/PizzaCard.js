import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import green from "@material-ui/core/colors/green";

const PizzaCard = ({name, ingredients, addOrder, withActions}) => {
    let [ordered, setOrdered] = useState(false);
    const handleAdd = () => {
        setOrdered(true);
        addOrder(name);
        // alert('Added');
    };
    return (
        <Grid item xs={12} sm={4}>
            <Card style={{
                maxWidth: 345,
                boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                backgroundColor: "#fafafa",
            }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="product img"
                        height="140"
                        image={'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80'}
                        title="product img"
                    />
                    <CardContent style={{minHeight: 113}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {ingredients.join(', ')}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {withActions && <CardActions>
                    <Grid container>
                        {
                            <IconButton disabled={ordered} onClick={handleAdd}>
                                {ordered ? <CheckCircleOutlineIcon style={{color: green[500]}}/>
                                    : <><AddCircleOutlineIcon style={{color: green[500]}}/> <span
                                        style={{paddingLeft: 5, color: green[500], fontSize: 20}}>Додати в замовлення</span></>}
                            </IconButton>
                        }
                    </Grid>
                </CardActions>}
            </Card>
        </Grid>
    );
};

export default PizzaCard;