const express = require("express");
const mysql = require("mysql");
var path = require("path");
var bodyParser = require("body-parser");
const formidable = require("express-formidable");
var fs = require("fs");

const app = express();
// app.use(bodyParser.json());
app.use("/public1", express.static(path.join(__dirname, "public1")));
app.use(express.static(path.join(__dirname, "project")));
app.use(formidable());
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "sampleDB"
});

connection.connect(function(error) {
  if (error) {
    console.log("Error");
  } else {
    console.log("Connected");
  }
});

app.get("/", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/index.html");
});

app.get("/home/system3/Documents/Project/index1.html", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/index1.html");
});
app.get("/home/system3/Documents/Project/function.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/function.js");
});
app.get("/samp.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/samp.css");
});
app.get("/home/system3/Documents/Project/style.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/style.css");
});
app.get("/home/system3/Documents/Project/style1.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/style1.css");
});

app.get("/home/system3/Documents/Project/style2.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/style2.css");
});

app.get("/home/system3/Documents/Project/style3.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/style3.css");
});

app.get("/home/system3/Documents/Project/style4.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/style4.css");
});
app.get("/home/system3/Documents/Project/style5.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/style5.css");
});
app.get("/home/system3/Documents/Project/sam.css", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/sam.css");
});

app.get("/firebase.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/firebase.js");
});
app.get("/samp.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/samp.js");
});
app.get("/home/system3/Documents/Project/signuo.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/signup.js");
});
app.get("/home/system3/Documents/Project/pop.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/pop.js");
});
app.get("/home/system3/Documents/Project/video.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/video.js");
});
app.get("/home/system3/Documents/Project/video1.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/video1.js");
});
app.get("/home/system3/Documents/Project/sample2.js", function(req, res) {
  res.sendFile("/home/system3/Documents/Project/sample2.js");
});
app.get("/home", function(req, res) {
  res.statusCode == 200;
  res.setHeader("Content-Type", "application/json");

  connection.query("SELECT * FROM sample", function(error, results, fields) {
    if (error) throw error;

    var comments = JSON.stringify(results);
    res.end(comments);
  });
});

app.get("/show/:id", function(req, res) {
  res.statusCode == 200;
  // console.log(req.params.id);
  // res.setHeader("Content-Type", "application/json");
  connection.query(
    "SELECT * FROM sample WHERE id = ?",
    [req.params.id],
    function(error, results, fields) {
      if (error) throw error;

      console.log("view" + results[0].name);

      var comments = JSON.stringify(results);
      res.end(comments);
    }
  );
});

app.post("/update/:id", function(req, res) {
  console.log("hello");
  // name = req.body.name;
  // aadhar = req.body.aadhar;
  // college = req.body.college;
  // year = req.body.year;
  connection.query(
    "UPDATE sample SET name = ?,aadhar=?,college=?,year=? WHERE id=?",
    [req.fields.name,
      req.fields.aadhar,
      req.fields.college,
      req.fields.year,
       req.params.id],
    function(error, results, fields) {
      if (error) throw error;

      console.log("SUCCESS");
    }
  );

  res.end("Success");
});

app.post("/insert", function(req, res) {
  console.log("post");
  res.statusCode = 200;
  // var oldpath = req.files.myfile.path;
  // var newpath = path.join(__dirname, "public1", req.files.myfile.name); //'./public1/'+req.files.myfile.name;
  // console.log("OUT");
  // fs.rename(oldpath, newpath, function(err) {
  //   if (err) {
  //     console.log("gg" + err);
  //     throw err;
  //   }
  // });
  // res.setHeader("Content-Type", "text/plain");
  console.log("eee", req.files.myfile.path);
  console.log("fields", req.fields.name);
  //   var n = req.body.name;
  //   var a = req.body.aadhar;
  //   var c = req.body.college;
  connection.query(
    "INSERT INTO sample(name,aadhar,college,year) VALUES (?,?,?,?)",
    [
      req.fields.name,
      req.fields.aadhar,
      req.fields.college,
      req.fields.year,
      // req.files.myfile.name
    ],
    function(error, results, fields) {
      if (error) throw error;
       console.log("que",results.insertId);
       var oldpath = req.files.myfile.path;
      //  var newpath = path.join(__dirname, `/public1/${results.insertId}`, req.files.myfile.name); //'./public1/'+req.files.myfile.name;
      var newpath1 = path.join(__dirname, `/public1/${results.insertId}`, req.files.myfile.name); 
      console.log("OUT");
       console.log("PP"+newpath);
       if (!fs.existsSync(newpath1)){
         console.log("LLKK");
         fs.mkdir( __dirname + `/public1/${results.insertId}`, err => {})
    }
    var newpath = path.join(__dirname,`/public1/${results.insertId}`,req.files.myfile.name);
       fs.rename(oldpath, newpath, function(err) {
         if (err) {
           console.log("gg" + err);
           throw err;
         }
       })
       connection.query(
        "UPDATE sample SET image = ? WHERE id = ?",[req.files.myfile.name,results.insertId],
        function(error, results, fields) {
          if (error) throw error;
    }
       );
  }
  );
  
  // var content = "";
  // req.on("data", function(data) {
  //   content += data;

  //   var obj = JSON.parse(content);
  //   console.log("inside",obj.name);
  //   connection.query(
  //     "INSERT INTO sample(name,aadhar,college) VALUES (?,?,?)",
  //     [obj.name, obj.aadhar, obj.college],
  //     function(error, results, fields) {
  //       if (error) throw error;

  //       console.log("SUCCESS");
  //     }
  //   );

  res.end("Success");
});

app.listen("3004", () => {
  console.log("Server started on port 3004");
});
