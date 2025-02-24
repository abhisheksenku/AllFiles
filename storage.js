// Handle form submission
const mYForm = document.getElementById('userForm');
mYForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
  
    // Collect form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Create a user object
    // const userDetails = { username, email, phone };
    const userDetails = {username, email, phone};
      // Retrieve existing user data from local storage, or initialize an empty array if none exists
    let existingUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
  
      // Add the new user details to the array
    existingUsers.push(userDetails)
    // Store the object in local storage
    try {
      localStorage.setItem('userDetails', JSON.stringify(existingUsers));
      alert('User details have been saved successfully!');
    } catch (error) {
      console.error('Failed to save user details:', error);
      alert('An error occurred while saving your details.');
    }
  });
  
//   // Pre-fill form with saved data
//   window.onload = function () {
//     const savedDetails = JSON.parse(localStorage.getItem('userDetails'));
//     if (savedDetails) {
//       document.getElementById('username').value = savedDetails.username || '';
//       document.getElementById('email').value = savedDetails.email || '';
//       document.getElementById('phone').value = savedDetails.phone || '';
//     }
//   };
  
// const buttoN = document.getElementById('button');
// buttoN.addEventListener('click',function(event){
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('number_phone').value;
//     //saving the data whatever is entered into local storage
//     localStorage.setItem('username',username);
//     localStorage.setItem('email',email);
//     localStorage.setItem('number_phone',phone);
//     alert('form is saved');
// })
