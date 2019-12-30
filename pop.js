  function myFunction(x) {
      if(x.firstChild.className == "fa fa-id-card") {
        console.log(x.firstChild);
        x.firstChild.classList.remove("fa-id-card")
        x.firstChild.classList.add("fa-close");
        document.getElementById("myForm").style.display = "block";
      }
      else {
        x.firstChild.classList.remove("fa-close");
        x.firstChild.classList.add("fa-id-card");
        document.getElementById("myForm").style.display = "none";
      }
  }
