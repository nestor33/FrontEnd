//get values from form
function submitForm(e, form) {
  e.preventDefault();
  var newObject = {
    Name: form.formName.value,
    Options: form.formOptions.value,
    Description: form.formDescription.value,
    imgSrc: "./../../images/cactus.svg",
  };

  console.log(form.formName.value);
  console.log(form.formOptions.value);
  console.log(form.formDescription.value);

  //put to session storage
  sessionStorage.setItem(`${newObject.Name}`, JSON.stringify(newObject));
}
