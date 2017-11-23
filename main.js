const pageList = document.querySelector('ul');
const perStudent = pageList.children;
const buttonDiv = document.querySelector('.pagination');
const buttonUl = buttonDiv.querySelector('ul');
const studentsPerPage = 10;
const searchDiv = document.querySelector('.student-search');
const noResultDiv = document.querySelector('.no-result');


// This Function helps determine number of pages  based on how many students are in total
function determineNumberOfPages() {
    let numberOfPages = Math.ceil(perStudent.length / studentsPerPage);
    return numberOfPages;
}

// Function to automatically show first ten students when page loads
function firstTen() {
    for (let i = 0; i < perStudent.length; i++) {
        if (i < studentsPerPage) {
            perStudent[i].style.display = '';
        } else {
            perStudent[i].style.display = 'none';
        }
    }
}

// Function to display search box dynamically
let searchInput = document.createElement('input');
let searchButton = document.createElement('button');
function showSearch() {
    searchInput.placeholder = 'Student Search...';
    searchButton.textContent = 'Search';
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchButton);
}

// This is to divide students between pages
//buttonDiv.addEventListener('click', (event) => {
    //noResultDiv.innerHTML = '';
  //  let buttonNumber = parseInt(event.target.textContent);
  //  let max = buttonNumber * 10;
  //  let min = max - 10;
  //  for (let i = 0; i < perStudent.length; i++) {
    //    if (i >= min && i < max) {
      //      perStudent[i].style.display = '';
      //  }  else {
      //      perStudent[i].style.display = 'none';
      //  }
  //  }
//});


for (let i = 1; i <= determineNumberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = 'active';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonUl.appendChild(pageli);
    pageli.appendChild(pageLink);
}
buttonDiv.addEventListener('click', (event) => {
    noResultDiv.innerHTML = '';
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;
    for (let i = 0; i < perStudent.length; i++) {
        if (i >= min && i < max) {
            perStudent[i].style.display = '';
        }  else {
            perStudent[i].style.display = 'none';
        }
    }
});


// Shows the first ten students
firstTen();

// Function call to show search box if JavaScript is enabled
showSearch();
