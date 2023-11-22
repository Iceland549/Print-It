const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Select arrows
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Event listener on arrows on click
arrowLeft.addEventListener('click', () => {
  console.log("Clic sur la flèche gauche");
});

arrowRight.addEventListener('click', () => {
  console.log("Clic sur la flèche droite");
});


// Select element for bullet points
const sliderBullets = document.querySelector('.dots'); 

// Count number of slides
const numberOfSlides = slides.length;
console.log('Nombre de slides :', numberOfSlides);

// Boolean to create bullet points
for (let i = 0; i < numberOfSlides; i++) {
  const bullet = document.createElement('li'); // element li created
  bullet.classList.add('dot'); // Class for all bullet points

  if (i === 0) {
    bullet.classList.add('dot_selected'); // Special class to first slide
  }

  sliderBullets.appendChild(bullet); // Add bullet point to parent
}

console.log('Bullet points created :', document.querySelectorAll('.dot').length);

