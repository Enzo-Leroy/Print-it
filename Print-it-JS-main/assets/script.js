// Constante contenant les différentes slides du slider

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Différentes variables pour les images

currentImage = 0;
minImage = 0;
maxImage = 3;
folderImages = "./assets/images/slideshow/";

// Récupération des éléments des flèches

const arrows = document.querySelectorAll(".arrow");

// Slider

arrows.forEach((el) =>
	el.addEventListener("click", (event) => {
		if(event.target.getAttribute("id") === "arrowLeft"){
			toAdd = -1;
		}
		else{
			toAdd = 1;
		}

		document
			.getElementById("dot" + currentImage)
			.classList.remove("dot_selected");
		currentImage += toAdd;
		if (currentImage > maxImage) {
			currentImage = minImage;
		} else {
			if (currentImage < minImage) {
				currentImage = maxImage;
			}
		}

		document
			.getElementById("banner-img")
			.setAttribute("src", folderImages + slides[currentImage].image);
		document.getElementById("dot" + currentImage).classList.add("dot_selected");
		document.getElementById("tagLine").innerHTML = slides[currentImage].tagLine;
	})
);