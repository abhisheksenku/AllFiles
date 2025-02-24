// const parentElement = document.getElementById('second_block');
// const newElement = document.createElement('li');
// //setting content for the newly created element
// newElement.innerText = 'At cheap price';
// newElement.style.color = 'olive';
// newElement.style.padding = '10px';
// //now appending the newly created elemnt to the page
// parentElement.appendChild(newElement);
// //creating multiple items
// const parentElement = document.getElementById('second_block');
// const items = ['Item 1', 'Item 2', 'Item 3'];

// items.forEach((item) => {
//     const newItem = document.createElement('li');
//     newItem.innerText = item;
//     newItem.style.color = 'green';
//     newItem.style.listStyle = 'none';
//     newItem.style.margin = '20px'
//     parentElement.appendChild(newItem);
// });
//there was no issue with the above code, now im going to try on my own
const firstBlock = document.getElementById('first_block');
const newHeading =  document.createElement('h3');
newHeading.innerText = 'Buy fruits @ cheap price';
newHeading.style.color = 'olive';
newHeading.style.listStyle = 'none';
newHeading.style.fontStyle = 'italic';
firstBlock.appendChild(newHeading);
//to add more text
const secondHeading = document.getElementById('second_heading');
const newParagraph = document.createElement('p');
newParagraph.id = 'fruits_total';
newParagraph.innerText = 'Dont be late';
secondHeading.after(newParagraph);