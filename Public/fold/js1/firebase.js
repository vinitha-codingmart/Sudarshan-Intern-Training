var firebaseConfig = {
    apiKey: "AIzaSyDnttFj9376cydBAq-dwSYKNPB7hBAOWTI",
    authDomain: "test-c8a11.firebaseapp.com",
    databaseURL: "https://test-c8a11.firebaseio.com",
    projectId: "test-c8a11",
    storageBucket: "test-c8a11.appspot.com",
    messagingSenderId: "484718958666",
    appId: "1:484718958666:web:113563e64d0cc530dceeb3"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  

  function signUp(){
    console.log("fire1");
var email = document.getElementById("email");
var password = document.getElementById("password");
console.log()

const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
promise.catch(function(error) {
  
});
// document.getElementById("id01").style.display = "none";
  }

  function signIn(){
    var email = document.getElementById("email1");
    var password = document.getElementById("password1");
    
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    window.location = "/home/system3/Documents/Project/index1.html";
      // document.getElementById("id02").style.display = "none";
      }



      var file;
      const database = firebase.database();

      var filebtn = document.getElementById("filebtn");
     

        // filebtn.addEventListener('change',function(e){
        //   file = e.target.files[0];
        //   console.log("fdff");
        // });

      function add(){
        var filebtn = document.getElementById("filebtn").files[0];
         var name1 = document.getElementById("name");
        var aadharNo = document.getElementById("aadhar");
        var CN = document.getElementById("CN");
        var YOP = document.getElementById("YOP");
        var storageRef = firebase.storage().ref('initial/'+filebtn.name);
        var task = storageRef.put(filebtn);
      
        // firebase.database().ref('users/' + userId).set({
        //   firebase.database().ref().set({
        //   username: name1.value,
        //   aadharNo: aadharNo.value,
        //   CollegeName : CN.value,
        //   YearOfPassing:YOP.value

        // });

        // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
task.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    firebase.database().ref('users/' + name1.value).set({
      username: name1.value,
          aadharNo: aadharNo.value,
          CollegeName : CN.value,
          YearOfPassing:YOP.value,
      URL: downloadURL
    });
    console.log('File available at', downloadURL);
  });
});

        document.getElementById("id04").style.display = "none";

      }