// Tableau de slides avec des images et des textes associés
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Sélection des éléments du DOM
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const sliderBullets = document.querySelector('.dots'); 
// Count number of slides
const numberOfSlides = slides.length;
console.log('Nombre de slides :', numberOfSlides);


// Index actuel de la slide affichée
let currentIndex = 0;

// Gestionnaire d'événements pour avancer à la slide suivante
arrowRight.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0; // Revenir à la première slide si c'est la dernière
  } else {
    currentIndex++; // Passer à la slide suivante
  }
  
  updateSlide(currentIndex);
  updateDot(currentIndex);
});


// Gestionnaire d'événements pour revenir à la slide précédente
arrowLeft.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0; // Revenir à la première slide si c'est la dernière
  } else {
    currentIndex--; // Passer à la slide suivante
  }
  
  updateSlide(currentIndex);
  updateDot(currentIndex);
});


// Créer des dots pour chaque slide
for (let i = 0; i < numberOfSlides; i++) {
  const bullet = document.createElement('li'); // element li created
  bullet.classList.add('dot'); // Class for all bullet points

  if (i === 0) {
    bullet.classList.add('dot_selected'); // Special class to first slide
  }

  sliderBullets.appendChild(bullet); // Add bullet point to parent
}

console.log('Bullet points created :', document.querySelectorAll('.dot').length);


// Mettre à jour l'image et le texte de la slide actuelle
function updateSlide(index) {

	const sliderImage = document.querySelector('.slides-image');
	const sliderText = document.querySelector('.slides-tagLine');

    sliderImage.src = slides[index].image;
    sliderText.innerHTML = slides[index].tagLine;
}

// Mettre à jour la sélection des dots
function updateDot(index) {
    const dots = document.querySelectorAll('.dot');

    // Ajouter des écouteurs d'événements à chaque dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          updateSlide(index);
          updateDot(index);
        });
      });

    // Mettre à jour la sélection visuelle des dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}



// Afficher la première slide au chargement de la page
updateSlide(currentIndex);
updateDot(currentIndex);

console.log(document.querySelector('.slides-image'))
