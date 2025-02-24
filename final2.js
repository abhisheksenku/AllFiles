// first_block
// main_heading
// second_block
// second_heading
// full_class_access
//each_element_access
const firstBlock = document.getElementById('first_block');
const mainHeading  = document.querySelector('#main_heading');
const secondBlock = document.getElementById('second_block');
const secondHeading = document.querySelector('#second_heading');
const fullAccess = document.querySelector('.full_class_access');
const individualAccess = document.querySelectorAll('.each_element_access');
mainHeading.style.textAlign = 'center';
secondHeading.style.marginLeft = '30px';
secondHeading.style.color = 'brown';
firstBlock.style.backgroundColor = 'skyblue';

fullAccess.style.backgroundColor = 'gray';
fullAccess.padding = '30px';
fullAccess.style.margin = '30px';
fullAccess.style.width = '50%';
fullAccess.style.borderRadius = '5px';
for (let i = 0; i < individualAccess.length; i++) {
    individualAccess[i].style.backgroundColor = 'white';
    individualAccess[i].style.padding = '30px';
    individualAccess[i].style.margin = '20px'; // Adds 15px vertical and 30px horizontal spacing
    individualAccess[i].style.borderRadius = '5px';
    individualAccess[i].style.listStyle = 'none';
    if ((i + 1) % 2 === 0) {
        individualAccess[i].style.backgroundColor = 'brown';
        individualAccess[i].style.color = 'white';
    }
}

