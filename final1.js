//we got allthe id's here
const firstBlock = document.getElementById('first_block');
const mainHeading = document.getElementById('main_heading');
const secondBlock = document.getElementById('second_block');
const secondHeading = document.getElementById('second_heading');
//let's change the way page looks using these
// mainHeading.style.backgroundColor = 'Green';
/* both are correct but <h1> element coloroverlaps the block element color, but both will be prsent*/
firstBlock.style.backgroundColor = 'orange';
firstBlock.style.borderBottom = '3px solid green';

mainHeading.textContent = 'Fruits in Shop'
mainHeading.style.color = 'white';
secondHeading.style.color = 'olive';
secondHeading.textContent = 'Fruits for sale';
//now we want all the classess
// const individualAccess = document.getElementsByClassName('each_element_access');
// for(let i = 0; i<individualAccess.length;i++){
//     individualAccess[i].style.fontWeight = 'bold';
//     if(i === 2){
//         individualAccess[i].textContent = 'Completed';
//     }
// }
// another way of writing this using Comlete access variable or <ul> tag
// const completeAccess = document.querySelector('.full_class_access');
const nextStepFrom_completeAccess = document.getElementsByTagName('li');

// Loop through all <li> elements
for (let i = 0; i < nextStepFrom_completeAccess.length; i++) {
    // Apply italic style to all <li> elements
    nextStepFrom_completeAccess[i].style.fontStyle = 'italic';

    // For the third <li> element (index 2), apply additional styles
    if (i === 2) {
        nextStepFrom_completeAccess[i].style.backgroundColor = 'gray'; // Change background color to gray
        nextStepFrom_completeAccess[i].style.color = 'red'; // Change text color to white
        nextStepFrom_completeAccess[i].style.fontStyle = 'oblique'; // Change font style to oblique (overrides italic)
    }
}

