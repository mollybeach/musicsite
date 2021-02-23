let apiURL = `https://project-1-api.herokuapp.com/`;
let apiFolder = `comments`;
let apiKey = `?api_key=mollystation`;

let apiPost = (apiURL + apiFolder + apiKey);

getComment = () => {

    axios.get(apiPost)
        .then(response => {
            console.log(response.data);
            newArray = response.data;
            return newArray;
        })
        .then(response => {
            displayComment(response);
        })
        .catch(error => {
            console.log('something went wrong', error);
        })

}

const form = document.querySelector('.form__feed');

form.addEventListener('submit', function(event) {
    //clear previous feed
    document.querySelector('.form__repository').innerText = '';
    event.preventDefault();
    let newUser = {
        name: '',
        comment: ''
    };
    newUser.name = event.target.name.value;
    newUser.comment = event.target.comment.value;
    axios
        .post(apiPost, newUser)
        .then(response => {
            newArray.push(response.data);
            displayComment(newArray);
        })
        .catch(error => {
            console.log("Yikes!", error)
        })

    clearComments();
});
/*******************CLEAR COMMENTS***************************/
function clearComments() {
    document.querySelector('.form__feed').reset(); //clears the text inside textbox the name and the comment 
    let element = document.querySelector('.form__repository');
    element.innerText = '';
}
/***************************GET TIME***********************************/
function timeStamp(utc) {
    let utcStart = new Date(utc).getTime();
    let today = new Date().getTime();
    let unit = today - utcStart;
    //Mil to Sec
    unit = unit / 1000;
    //Sec to Min
    let seconds = Math.floor(unit % 60);
    unit = unit / 60;
    //Min to Hours
    let min = Math.floor(unit % 60);
    unit = unit / 60;
    //Hours to Days
    let hours = Math.floor(unit % 24);
    let days = Math.floor(unit / 24);

    let timeSinceUtcStart;
    if (days > 0) {
        timeSinceUtcStart = `${days} days ago`;
    } else if (days == 0 & hours == 1) {
        timeSinceUtcStart = `${hours} hour ago`;
    } else if (days == 0 & hours > 0) {
        timeSinceUtcStart = `${hours} hours ago`;
    } else if (hours == 0 & min == 1) {
        timeSinceUtcStart = `${min} minute ago`;
    } else if (hours == 0 & min > 0) {
        timeSinceUtcStart = `${min} minutes ago`;
    } else {
        timeSinceUtcStart = `${seconds} seconds ago`;
    };
    return timeSinceUtcStart
}

/******************RANDOM PHOTO GENERATOR*******************/
let apiRandomPhoto;

function randomPhotoGenerator(variant) {
    let apiRandomImageURL = `https://randomuser.me/api/portraits/thumb/`;
    let apiRandomGenderM = `men/`;
    let apiRandomGenderF = `women/`;
    let apiRandomGender;
    if (variant % 2 === 0) {
        apiRandomGender = apiRandomGenderM;
    } else {
        apiRandomGender = apiRandomGenderF;
    }
    let apiRandomNumber = Math.floor(Math.random() * (100 - variant));
    let apiRandomImageEndOf = `.jpg`;
    let apiRandomPhoto = (apiRandomImageURL + apiRandomGender + apiRandomNumber + apiRandomImageEndOf);
    return apiRandomPhoto;
}

function displayComment(post) {
    for (i = 0; i < post.length; i++) {
        post.sort((a, b) => b.timestamp - a.timestamp);

        /***************************NAME**************************/
        let repositoryName = document.createElement('div');
        repositoryName.classList.add('form__name'); //add a class to name
        repositoryName.innerText = post[i].name; //property of object 
        /**************************DATE***************************/

        let repositoryTime = document.createElement('div');
        repositoryTime.classList.add('form__time'); //add a class to time
        repositoryTime.innerText = timeStamp(post[i].timestamp); //property of object 

        /*****************************IMAGE************************/

        let repositoryAvi = document.createElement('img');
        repositoryAvi.classList.add('form__avi'); //add an class to img
        repositoryAvi.src = randomPhotoGenerator([i]);
        repositoryAvi.innerText = post[i].img; //property of object 

        /*******************************COMMENT***************************/
        let repositoryComment = document.createElement('div');
        repositoryComment.classList.add('form__comment'); //add a class to comment
        repositoryComment.innerText = post[i].comment; //property of object 
        /***************************CREATE DIVIDER BETWEEN ****************/
        let repositoryBorder = document.createElement('div');
        repositoryBorder.classList.add('form__border');

        /**********************MAKE DIVS TO HOLD THE CONTENT EASIER TO STYLE**************** */

        /***********************GRAB ELEMENT FROM HTML*************************/
        let = document.querySelector('.form__repository'); //class from emtpy card container in html
        /*******************CREATE ELEMENT**************************/
        //div
        let repositoryEmptyContainer = document.createElement('div');
        let repositoryTopContainer = document.createElement('div');
        let repositoryTopRightContainer = document.createElement('div');
        let repositoryTopRightLeftContainer = document.createElement('div');
        /*******************************ADD CLASS********************/
        repositoryEmptyContainer.classList.add('form__empty-container'); //add a class to empty-container div the holder of all of the inner elements
        repositoryTopContainer.classList.add('form__top-container');
        repositoryTopRightContainer.classList.add('form__top-right-container');
        repositoryTopRightLeftContainer.classList.add('form__top-right-left-container');
        /**********************APPEND THE CONTENT TO THIER CONTAINERS*******************/

        repositoryTopContainer.appendChild(repositoryName);
        repositoryTopContainer.appendChild(repositoryTime);

        repositoryTopRightContainer.appendChild(repositoryTopContainer);
        repositoryTopRightContainer.appendChild(repositoryComment);

        repositoryTopRightLeftContainer.appendChild(repositoryAvi);
        repositoryTopRightLeftContainer.appendChild(repositoryTopRightContainer);

        repositoryEmptyContainer.appendChild(repositoryBorder);
        repositoryEmptyContainer.appendChild(repositoryTopRightLeftContainer);

        /**********************APPEND THE CONTAINERS TO THE HTML ELEMENT******************/
        repository.appendChild(repositoryEmptyContainer);

    }
}

getComment();