import { Item } from './interfaces';

const form = document.getElementById('add-form') as HTMLFormElement;
//get values from form
document.addEventListener('DOMContentLoaded', function () {
  console.log('form');
  console.log(form);
  if (form) {
    form.addEventListener('submit', submitForm(form));
  }
});
function submitForm(form: HTMLFormElement) {
  return function (e: Event) {
    e.preventDefault();
    var newObject = {
      id: form.formName.value,
      Name: form.formName.value,
      Description: form.formDescription.value,
      imgSrc: './../../images/cactus.svg',
    };

    console.log(form.formName.value);
    console.log(form.formOptions.value);
    console.log(form.formDescription.value);

    let itemsProducts = localStorage.getItem('products');
    if (itemsProducts) {
      let products = JSON.parse(itemsProducts);

      products.push(newObject);

      localStorage.setItem('products', JSON.stringify(products));
    }
    //put to session storage
  };
}
