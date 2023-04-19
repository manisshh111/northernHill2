console.log("Its working");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let vidBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

vidBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})

function bookingFormSubmit() {

    
    var name1 = document.forms['bookingForm']["bName"].value;
    var email = document.forms['bookingForm']["bEmail"].value;
    var phone = document.forms['bookingForm']["bPhone"].value;
    var places = document.forms['bookingForm']["bPlaces"].value;
    var guests = document.forms['bookingForm']["bGuests"].value;
    var arrival = document.forms['bookingForm']["bArrival"].value;
    var leaving = document.forms['bookingForm']["bLeaving"].value;
    var msg1= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Places to Visit: "+places+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg1);


    Email.send({

       
        SecureToken: "3e3bc690-8c85-483d-86a6-fef895216662",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "manish.sharma22221@gmail.com",
        Subject: "New entry in Book Now Form",
        Body: msg1
    }).then(
        message => alert(message)
    );
}



function contactFormSubmit() {

    
    var name2 = document.forms['contactForm']["cName"].value;
    var email2 = document.forms['contactForm']["cEmail"].value;
    var phone2 = document.forms['contactForm']["cNumber"].value;
    var subject2 = document.forms['contactForm']["cSubject"].value;
    var message2 = document.forms['contactForm']["messageArea"].value;
    

   
    var msg2= "Name: "+name2 +"\n    ," + 
              "Email: "+email2+"\n    ," + 
              "Phone: "+phone2+"\n    ,"+
              "Subject: "+subject2+"\n    ,"+
              "Message: "+ message2;

    console.log(msg2);


    Email.send({

       
        SecureToken: "3e3bc690-8c85-483d-86a6-fef895216662",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "manish.sharma22221@gmail.com",
        Subject: "New entry in Contact Us Form",
        Body: msg2
    }).then(
        message => alert(message)
    );
}