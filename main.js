(() => {
    setTimeout(() => {
        const loadingContainer = document.getElementById("loading-container");
        const loadedContainer = document.getElementById("loaded-container");
        loadingContainer.classList.remove("d-flex");
        loadingContainer.classList.add("d-none");
        loadedContainer.classList.remove("d-none");
    }, 500);
})();

const BRAIN_TRAINING_IMAGES = [
    {
        src: 'image_education_item_OS_Grbavica2.png',
        title: 'Primary School Diploma',
        subtitle: 'Primary School "Grbavica II"',
    },
    {
        src: 'image_education_item_2gimnazija.png',
        title: 'High School Diploma',
        subtitle: 'Second Gymnasium Sarajevo',
    },
    {
        src: 'image_education_item_etf.png',
        title: "Bachelor's Degree",
        subtitle: 'Faculty of Electrical Engineering Sarajevo',
    },
    {
        src: 'image_education_item_efsa.png',
        title: "Master's Degree",
        subtitle: 'Faculty of Economics and Business',
    },
];

const FOOTER_LINKS = {
    FACEBOOK: 'https://www.facebook.com/shile.pres',
    INSTAGRAM: 'https://www.instagram.com/sisicfarris',
    YOUTUBE: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
    LINKED_IN: 'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0',
    GITHUB: 'https://github.com/silegrb'
};

(() => {
    document.getElementById("brain-training-slider-image").setAttribute("src", BRAIN_TRAINING_IMAGES[0].src);
    document.getElementById("brain-training-slider-title").innerHTML =  BRAIN_TRAINING_IMAGES[0].title;
    document.getElementById("brain-training-slider-subtitle").innerHTML = BRAIN_TRAINING_IMAGES[0].subtitle;
})();

const handleGoLeft = () => {
    const brainTrainingSliderImageSrc = document.getElementById("brain-training-slider-image").getAttribute("src");
    let currentIndex = BRAIN_TRAINING_IMAGES.findIndex(({src}) => src === brainTrainingSliderImageSrc);
    if(currentIndex === 0) currentIndex = BRAIN_TRAINING_IMAGES.length - 1;
    else currentIndex--;
    document.getElementById("brain-training-slider-image").setAttribute("src", BRAIN_TRAINING_IMAGES[currentIndex].src);
    document.getElementById("brain-training-slider-title").innerHTML =  BRAIN_TRAINING_IMAGES[currentIndex].title;
    document.getElementById("brain-training-slider-subtitle").innerHTML = BRAIN_TRAINING_IMAGES[currentIndex].subtitle;
}

const handleGoRight = () => {
    const brainTrainingSliderImageSrc = document.getElementById("brain-training-slider-image").getAttribute("src");
    let currentIndex = BRAIN_TRAINING_IMAGES.findIndex(({src}) => src === brainTrainingSliderImageSrc);
    if(currentIndex === BRAIN_TRAINING_IMAGES.length - 1) currentIndex = 0;
    else currentIndex++;
    document.getElementById("brain-training-slider-image").setAttribute("src", BRAIN_TRAINING_IMAGES[currentIndex].src);
    document.getElementById("brain-training-slider-title").innerHTML =  BRAIN_TRAINING_IMAGES[currentIndex].title;
    document.getElementById("brain-training-slider-subtitle").innerHTML = BRAIN_TRAINING_IMAGES[currentIndex].subtitle;
}

const handleClickFooterIcon = (index) => {
    switch (index){
        case 0:
            window.open(FOOTER_LINKS.FACEBOOK);
            break;
        case 1:
            window.open(FOOTER_LINKS.YOUTUBE);
            break;
        case 2:
            window.open(FOOTER_LINKS.INSTAGRAM);
            break;
        case 3:
            window.open(FOOTER_LINKS.LINKED_IN);
            break;
        case 4:
            window.open(FOOTER_LINKS.GITHUB);
            break;
        default:
    }
}