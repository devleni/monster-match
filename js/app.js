if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))
  })
};

const container = document.querySelector(".container")
const monsters = [
  { name: "Aiuegoxix", image: "images/monster1.png" },
  { name: "Mhyvha", image: "images/monster2.png" },
  { name: "Iuvriogg'zhi", image: "images/monster3.png" },
  { name: "Vrugrox", image: "images/monster4.png" },
]

const showMonsters = () => {
  let output = "";
  monsters.forEach(({ name, image }) => {
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

document.addEventListener("DOMContentLoaded", showMonsters);