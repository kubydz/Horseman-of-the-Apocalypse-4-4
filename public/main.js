let grid = document.getElementById("grid")
let pixelCount = 100 * 100

// Créer la grille de pixels
for (let i = 0; i < pixelCount; i++) {
  let pixel = document.createElement("div")
  pixel.classList.add("pixel")
  grid.appendChild(pixel)
}

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

// Ajouter l'effet de hover sur chaque pixel
grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) {
    let color = getRandomColor()
    e.target.style.backgroundColor = color

    // Réinitialiser la couleur après 2 secondes
    setTimeout(() => {
      e.target.style.backgroundColor = "#000"
    }, 2000)
  }
})
