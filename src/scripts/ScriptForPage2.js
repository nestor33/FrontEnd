function submitForm(e, form) {
  e.preventDefault();
  var newObject = {
    Name: form.formName.value,
    Options: form.formOptions.value,
    Description: form.formDescription.value,
    imgSrc: './../../images/cactus.svg',
  };

  console.log(form.formName.value);
  console.log(form.formOptions.value);
  console.log(form.formDescription.value);

  sessionStorage.setItem('newObject', JSON.stringify(newObject));
}
