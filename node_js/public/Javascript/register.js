// function validateForm() {
//   let pw1 = document.getElementById("validationCustom03").value;
//   let pw2 = document.getElementById("validationCustom04").value;
//   let email = document.getElementById("validationCustom02").value;
//   let phone = document.getElementById("validationCustom05").value;
//   let username = document.getElementById("validationCustom01").value;

//   if (!isNaN(username)) {
//     document.getElementById("blankMsg").innerHTML =
//       "Only characters are allowed";
//     return false;
//   }

//   if (pw1.length < 8) {
//     document.getElementById("message1").innerHTML =
//       "Password length must be atleast 8 characters";
//     return false;
//   }

//   if (pw1.length > 15) {
//     document.getElementById("message1").innerHTML =
//       "Password length must not exceed 15 characters";
//     return false;
//   }

//   if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
//     document.getElementById("message3").innerHTML = "Invalid Email Address";
//     return false;
//   }

//   if (phone.length != 10) {
//     document.getElementById("message4").innerHTML = "Invalid Phone Number";
//     return false;
//   }

//   if (pw1 != pw2) {
//     document.getElementById("message2").innerHTML = "Passwords are not same";
//     return false;
//   } else {
//     alert("Your Account Was Created Successfully!");
//   }
// }
// document.querySelector("#register").addEventListener("submit", function (e) {
//   if (!validateForm()) {
//     e.preventDefault();
//   }
// });

// function validateEmail(){

//   let input = document.getElementById("email");

  

//   let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

//   if (!input.value.match(pattern)){

//     input.classList.remove("good-email");
//     input.classList.add("bad-email");
//     document.getElementById("bt").disabled = true;
//       // bt.classList.add("bad-email")
//   }

//   else {

//     input.classList.remove("bad-email");
//         input.classList.add("good-email");
//         document.getElementById("bt").disabled = false;
      
//   }
// }

function validatepassword()
{
  let pw1 = document.getElementById("validationCustom03").value;
  let pw2 = document.getElementById("validationCustom04").value;
  if (pw1 != pw2) {

        document.getElementById("message2").innerHTML = "Passwords are not same";
        return false;
      } else {
        document.getElementById("message2").innerHTML = "";
        return true;
      }
}

function validateForm()
{
  if(validatepassword())
   {
    document.getElementById("bt").disabled = false;
   
    return true;
   }
   else{
    document.getElementById("bt").disabled = true;
    
    return false;
   }
}

 

