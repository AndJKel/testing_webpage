// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 5000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}







// Search. Information for search obtained from: https://stackoverflow.com/questions/77018595/filter-html-list-based-on-inputs-value
function filterByName(e) {
  const items = document.querySelectorAll("ul.article-list li");
  const searchTerm = e.target.value.trim().toLowerCase();

  items.forEach(item => {
    item.style.display = 'revert';

    if (!item.innerText.toLowerCase().includes(searchTerm)) {
      item.style.display = 'none';
    }
  })
}
