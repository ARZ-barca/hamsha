import loadProducts from "./products";
import loadContacts from "./contact";

const productsButton = document.querySelector('.products-button')
const contactsButton = document.querySelector('.contacts-button')
const title = document.querySelector('.title')

loadProducts()

productsButton.addEventListener('click', function() {
  loadProducts()
})

title.addEventListener('click', function() {
  loadProducts()
})


contactsButton.addEventListener('click', function() {
  loadContacts()
})