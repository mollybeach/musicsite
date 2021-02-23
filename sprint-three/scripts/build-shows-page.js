let apiURL = `https://project-1-api.herokuapp.com/`;
let apiFolder = `showdates`;
let apiKey = `?api_key=mollystation`;
let apiPost = (apiURL + apiFolder + apiKey);

getShows = () => {
        axios.get(apiPost)

        .then(response => {
            displayShows(response.data);

        })

        .catch(error => {
            console.error("Error!", error)
        })

    }
    /************GRAB ELEMENT FROM HTML**************/
let eventComponent = document.getElementById('shows');

/*******************CREATE ELEMENT**************************/
let eventHeadline = document.createElement('div');
let eventCard = document.createElement('div');

/*******************************ADD CLASS********************/
eventHeadline.classList.add('shows__headline');
eventCard.classList.add('shows__card');

/******************ADD CONTENT TO THE HTML ELEMENT*****************/
eventHeadline.innerText = 'Shows';

/**********************APPEND THE CONTENT TO ELEMENT*******************/
eventComponent.appendChild(eventHeadline);
eventComponent.appendChild(eventCard);


function displayShows(post) {
    for (let i = 0; i < post.length; i++) {


        /*******************CREATE ELEMENT**************************/
        let dateHeaderElement = document.createElement('div');
        let venueHeaderElement = document.createElement('div');
        let addressHeaderElement = document.createElement('div');

        let dateFigureElement = document.createElement('div');
        let venueFigureElement = document.createElement('div');
        let addressFigureElement = document.createElement('div');

        let eventDatePartition = document.createElement('div');
        let eventVenuePartition = document.createElement('div');
        let eventLocationPartition = document.createElement('div');

        let eventDivider = document.createElement('div');
        let eventInstance = document.createElement('div');
        let eventButton = document.createElement('button');

        /*******************************ADD CLASS********************/
        dateHeaderElement.classList.add('shows__instance-header');
        venueHeaderElement.classList.add('shows__instance-header');
        addressHeaderElement.classList.add('shows__instance-header');

        dateFigureElement.classList.add('shows__instance-figure', 'shows__instance-figure--bold');
        addressFigureElement.classList.add('shows__instance-figure');
        venueFigureElement.classList.add('shows__instance-figure');

        eventDatePartition.classList.add('shows__date-partition');
        eventVenuePartition.classList.add('shows__venue-partition');
        eventLocationPartition.classList.add('shows__location-partition');

        eventDivider.classList.add('shows__divider');
        eventInstance.classList.add('shows__instance');
        eventButton.classList.add('shows__button');

        /******************ADD CONTENT TO THE HTML ELEMENT*****************/

        dateHeaderElement.innerText = 'DATE';
        venueHeaderElement.innerText = 'VENUE';
        addressHeaderElement.innerText = 'LOCATION';

        dateFigureElement.innerText = post[i].date;
        venueFigureElement.innerText = post[i].place;
        addressFigureElement.innerText = post[i].location;

        eventButton.innerText = 'BUY TICKET';
        /**********************APPEND THE CONTENT TO ELEMENT*******************/

        eventDatePartition.appendChild(dateHeaderElement);
        eventDatePartition.appendChild(dateFigureElement);

        eventVenuePartition.appendChild(venueHeaderElement);
        eventVenuePartition.appendChild(venueFigureElement);

        eventLocationPartition.appendChild(addressHeaderElement);
        eventLocationPartition.appendChild(addressFigureElement);

        eventInstance.appendChild(eventDatePartition);
        eventInstance.appendChild(eventVenuePartition);
        eventInstance.appendChild(eventLocationPartition);


        eventCard.appendChild(eventInstance);
        eventInstance.appendChild(eventButton);
        eventCard.appendChild(eventDivider);


        let instance = document.querySelector('.shows__instance');
        let caption = instance.getElementsByClassName('shows__instance-header');

        function turnOnHiddenCaption(crossSection) {
            for (let i = 0; i < crossSection.length; i++) {
                crossSection[i].classList.add('shows__instance-header--hidden-header')
            }
        }
        turnOnHiddenCaption(caption);


    }

}
getShows();