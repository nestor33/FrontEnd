function Do() {
  let array = JSON.parse(localStorage.products);
  let chosenObject = array.filter((el) => el.id == sessionStorage.id);
  var imageSrc = chosenObject[0].imgSrc;
  console.log(imageSrc);

  var list =
    "<div class = 'chosenFiles' ><h2>Name: " +
    chosenObject[0].Name +
    '</h2><img src=' +
    imageSrc +
    '> <p>Id: ' +
    chosenObject[0].id +
    '</p> </div>';
  document.querySelector('.container').innerHTML = list;
}
