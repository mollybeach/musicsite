const commentary = [{
    img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",
    name: ' Micheal Lyons',
    time: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of aconcert I have EVER witnessed.',
}, {
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455",
    name: ' Gary Wong',
    time: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
}, {
    img: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
    name: ' Theodore Duncan',
    time: '11/15/2018',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
}];
//create html elements with commentary array
function defaultComment() {
    for (i = 0; i < commentary.length; i++) {
        let div = document.createElement("card");
        let img = document.createElement("img");
        let name = document.createElement("name");
        let time = document.createElement("time");
        let comment = document.createElement("comment");
        //div
        div.classList.add('card'); //add a class to card div the holder of all of the inner elements
        //img
        img.classList.add('card__img'); //add an class to img
        img.innerText = commentary[i].img; //property of object 
        //name
        name.classList.add('card__name'); //add a class to name
        name.innerText = commentary[i].name; //property of object 
        //time
        time.classList.add('card__time'); //add a class to time
        time.innerText = commentary[i].time; //property of object 
        //comments
        comment.classList.add('card__comment'); //add a class to comment
        comment.innerText = commentary[i].comment; //property of object 
        //append to card
        let comments = document.querySelector(".card"); //class from emtpy card container in html
        comments.appendChild(div);
        comments.appendChild(img);
        comments.appendChild(name);
        comments.appendChild(time);
        comments.appendChild(comment);
        // Add an attribute to a element
        //add img attribute to img
        let submission = commentary[i];
        img.setAttribute("src", submission.img);



    }
}

function displayComment() {
    const form = document.querySelector('.feed');
    form.addEventListener('submit', function(event) {
        //remove the card of the card 
        //clear the previous feed
        document.querySelector('.card').innerText = "";
        //refreshpage
        event.preventDefault();
        var today = new Date(); //grabs todays date in unix time 
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy; //print date in desired format
        let newObject = {
            img: "https://www.sbdems.org/wp-content/uploads/2020/08/facebook-female-profile-icon-67.png ", //add default photo to new indices 
            name: event.target.elements.name.value,
            time: today, //adds current time to new indices 
            comment: event.target.elements.comment.value,
        };
        commentary.unshift(newObject); //adds new object to the start of the array  newObject now has index of 0
        if (commentary.length < 5) {
            defaultComment(commentary); //invokes the default comment function with the new array
        } else {
            //commentary has a length of 5 [newObject,newObject, originalObject originalObject, originalObject]
            let updatedCommentary = commentary.splice(1, 1); //remove index[1] the old newObject splice removes a specific number of elements from a specific index
            //commentary now has a length of 4 with only the newest entry remaining at the top of the feed 
            defaultComment(updatedCommentary); //invokes the default comment function with the updated array
        }
        document.querySelector('.feed').reset(); //clears the text inside textbox the name and the comment 
    });

}
defaultComment(commentary); //invokes defaultComment function with commentary array
displayComment(commentary);