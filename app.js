let formMessage = firebase.database().ref('messages');


const messageform = document.querySelector('#messageform');

messageform.addEventListener('submit', formSubmit);

document.querySelector('#reset').addEventListener('click', () => {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#message').value = '';
});

function formSubmit(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    sendMessage(name, email, message);

    //document.getElementById('messageform').reset();
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
}

function sendMessage(name, email, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      message: message
    });
  }
