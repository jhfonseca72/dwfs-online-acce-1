
//TODO: Arrow functions and Lexical Scope
const eventsSports = [
    { performer: "Warriors vs Lakers", category: "Sports", seats: 20 },
    { performer: "Lakers vs Warriors", category: "Sports", seats: 10 }];

const eventsTheater = [
    { performer: "Hamilton", category: "Theater", seats: 5 },
    { performer: "Jeremy Jordan", category: "Theater", seats: 0 }];

const eventsConcerts = [
    { performer: "Marron 5", category: "Concert", seats: 10 },
    { performer: "Harry styles", category: "Concert", seats: 10 }];


//TODO: Default Binding    -> filterEventsByPerfomerDefault
const filterEventsByPerfomerDefault = function (performer) {
    console.log(this);
    const eventsByPerformer = [];
    for (const event of this.events) {
        if (event.performer === performer) {
            eventsByPerformer.push(event)
        }
    }
    return eventsByPerformer;
}


//TODO: Instance Binding   -> Venue
function Venue(name, events) {
    this.name = name;
    this.events = events;
    this.hasSeatsAvailable = function (performer) {
        console.log(this.events);
    }
}

const chicagoStadium = new Venue("Chicago Stadium", eventsTheater);
const timesSquare = new Venue("Times Square", eventsConcerts);
const beaconTheather = new Venue("Beacon Theather", eventsSports);

//TODO: Implicit Binding   -> .
//TODO: Explicit Binding   -> call, bind, apply
//TODO: Lexical Binding    -> Arrow


























/*

function Venue(name, events) {
    this.name = name;
    this.events = events;
    this.hasSeatsAvailable = function (performer) {
        console.log(this);
        //Default Binding
        filterEventsByPerfomerDefault(performer);

        //Explicit Binding
        //filterEventsByPerfomerDefault.call(this)

        //Lexical Binding
        //filterEventsByPerfomer(performer);
    }

    const filterEventsByPerfomerDefault = function (performer) {
        console.log(this);
        const eventsByPerformer = [];
        for (const event of this.events) {
            if (event.performer === performer) {
                eventsByPerformer.push(event)
            }
        }
        return eventsByPerformer;
    }

    const filterEventsByPerfomer = () => {
        console.log(this);
        const eventsByPerformer = [];
        for (const event of this.events) {
            if (event.performer === performer) {
                eventsByPerformer.push(event)
            }
        }
        return eventsByPerformer;
    }
}

//Instances
const chicagoStadium = new Venue("Chicago Stadium", eventsTheater);
const timesSquare = new Venue("Times Square", eventsConcerts);
const beaconTheather = new Venue("Beacon Theather", eventsSports);

//Implicit Binding
chicagoStadium.hasSeatsAvailable();

*/



