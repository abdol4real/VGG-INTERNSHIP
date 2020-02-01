//Variables
const submitBtn = document.getElementById('submitBtn');
const regExp = /^(\w{8,16})$/ ;




//Eventlisteners
submitBtn.addEventListener('click', (event) => {
  event.preventDefault;

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const cPassword = document.getElementById('cPassword').value;

  if (username !== '' && email !== '' && password !== '' && cPassword !== '') {

    if(regExp.test(password) && regExp.test(cPassword)){
      if (password === cPassword) {
        alert("Successfully registered into VGG Virtual Internship Program");
      }else if (password !== cPassword) {
        alert(`Password don't not match!!!`);
      }

    }else {
      alert("Password must be between 8 and 16");
    }


    //

  } else {
    console.log('not just okay');
    alert("You can not leave the fields empty");
  }
})


//functions
