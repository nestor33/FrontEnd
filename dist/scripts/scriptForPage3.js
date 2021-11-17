//Add products in
function Do() {
  let array = JSON.parse(localStorage.products);
  for (const [key, value] of Object.entries(sessionStorage)) {
    let chosenObject = array.filter((el) => el.id == JSON.parse(key));
    console.log(chosenObject);
    var imageSrc = chosenObject[0].imgSrc;

    var list =
      "<div class = 'chosenFiles' ><h2>Name: " +
      chosenObject[0].Name +
      "</h2><img src=" +
      imageSrc +
      "> <p>Id: " +
      chosenObject[0].id +
      "</p> </div>";
    document.querySelector(".container").innerHTML += list;
  }
}
