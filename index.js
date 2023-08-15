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

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
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

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in Contact Us Form",
        Body: msg2
    }).then(
        message => alert(message)
    );
}



function package1FormSubmit() {

    
    var name1 = document.forms['package1Form']["bName"].value;
    var email = document.forms['package1Form']["bEmail"].value;
    var phone = document.forms['package1Form']["bPhone"].value;
    var guests = document.forms['package1Form']["bGuests"].value;
    var arrival = document.forms['package1Form']["bArrival"].value;
    var leaving = document.forms['package1Form']["bLeaving"].value;
    var msg3= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg3);


    Email.send({

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in North Sikkim Tour Package",
        Body: msg3
    }).then(
        message => alert(message)
    );
}


function package2FormSubmit() {

    
    var name1 = document.forms['package2Form']["bName"].value;
    var email = document.forms['package2Form']["bEmail"].value;
    var phone = document.forms['package2Form']["bPhone"].value;
    var guests = document.forms['package2Form']["bGuests"].value;
    var arrival = document.forms['package2Form']["bArrival"].value;
    var leaving = document.forms['package2Form']["bLeaving"].value;
    var msg4= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg4);


    Email.send({

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in Gangtok Tour Package",
        Body: msg4
    }).then(
        message => alert(message)
    );
}

function package3FormSubmit() {

    
    var name1 = document.forms['package3Form']["bName"].value;
    var email = document.forms['package3Form']["bEmail"].value;
    var phone = document.forms['package3Form']["bPhone"].value;
    var guests = document.forms['package3Form']["bGuests"].value;
    var arrival = document.forms['package3Form']["bArrival"].value;
    var leaving = document.forms['package3Form']["bLeaving"].value;
    var msg5= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg5);


    Email.send({

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in Namchi Tour Package",
        Body: msg5
    }).then(
        message => alert(message)
    );
}

function package4FormSubmit() {

    
    var name1 = document.forms['package4Form']["bName"].value;
    var email = document.forms['package4Form']["bEmail"].value;
    var phone = document.forms['package4Form']["bPhone"].value;
    var guests = document.forms['package4Form']["bGuests"].value;
    var arrival = document.forms['package4Form']["bArrival"].value;
    var leaving = document.forms['package4Form']["bLeaving"].value;
    var msg6= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg6);


    Email.send({

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in Pelling Tour Package Form",
        Body: msg6
    }).then(
        message => alert(message)
    );
}

function package5FormSubmit() {

    
    var name1 = document.forms['package5Form']["bName"].value;
    var email = document.forms['package5Form']["bEmail"].value;
    var phone = document.forms['package5Form']["bPhone"].value;
    var guests = document.forms['package5Form']["bGuests"].value;
    var arrival = document.forms['package5Form']["bArrival"].value;
    var leaving = document.forms['package5Form']["bLeaving"].value;
    var msg7= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg7);


    Email.send({

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in Darjeeling Tour Package Form",
        Body: msg7
    }).then(
        message => alert(message)
    );
}


function package6FormSubmit() {

    
    var name1 = document.forms['package6Form']["bName"].value;
    var email = document.forms['package6Form']["bEmail"].value;
    var phone = document.forms['package6Form']["bPhone"].value;
    var guests = document.forms['package6Form']["bGuests"].value;
    var arrival = document.forms['package6Form']["bArrival"].value;
    var leaving = document.forms['package6Form']["bLeaving"].value;
    var msg8= "Name: "+name1 +"\n    ," + 
              "Email: "+email+"\n    ," + 
              "Phone: "+phone+"\n    ,"+
              "Number of Guests: "+guests+"\n    ,"+
              "Arrival Date: "+arrival+"\n    ,"+
              "Leaving Date: "+leaving;

    console.log(msg8);


    Email.send({

       
        SecureToken: "null",
        To: "manisshh111@gmail.com, ankitsharma97337@gmail.com, northenhills5@gmail.com, razilk03@gmail.com",
        From: "null",
        Subject: "New entry in Dooars Tour Package Form",
        Body: msg8
    }).then(
        message => alert(message)
    );
}
