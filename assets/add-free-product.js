// EXO 1-3 : Ajouter automatiquement le cadeau offert passé les 100€
const formAddProduct = document.querySelectorAll('form[action="/cart/add"]');

formAddProduct.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    console.log('added to cart !');
    fetch('/cart.js')
      .then((response) => response.text())
      .then((responseText) => {
        data = JSON.parse(responseText);
        console.log(data);
      });
  });
});
