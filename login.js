let users = []
function alluser(){
let alluserinstring = localStorage.getItem("users")
users= JSON.parse(alluserinstring) || []
console.log(users);
}

alluser();

function adduser(){
const username= document.getElementById('username').value;
    const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


if(username && email && password){
   let newuser ={
fullname: document.getElementById('fullname').value ,
username: username,
email: email ,
number: document.getElementById('number').value ,
age: document.getElementById('age').value ,
gender: document.getElementById('gender').value ,
password: password

   }
   users.push(newuser)
   localStorage.setItem("users",JSON.stringify(users))


}
else if(newuser === localStorage.getItem('users')){
alert("Data is in Used");

}
    

   }


function login(){
  

   const loginusername = document.getElementById('loginusername').value;
   const loginpassword = document.getElementById('loginpassword').value;


   if (localStorage.getItem('users')) {
         const loginDeets = JSON.parse(localStorage.getItem('users'))
      if (loginusername === loginDeets.email && loginpassword === loginDeets.password) {
      console.log('Login successful')
      move()
         } else {
             console.log('Wrong credentials')
          }
    } else {
      console.log('Not a registered user')
      alert("Not a registered user")
      }
      

   




}

function move() {
   window.location.href = "./dashboard.html";
}


// if (localStorage.getItem('UsersLogin')) {
//    const loginDeets = JSON.parse(localStorage.getItem('UsersLogin'))
//    if (loginEmail === loginDeets.email && loginPass === loginDeets.password) {
//        console.log('Login successful')
//    } else {
//        console.log('Wrong credentials')
//    }
// } else {
//    console.log('Not a registered user')
// }

