const grid = document.getElementById("grid")
const pixelCount = 100 * 100

// Créer la grille de pixels
for (let i = 0; i < pixelCount; i++) {
  const pixel = document.createElement("div")
  pixel.classList.add("pixel")
  grid.appendChild(pixel)
}

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

// Ajouter l'effet de hover sur chaque pixel
grid.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) {
    const color = getRandomColor()
    e.target.style.backgroundColor = color

    // Réinitialiser la couleur après 2 secondes
    setTimeout(() => {
      e.target.style.backgroundColor = "#000"
    }, 2000)
  }
})
