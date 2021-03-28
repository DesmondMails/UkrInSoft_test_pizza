export const getPizzaInfo = (orders, pizzas) => {
    let lastPizzas = orders.map(order => (
        Object.keys(order)[1]
    ));
    // let popularsPizzas = lastPizzas.reduce((acc,pizza) => {
    //    acc[pizza] = (acc[pizza] || 0) + 1;
    // },{});
    let res = {};
    lastPizzas.forEach(pizza => {
        res[pizza] = res[pizza] + 1 || 1;
    });
    let resSorted = Object.keys(res).sort((a,b) => {return res[b] - res[a]});
    const popular = resSorted.slice(0, 5);

    let ingredientRes = {};
    popular.forEach(key => {
        let pizzaIngredients = Object.keys(pizzas[key]);
        pizzaIngredients.forEach(ingredient => {
            let count = pizzas[key][ingredient] * res[key];
            ingredientRes[ingredient] = (ingredientRes[ingredient] + count)  || count ;
        })
    });

    let ingredients = Object.keys(ingredientRes).sort(((a, b) =>{return ingredientRes[b] - ingredientRes[a]}));
    return {
        popular: popular,
        ingredients: ingredients
    }
};