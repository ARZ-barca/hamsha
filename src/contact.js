const main = document.querySelector('.main')
function loadContacts() {
  main.innerHTML = `
<div class="contacts">
  <div class="insta-row"><a href="https://www.instagram.com/hamsha.gallery/" class="insta-link" target="_blank"><img src="images/instagram.svg" alt="instagram-logo" class="insta-logo"><span class="insta-label">instagram</span></a></div>
  <div class="whatsapp-row"><img src="images/whatsapp.svg" alt="whatsapp-logo" class="whatsapp-logo"><span class="whatsapp-label">whatsapp: 09120685569</span></div>
</div>
`;
}


export {loadContacts as default}
                 



















































