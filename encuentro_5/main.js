//Events (Concerts, Theater, Sports) 

//TODO: Scope and Hoisting

//var eventName = undefined;
//console.log(eventName);
const eventName = "Marron5";
console.log(eventName);

//bookSeats();
function bookSeats() {
    console.log("ABC")
}

//bookSeats2();
const bookSeats2 = function () {
    console.log("FnAsExp")
}

//bookSeats3();
const bookSeats3 = () => console.log("bookSeats3");

(function hoistinFunction() {
    console.log(name)
    var name = "hoistinFunction";
    console.log(name)
})();

//TODO: Errors and try/catch
const venue = {
    name: "Chicago Stadium",
    eventsAvailable: 2
};

function modifyEventAvailable() {
    const numberOfEventsAvailable = venue.eventsAvailable - 1;
    if (numberOfEventsAvailable < 0) {
        throw new Error("Error numberOfEventsAvailable < 0")
    }
    venue.eventsAvailable = numberOfEventsAvailable;
}

modifyEventAvailable();
console.log("Venue", venue);
modifyEventAvailable();
console.log("Venue", venue);

try {
    modifyEventAvailable();
    console.log("Venue", venue);
} catch (error) {
    document.write(`Sorry ${error}`);
}

