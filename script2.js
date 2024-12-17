const images = [
    {
        src: "img/3jpg.png",
    },
    {
        src: "img/catelog__item\ \(1\).png",
    },
    {
        src: "img/catelog__item\ \(3\).png",
    },
];

let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');

function updateSlider() {
    const currentImage = images[currentIndex];
    sliderImage.src = currentImage.src;
}

function startSlider() {
    updateSlider();
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        updateSlider();
    }, 3000); 
}

startSlider();