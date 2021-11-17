//get values from form
function submitForm(e, form) {
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

  let products = JSON.parse(localStorage.getItem('products'));

  products.push(newObject);

  localStorage.setItem('products', JSON.stringify(products));
  //put to session storage
}
