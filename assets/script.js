// Tableau de slides avec des images et des textes associés
const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments du DOM
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const sliderBullets = document.querySelector(".dots");
const numberOfSlides = slides.length;

// Index actuel de la slide affichée
let currentIndex = 0;

// Gestionnaire d'événements pour avancer à la slide suivante
arrowRight.addEventListener("click", () => {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;  
  } else {
    currentIndex++;  
  }

  console.log(`Flèche droite cliquée - Index image : ${currentIndex}`);
  updateSlide(currentIndex);
  updateDot(currentIndex);
});

// Gestionnaire d'événements pour revenir à la slide précédente
arrowLeft.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;  
  } else {
    currentIndex--;  
  }

  console.log(`Flèche gauche cliquée - Index image : ${currentIndex}`);
  updateSlide(currentIndex);
  updateDot(currentIndex);
});

// Créer des dots pour chaque slide
for (let i = 0; i < numberOfSlides; i++) {
  const bullet = document.createElement("span");  
  bullet.classList.add("dot");  

  if (i === 0) {
    bullet.classList.add("dot_selected");  
  }

  sliderBullets.appendChild(bullet);  

  // Ajouter des écouteurs d'événements à chaque dot
  bullet.addEventListener("click", () => {
    console.log(`Bullet point cliqué - Index : ${i}`);
    updateSlide(i);
    updateDot(i);
  });
}

// Mettre à jour l'image et le texte de la slide actuelle
function updateSlide(index) {
  const sliderImage = document.querySelector(".slides-image");
  const sliderText = document.querySelector(".slides-tagLine");

  sliderImage.src = slides[index].image;
  sliderText.innerHTML = slides[index].tagLine;
}

// Mettre à jour la sélection des dots
function updateDot(index) {
  const dots = document.querySelectorAll(".dot");

  // Mettre à jour la sélection visuelle des dots
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
