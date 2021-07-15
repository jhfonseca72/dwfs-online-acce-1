const newsMockNewYorkTimes = [
    {
        name: "Marking Party’s Centennial, Xi Warns That China Will Not Be Bullied",
        title: `A century after the Communist Party’s founding, China’s leader said foreign powers would 
                “crack their heads and spill blood” if they tried to stop its rise.`
    },
    {
        name: "Give Africa greater access to buy vaccines, a special envoy urges the European Union.",
        title: ``
    }];

const newsMockTheEconomist = [
    {
        name: "The Supreme Court takes another bite out of the Voting Rights Act",
        title: `The Supreme Court takes another bite out of the Voting Rights Act`
    },
    {
        name: "The push to revamp the Chinese Communist Party for the next 100 years",
        price: `The world’s most powerful political party was founded a century ago. 
            James Miles says it is projecting ever greater confidence, while fortifying itself against collapse`
    }];

const getNewsFromNewYorkTimes = new Promise((resolve, reject) => {
    setTimeout(() => resolve(newsMockNewYorkTimes), 1000);
});

const getNewsFromTheEconomist = new Promise((resolve, reject) => {
    setTimeout(() => resolve(newsMockTheEconomist), 2000);
});

//TODO: Promise all -> must get news from The New York Times and The Economist and show all results
Promise.all([getNewsFromNewYorkTimes, getNewsFromTheEconomist])
    .then(resultados => console.log("Promise.all ", resultados))
    .catch(error => console.error("Error Promise.all ", error));

//TODO: Promise allSettled -> must get news from The New York Times and The Economist and show only those with results
Promise.allSettled([getNewsFromNewYorkTimes, getNewsFromTheEconomist])
    .then(resultado => console.log("Promise.allSettled ", resultado))
    .catch(error => console.error("Error Promise.allSettled ", error));

//TODO: Promise race -> must get news from The New York Times and The Economist and show only those who arrived faster
Promise.race([getNewsFromNewYorkTimes, getNewsFromTheEconomist])
    .then(r => console.log("Promise.race ", r))
    .catch(error => console.error("Error Promise.race ", error));
