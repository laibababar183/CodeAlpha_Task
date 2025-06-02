const images = [
  "1.jpeg",
  "2.jpg",
  "3.jpeg"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}
