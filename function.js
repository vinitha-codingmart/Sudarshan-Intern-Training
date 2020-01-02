console.log("HI");
var FormData = require("form-data");
var fs = require("fs");

var results;

function loadData() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  document.getElementsByTagName("TD").innerHTML = '';

      //       var t = document.getElementById("tab");
      // var trs = t.getElementsByTagName("tr");
      // var tds = null;

      // for (var i=0; i<trs.length; i++)
      // {
      //     tds = trs[i].getElementsByTagName("td");
      //     for (var n=0; n<tds.length;n++)
      //     {
      //         tds[n].innerHTML='';
      //     }
      // }

      var result = this.responseText;
      results = JSON.parse(result);

      console.log("Llll" + results[0].name);

      results.forEach(comment => {
        var row = document.createElement("tr");
        var name = document.createElement("td");
        var aadhar = document.createElement("td");
        var collegeName = document.createElement("td");
        var year = document.createElement("td");
        var image = document.createElement("td");
        var buttons = document.createElement("td");
        var edit = document.createElement("button");
        edit.innerHTML = "EDIT";
        var view = document.createElement("button");
        view.innerHTML = "VIEW";

        var textName = document.createTextNode(comment.name);
        var textAadhar = document.createTextNode(comment.aadhar);
        var textCollege = document.createTextNode(comment.college);
        var textYear = document.createTextNode(comment.year);
        var img = document.createElement("img");
        let temp = `/public1/${comment.id}/${comment.image}`;
        img.src = temp;
        console.log("KK", img.src);
        img.style.height = "100px";
        img.style.justifyContent = "center";

        view.setAttribute("id", "viewid");
        edit.setAttribute("id", "editid");
        view.addEventListener("click", function() {
          myfunction(comment.id);
          console.log("sss" + comment.id);
        });

        edit.addEventListener("click", function() {
          myfunction1(comment.id);
        });
        // view.onclick = myfunction(comment.id);
        // view.addEventListener("click", myfunction);

        name.appendChild(textName);
        aadhar.appendChild(textAadhar);
        collegeName.appendChild(textCollege);
        year.appendChild(textYear);
        image.appendChild(img);

        row.appendChild(name);
        row.appendChild(aadhar);
        row.appendChild(collegeName);
        buttons.appendChild(edit);
        buttons.appendChild(view);
        row.appendChild(buttons);
        row.appendChild(year);
        row.appendChild(image);
        document.getElementById("tab").appendChild(row);
      });
    }
  };

  xhttp.open("GET", "/home", true);
  xhttp.send();
}

function myfunction(i) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      results = JSON.parse(result);

      var textName = document.createTextNode(results[0].name);
      var textAadhar = document.createTextNode(results[0].aadhar);
      var textCollege = document.createTextNode(results[0].college);
      var textYear = document.createTextNode(results[0].year);
      document.getElementById("name1").innerHTML = "";
      document.getElementById("aadhar1").innerHTML = "";
      document.getElementById("CN1").innerHTML = "";
      document.getElementById("YOP1").innerHTML = "";
      document.getElementById("img1").src = "";
      document.getElementById("name1").appendChild(textName);
      document.getElementById("aadhar1").appendChild(textAadhar);
      document.getElementById("CN1").appendChild(textCollege);
      document.getElementById("YOP1").appendChild(textYear);
      document.getElementById("img1").src = `/public1/${results[0].id}/${results[0].image}`;
      document.getElementById("img1").style.height = "100px";
      document.getElementById("img1").style.justifyContent = "center";

      document.getElementById("id05").style.display = "block";
    }
  };

  xhttp.open("GET", "/show/" + i, true);
  xhttp.send();
}

var idd;
function myfunction1(i) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      results = JSON.parse(result);
      idd = results[0].id;
      console.log("In" + idd);

      var textName = document.createTextNode(results[0].name);
      var textAadhar = document.createTextNode(results[0].aadhar);
      var textCollege = document.createTextNode(results[0].college);
      var textYear = document.createTextNode(results[0].year);
      document.getElementById("name2").innerHTML = "";
      document.getElementById("aadhar2").innerHTML = "";
      document.getElementById("CN2").innerHTML = "";
      document.getElementById("YOP2").innerHTML = "";
      document.getElementById("img2").src = "";

      document.getElementById("name2").appendChild(textName);
      document.getElementById("aadhar2").appendChild(textAadhar);
      document.getElementById("CN2").appendChild(textCollege);
      document.getElementById("YOP2").appendChild(textYear);
      document.getElementById("img2").src = `/public1/${results[0].id}/${results[0].image}`;
      document.getElementById("img2").style.height = "100px";
      document.getElementById("img2").style.width = "200px";
      document.getElementById("img2").style.justifyContent = "center";

      document.getElementById("id06").style.display = "block";
    }
  };

  xhttp.open("GET", "/show/" + i, true);
  xhttp.send();
}

function add2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      console.log(result);
      // loadData();
      location.reload();
    }
  };

  //   var oData = document.forms.namedItem("fileinfo1");
  // form1 = new FormData(oData);
  var form1 = new FormData();
  form1.append("name", document.getElementById("name2").value);
  form1.append("aadhar", document.getElementById("aadhar2").value);
  form1.append("college", document.getElementById("CN2").value);
  form1.append("year", document.getElementById("YOP2").value);
  // for (var pair of form1.entries())
  // {
  //   console.log("in");
  //  alert(pair[0]+ ', '+ pair[1]);
  // }
  xhttp.open("POST", "/update/" + idd, true);
  // xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(form1);

  document.getElementById("id06").style.display = "none";
  // console.log(document.getElementById("name2").value);
  // var name = document.getElementById("name2").value;
  // var aadhar = document.getElementById("aadhar2").value;
  // var college = document.getElementById("CN2").value;
  // var year = document.getElementById("YOP2").value;
  // alert("D", name);
  // xhttp.open("POST", "/update/" +idd, true);
  // xhttp.setRequestHeader("Content-Type", "application/json");
  // xhttp.send(
  //   '{"name":"' +
  //     name +
  //     '","aadhar":"' +
  //     aadhar +
  //     '","college":"' +
  //     college +
  //     '","year":"' +
  //     year+
  //    '"}'

  // );
}

function add1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      document.getElementById("id04").style.display = "none";
      //  loadData();
      location.reload();
    }
  };
  var oData = document.forms.namedItem("fileinfo");
  form = new FormData(oData);
  //   var form = new FormData();
  form.append("name", document.getElementById("name").value);
  form.append("aadhar", document.getElementById("aadhar").value);
  form.append("college", document.getElementById("CN").value);
  form.append("year", document.getElementById("YOP").value);
  // form.append('firstFile', fileInputElement.files[0])
  // var name = document.getElementById("name").value;
  // var aadhar = document.getElementById("aadhar").value;
  // var college = document.getElementById("CN").value;
  // alert('hhh',form);
  // //   alert("out");
  //   for (var pair of form.entries())
  // {
  //   console.log("in");
  //  alert(pair[0]+ ', '+ pair[1]);
  // }
  xhttp.open("POST", "/insert", true);
  // xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(form);
  // xhttp.setRequestHeader("Content-Type", "application/json");
  // xhttp.send(
  //   '{"name":"' +
  //     name +
  //     '","aadhar":"' +
  //     aadhar +
  //     '","college":"' +
  //     college +
  //     '"}'
  // );
}
