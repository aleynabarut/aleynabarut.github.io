function buton(){
    alert("Hoşgeldiniz");
}


function myFunction() {
    var at = document.getElementById("email").value.indexOf("@");

    submitOK = "true";

  
    if (at == -1) {
      alert("Geçerli Değil!");
      submitOK = "false";
    }
  
    if (submitOK == "false") {
      return false;
    }
  }