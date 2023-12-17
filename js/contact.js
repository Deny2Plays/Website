const form = document.querySelector("form");
const nickname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const text = document.getElementById("message")

function sendEmail(){
    const bodyMessage = `Username: ${nickname.value}<br>Email: ${email.value}<br>Message: ${text.value}`
    Email.send({
        SecureToken : "62e0ed99-496e-480f-9dbf-be5d00bbd66d",
        To : 'info.deny2plays@gmail.com',
        From : "info.deny2plays@gmail.com",
        Subject: subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item")

    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "" ){
            checkEmail
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        } else{
            errorTxtEmail.innerText = "Your Email Address can't be blank";
        }
    } else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error"); 
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();


    if(!nickname.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !text.classList.contains("error")){
        sendEmail();
        console.log("Email sent");
        form.reset();
        return false;
    }
})





let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x-circle");
    navbar.classList.toggle("active")
}


ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});
