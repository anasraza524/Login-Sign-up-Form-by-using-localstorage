let users = []
function alluser() {
   let alluserinstring = localStorage.getItem("users")
   users = JSON.parse(alluserinstring) || []
   console.log(users);
}

alluser();

function signup() {
   // const username= document.getElementById('username').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const confirmpassword = document.getElementById('confirmpassword').value;

   if (password === confirmpassword) {

      let newuser = {
         fullname: document.getElementById('fullname').value,
         // K_username: username,
         K_email: email,
         number: document.getElementById('number').value,
         age: document.getElementById('age').value,
         gender: document.getElementById('gender').value,
         K_password: password
      }

      for (let i = 0; i < users.length; i++) {
         if (users[i].K_email === email) {
            alert("email Is ALeady in USed")
            return;
         }
      }


      users.push(newuser)
      localStorage.setItem("users", JSON.stringify(users))
      move();
   }

   else {
      alert("Password NOt same")

   }








}



function login() {

   const loginusername = document.getElementById('loginusername').value;
   const loginpassword = document.getElementById('loginpassword').value;

   //  if(users.length == 0 ){
   //    alert("Enter Value")
   //    return;
   // }
   if (users.length == 0 && loginusername.length !== 0 && loginpassword.length !== 0) {
      alert("You Don`t Have an Account \n ! Please Sign in First ")
      return;
   }

   else if (loginusername.length === 0 && loginpassword.length !== 0) {
      alert("Enter Email ")
      return;
   }
   else if (loginusername.length !== 0 && loginpassword.length === 0) {
      alert("Enter Password ")
      return;
   }
   for (let i = 0; i < users.length; i++) {
      if (users[i].K_email === loginusername && users[i].K_password === loginpassword) {
         move();

         return;
      }





      else if (loginpassword == 0) {
         alert("Enter Password")
         return;
      }

      else if (users[i].K_email !== loginpassword && users[i].K_email === loginusername) {
         alert("Wrong Password")
         return;
      }
      else if (users[i].K_email !== loginusername || users[i].K_password !== loginpassword) {

         alert("You Don`t Have an Account \n ! Please Sign in First ")
         return;

      }



   }
}

// if (localStorage.getItem('users')) {
//       const loginDeets = JSON.parse(localStorage.getItem('users'))
//    if (loginusername === loginDeets.email && loginpassword === loginDeets.password) {
//    console.log('Login successful')
//    move()
//       } else {
//           console.log('Wrong credentials')
//        }
//  } else {
//    console.log('Not a registered user')
//    alert("Not a registered user")
//    }
if (users.length === 0) {
   signuppage();
}
else {
   signupcheck()
}


function signupcheck() {
   const loginusernamecheck = document.getElementById('loginusername').value;
   const loginpasswordcheck = document.getElementById('loginpassword').value;


   for (let i = 0; i < users.length; i++)
      if (users[i].K_email === loginusernamecheck) {
         alert("You are Already Sign in")
         return;

      }

      else if (users[i].K_email !== loginusernamecheck ||

         users[i].K_password !== loginpasswordcheck) {
         signuppage()
         return;

      }

      else if (loginusernamecheck == 0 || loginpasswordcheck == 0) {
         signuppage()
         return;
      }

}







function move() {
   window.location.href = "./dashboard.html";
}
function signuppage() {
   window.location.href = "./signup.html";
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

