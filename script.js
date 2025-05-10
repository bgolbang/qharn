const ShirtImages = [
    'bs.png',
    'sh.png',
    'ps.png',
    'maid.png'
];

const SkirtImages = [
    'bss.png',
    'sk.png',
    'pt.png',
];

const ShoesImages = [
    'bss.png',
    'sn.png',
    'ma.png',
];

let currentShIndex = 0;
let currentSkIndex = 0;
let currentShoIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const ShirtImage = document.getElementById('shirt');
    const SkirtImage = document.getElementById('skirt');
    const ShoesImage = document.getElementById('shoes');

    const prevShirtButton = document.getElementById('prev-sh-button');
    const nextShirtButton = document.getElementById('next-sh-button');
    const prevSkirtButton = document.getElementById('prev-sk-button');
    const nextSkirtButton = document.getElementById('next-sk-button');
    const prevShoButton = document.getElementById('prev-sho-button');
    const nextShoButton = document.getElementById('next-sho-button');
    function updateShImage() {
        ShirtImage.src = ShirtImages[currentShIndex];
    }
    function updateSkImage() {
        SkirtImage.src = SkirtImages[currentSkIndex];
    }
    function updateShoImage() {
        ShoesImage.src = ShoesImages[currentShoIndex];
    }


    prevShirtButton.addEventListener('click', () => {
        currentShIndex--;
        if (currentShIndex < 0) {
            currentShIndex = ShirtImages.length - 1;
        }
        updateShImage();
    });
    nextShirtButton.addEventListener('click', () => {
        currentShIndex++;
        if (currentShIndex >= ShirtImages.length) {
            currentShIndex = 0;
        }
        updateShImage();
    });
    prevSkirtButton.addEventListener('click', () => {
        currentSkIndex--;
        if (currentSkIndex < 0) {
            currentSkIndex = SkirtImages.length - 1;
        }
        updateSkImage();
    });
    nextSkirtButton.addEventListener('click', () => {
        currentSkIndex++;
        if (currentSkIndex >= SkirtImages.length) {
            currentSkIndex = 0;
        }
        updateSkImage();
    });
    prevShoButton.addEventListener('click', () => {
        currentShoIndex--;
        if (currentShoIndex < 0) {
            currentShoIndex = ShoesImages.length - 1;
        }
        updateShoImage();
    });
    nextShoButton.addEventListener('click', () => {
        currentShoIndex++;
        if (currentShoIndex >= ShoesImages.length) {
            currentShoIndex = 0;
        }
        updateShoImage();
    });
});