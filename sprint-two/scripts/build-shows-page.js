const shows = [{
    datie: 'DATE', //for the Date title on the individual cards for mobile
    date: ' Mon Dec 17 2018',
    venuie: 'VENUE', //for the Venue title on the individual cards for mobile
    venue: 'Ronald Lane',
    locationie: 'LOCATION', //for the location title on the individual cards for mobile
    location: 'San Francisco',
    button: 'BUY TICKETS',
}, {
    datie: 'DATE',
    date: ' Tuesday, 18 Dec 2019',
    venuie: 'VENUE',
    venue: ' Pier 3 East',
    locationie: 'LOCATION',
    location: 'San Francisco',
    button: 'BUY TICKETS',
}, {
    datie: 'DATE',
    date: ' Friday, 22 Jul 2019',
    venuie: 'VENUE',
    venue: 'View Loungue',
    locationie: 'LOCATION',
    location: 'San Francisco',
    button: 'BUY TICKETS',
}, {
    datie: 'DATE',
    date: ' Sat Aug 12 2019',
    venuie: 'VENUE',
    venue: ' Hyatt Agency',
    locationie: 'LOCATION',
    location: 'San Francisco',
    button: 'BUY TICKETS',
}, {
    datie: 'DATE',
    date: 'Fri Sep 05 2019 ',
    venuie: 'VENUE',
    venue: ' Moscow Center',
    locationie: 'LOCATION',
    location: 'San Francisco',
    button: 'BUY TICKETS',
}, {
    datie: 'DATE',
    date: 'Wed Aug 11 2019',
    venuie: 'VENUE',
    venue: ' Pres Club',
    locationie: 'LOCATION',
    location: 'San Francisco',
    button: 'BUY TICKETS',
}];
for (i = 0; i < shows.length; i++) {
    let div = document.createElement("card");
    let datie = document.createElement("datie");
    let date = document.createElement("date");
    let venuie = document.createElement("venuie");
    let venue = document.createElement("venue");
    let locationie = document.createElement("locationie");
    let location = document.createElement("location");
    let button = document.createElement("button");

    div.classList.add('card');
    //datie
    //for the Date title on the individual cards for mobile
    datie.classList.add('card__datie');
    datie.innerText = shows[i].datie; //property of object 
    //date
    date.classList.add('card__date');
    date.innerText = shows[i].date; //property of object 
    //venuie
    //for the Venue title on the individual cards for mobile
    venuie.classList.add('card__venuie');
    venuie.innerText = shows[i].venuie; //property of object 
    //venue
    venue.classList.add('card__venue');
    venue.innerText = shows[i].venue; //property of object
    //for the Location title on the individual cards for mobile
    //locationie 
    locationie.classList.add('card__locationie');
    locationie.innerText = shows[i].locationie; //property of object 
    //location
    location.classList.add('card__location');
    location.innerText = shows[i].location; //property of object 
    //button
    button.classList.add('card__button');
    button.innerText = shows[i].button; //property of object 

    //append to html class
    let schedule = document.querySelector(".card"); //class from container empty in html
    schedule.appendChild(div); //div to build the card 
    schedule.appendChild(datie); //for the Date title on the individual cards for mobile
    schedule.appendChild(date);
    schedule.appendChild(venuie); //for the Venue title on the individual cards for mobile
    schedule.appendChild(venue);
    schedule.appendChild(locationie); //for the Location title on the individual cards for mobile
    schedule.appendChild(location);
    schedule.appendChild(button);
    // button.appendChild(document.createTextNode('BUY TICKETS'));

    // Add an attribute to a element
    let show = shows[i];
    div.setAttribute("src", show.div);
    button.setAttribute("src", show.button);

}