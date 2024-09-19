const loginBotton = document.getElementById("loginButton");
loginBotton.addEventListener("click", function (event) {
  event.preventDefault();

  const phoneNumber = document.getElementById("phoneNumber").value;

  const pinNumber = document.getElementById("pinNumber").value;
    if ( phoneNumber === '0000' && pinNumber === '0000') {
        window.location.href = '../Home.html'
    } else {
        alert('Please Enter Your Currect Information')
    }
});



