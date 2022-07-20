const main = document.querySelector('.main')
function loadProducts() {
    main.innerHTML = `<div class="images">
                        <img src="images/kise_hadie_bahman.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_bahman2.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_bahman3.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_bahman4.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_esfand.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_farvardin.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_farvardin2.jpeg" alt="kise hadie bahman">
                        <img src="images/kise_hadie_ordibehesht.jpeg" alt="kise hadie bahman">
                      </div>` 
}

export {loadProducts as default}