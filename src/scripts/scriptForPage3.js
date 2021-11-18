//Add products to Page 3
document.addEventListener("DOMContentLoaded", function () {
  console.log("123");
  Do();
});

function Do() {
  let array = JSON.parse(localStorage.products);
  console.log(array);
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
