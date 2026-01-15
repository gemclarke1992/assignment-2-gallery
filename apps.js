let currentIndex = 0;
const displayedImage = document.querySelector(".gallery-img");
const thumbBar = document.querySelector(".thumb-bar");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

const images = [
  {
    filename: "mainimage.jpeg",
    alt: "A stylized Viking helmet with axes, depicted in a vibrant vector design, representing Norse mythology",
  },

  {
    filename: "odin.jpg",
    alt: "Drawing of Odin sat on a throne brandishing a spear, with a raven resting on his shoulder, he is missing an eye there is bright light behind him. he is wearing a winged helmet",
  },
  {
    filename: "thor.jpg",
    alt: "A vibrant painting of Thor engaged in combat with animals, capturing the intensity of the mythical battle scene. Thor is depicted with a muscular build, wielding his iconic hammer, Mjolnir, while surrounded by dynamic movement and vivid colors that highlight the action.",
  },
  {
    filename: "loki.jpg",
    alt: "bronze Statuette of Loki holding an axe spear wearing a horned helmet, accompanied by his sons; a dog named Fenrir and a snake named jormungandr.",
  },
  {
    filename: "fenrir.jpg",
    alt: "Artistic rendering of a wolf, Fenrir, restrained by a rope around its neck, there are men in the background holding onto the ropes that bind fenrir.",
  },
  {
    filename: "jog.jpg",
    alt: " A decorative Celtic snake, representing Jormungandr, adorned with detailed patterns.",
  },
  {
    filename: "hel.jpg",
    alt: "The goddess Hel, illustrated as a long-haired woman wearing a flower crown, half of her face is alive and radiant, half haalf of her face is a skull, signifying her role in Norse mythology.",
  },
  {
    filename: "freyja.jpg",
    alt: "An artistic representation of Freyja, the goddess, long ginger hair, clad in white with a blue cape and a gold crown, amidst a pond and tranquil forest filled with greenery.",
  },
];

const baseURL = "images/";

function updateDisplayedImage() {
  displayedImage.src = `${baseURL}${images[currentIndex].filename}`;
  displayedImage.alt = images[currentIndex].alt;
}

images.forEach((image, index) => {
  const newImage = document.createElement("img");
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  newImage.tabIndex = "0";

  newImage.addEventListener("click", () => {
    console.log("Thumbnail clicked:", index);
    currentIndex = index;
    updateDisplayedImage();
  });

  thumbBar.appendChild(newImage);
}),
  leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDisplayedImage();
  });

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  updateDisplayedImage();
});

updateDisplayedImage();
