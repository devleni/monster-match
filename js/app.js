const container = document.querySelector(".container")
const coffees = [
  { name: "Aiuegoxix", image: "images/monster1.png" },
  { name: "Mhyvha", image: "images/monster2.png" },
  { name: "Iuvriogg'zhi", image: "images/monster3.png" },
  { name: "Vrugrox", image: "images/monster4.png" },
]

const showCoffees = () => {
  let output = "";
  coffees.forEach(({ name, image }) => {
    output += `
      <div class="card">
      <img class="card--avatar" src=${image} />
      <h2 class="card--title">${name}</h2>
      <a class="card--link" href="#">Meet</a>
      </div>
    `;
  });
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCoffees);