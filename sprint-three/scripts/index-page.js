//let apiSite = `https://project-1-api.herokuapp.com/comments?api_key=mollystation`;
let newArray = [];
//console.log(posts);



let apiURL = `https://project-1-api.herokuapp.com/`;
let apiFolder = `comments`;
let apiFolderLikes = `likes`;
let apiKey = `?api_key=mollystation`;

let apiPost = (apiURL + apiFolder + apiKey);

function timeStamp(date) {
    // calculate days since last post
    let date1 = new Date(date).getTime();
    let today = new Date().getTime();

    // calculate difference between dates in milliseconds
    let difference = today - date1;

    // calculate difference between dates in seconds
    difference = difference / 1000;
    let seconds = Math.floor(difference % 60);

    // calculate difference between dates in minutes
    difference = difference / 60;
    let minutes = Math.floor(difference % 60);

    // calculate difference between dates in hours
    difference = difference / 60;
    let hours = Math.floor(difference % 24);

    // calculate difference between dates in days

    let days = Math.floor(difference / 24);

    // conditional to determine output of days, hours, minutes or seconds
    if (days > 0) {
        dateSince = `${days} days ago`;
    } else if (days == 0 & hours == 1) {
        dateSince = `${hours} hour ago`;
    } else if (days == 0 & hours > 0) {
        dateSince = `${hours} hours ago`;
    } else if (hours == 0 & minutes == 1) {
        dateSince = `${minutes} minute ago`;
    } else if (hours == 0 & minutes > 0) {
        dateSince = `${minutes} minutes ago`;
    } else {
        dateSince = `${seconds} seconds ago`;
    };

    // return the value
    return dateSince
}
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
    // create a function for updated time stamp
    /*function timeStamp(s) {
        let date = new Date(s);
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        let yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy
    }
*/
    // function to calculate date difference


const form = document.querySelector('.feed');

form.addEventListener('submit', function(event) {

    //clear the previous feed
    document.querySelector('.repository').innerText = '';
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
            console.log("There's an error in your code ", error)
        })
        //event.target.reset();
    clearComments();
});

function clearComments() {
    document.querySelector('.feed').reset(); //clears the text inside textbox the name and the comment 
    let element = document.querySelector('.repository');
    element.innerText = '';
}

let apiRandomPhoto;

function randomPhotoGenerator(varient) {
    let apiRandomImageURL = `https://randomuser.me/api/portraits/thumb/`;
    let apiRandomGenderM = `men/`;
    let apiRandomGenderF = `women/`;
    let apiRandomGender;
    if (varient % 2 === 0) {
        apiRandomGender = apiRandomGenderM;
    } else {
        apiRandomGender = apiRandomGenderF;
    }
    let apiRandomNumber = Math.floor(Math.random() * (100 - varient));
    let apiRandomImageEndOf = `.jpg`;
    let apiRandomPhoto = (apiRandomImageURL + apiRandomGender + apiRandomNumber + apiRandomImageEndOf);
    return apiRandomPhoto;
}

function displayComment(post) {
    for (i = 0; i < post.length; i++) {
        post.sort((a, b) => b.timestamp - a.timestamp);

        /***************************NAME**************************/
        let repositoryName = document.createElement('div');
        repositoryName.classList.add('repository__name'); //add a class to name
        repositoryName.innerText = post[i].name; //property of object 
        /**************************DATE***************************/

        let repositoryTime = document.createElement('div');
        repositoryTime.classList.add('repository__time'); //add a class to time
        repositoryTime.innerText = timeStamp(post[i].timestamp); //property of object 

        /*****************************IMAGE************************/

        let repositoryAvi = document.createElement('img');
        repositoryAvi.classList.add('repository__avi'); //add an class to img
        repositoryAvi.src = randomPhotoGenerator([i]);
        repositoryAvi.innerText = post[i].img; //property of object 

        /*******************************COMMENT***************************/
        let repositoryComment = document.createElement('div');
        repositoryComment.classList.add('repository__comment'); //add a class to comment
        repositoryComment.innerText = post[i].comment; //property of object 
        /***************************CREATE DIVIDER BETWEEN ****************/
        let repositoryBorder = document.createElement('div');
        repositoryBorder.classList.add('repository__border');

        /**********************MAKE DIVS TO HOLD THE CONTENT EASIER TO STYLE**************** */

        /***********************GRAB ELEMENT FROM HTML*************************/
        let repository = document.querySelector('.repository'); //class from emtpy card container in html
        /*******************CREATE ELEMENT**************************/
        //div
        let repositoryEmptyContainer = document.createElement('div');
        let repositoryTopContainer = document.createElement('div');
        let repositoryTopRightContainer = document.createElement('div');
        let repositoryTopRightLeftContainer = document.createElement('div');
        /*******************************ADD CLASS********************/
        repositoryEmptyContainer.classList.add('repository__empty-container'); //add a class to empty-container div the holder of all of the inner elements
        repositoryTopContainer.classList.add('repository__top-container');
        repositoryTopRightContainer.classList.add('repository__top-right-container');
        repositoryTopRightLeftContainer.classList.add('repository__top-right-left-container');
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