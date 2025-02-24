// id="first_block"
// id="main_heading"
// id="second_block"
// id="second_heading"
// class="full_class_access"
// class="each_element_access"
// const firstBlock = document.getElementById('first_block');
// const mainHeading = document.getElementById('main_heading');
// const secondBlock = document.getElementById('second_block');
// const secondHeading = document.getElementById('second_heading');
// const fullAccess = document.querySelector('.full_class_access');
// const individualAccess = document.querySelectorAll('.each_element_access');

// fullAccess.style.backgroundColor = 'pink';
// fullAccess.style.padding = '20px';
// fullAccess.style.margin = '20px';
// fullAccess.style.width = '50%';
// fullAccess.style.borderRadius = '5px';

// for(i=0; i<individualAccess.length;i++){
//     individualAccess[i].style.backgroundColor = 'lightyellow';
//     individualAccess[i].style.padding = '20px';
//     individualAccess[i].style.margin = '10px';
//     individualAccess[i].style.listStyle = 'none';
//     individualAccess[i].style.borderRadius = '10px';
// }
//////////////////////////////////////////////////////
const fullAccess = document.querySelector('.full_class_access');

fullAccess.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit_button')) {
        const listItem = event.target.closest('.each_element_access');
        
        // Get the fruit name (first text node)
        const fruitName = listItem.firstChild.nodeType === Node.TEXT_NODE 
            ? listItem.firstChild.textContent.trim() 
            : listItem.childNodes[0].textContent.trim();
        
        // Prompt for new name
        const newName = prompt('Edit fruit name:', fruitName);
        
        if (newName && newName.trim()) {
            // Update the text node with the new name
            listItem.childNodes[0].textContent = newName.trim();
        }
    }
});
