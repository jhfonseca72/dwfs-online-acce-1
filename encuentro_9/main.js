
//TODO: Promises -> Micro task
let enable = true;

const firstPromise = new Promise((resolve, rej) => {
    if (enable === false) {
        rej(-1)
    } else {
        resolve(90);
    }
});

//TODO: Promises then, catch, finally

firstPromise.then((valor) => console.log("Este fue el valor enviado a resolve", valor))
    .catch((error) => document.body.innerHTML = `<label>${error}</label>`)
    .finally(() => console.log("Gracias"))

//TODO: chain

let images = Promise.resolve([{ url: "xxx" }]);
console.log(images);
images = images.then(resultado => { console.log(resultado); return 90 })
console.log("New", images);

//TODO: Promise factory method

const errorByDefault = Promise.reject("Error");
console.log(errorByDefault);


const resolveByDefault = Promise.resolve({ name: "Acamica" });
console.log(resolveByDefault);


//TODO: Fetch




