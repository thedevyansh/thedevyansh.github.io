var firebaseConfig = {
    apiKey: "AIzaSyCkEshJgMnos8rwpV2FtprEzUjwA4M_YQQ",
    authDomain: "portfolio-12648.firebaseapp.com",
    databaseURL: "https://portfolio-12648.firebaseio.com",
    projectId: "portfolio-12648",
    storageBucket: "portfolio-12648.appspot.com",
    messagingSenderId: "91591628217",
    appId: "1:91591628217:web:9d0849a461e1ec2fc71268",
    measurementId: "G-7RHEXR9ZDW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let formMessage = firebase.database().ref('messages');


const messageform = document.querySelector('#messageform');

messageform.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    sendMessage(name, email, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {document.querySelector('.alert').style.display = 'none'}, 4000);

    document.getElementById('messageform').reset();
}

function sendMessage(name, email, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      message: message
    });
  }