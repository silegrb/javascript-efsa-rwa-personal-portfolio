//const axios = require('axios');

// CONSTANTS
const mockData = [
    {
        name: 'Faris',
        surname: 'Šišić',
        date: new Date(),
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
            '\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
            '\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
            '\n'
    },
    {
        name: 'Faris',
        surname: 'Šišić',
        date: new Date(),
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
            '\n'
    },
    {
        name: 'Faris',
        surname: 'Šišić',
        date: new Date(),
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
            '\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
            '\n'
    }
];

const FOOTER_LINKS = {
    FACEBOOK: 'https://www.facebook.com/shile.pres',
    INSTAGRAM: 'https://www.instagram.com/sisicfarris',
    YOUTUBE: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
    LINKED_IN: 'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0',
    GITHUB: 'https://github.com/silegrb'
};

// EXECUTE RIGHT AWAY
(() => {
    setTimeout(() => {
        const loaderContainer = document.getElementById("loader-container");
        loaderContainer.classList.remove("d-flex");
        loaderContainer.classList.add("d-none");

        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.classList.remove("d-none");
        mockData.forEach(({name, surname, date: reviewDate, review: reviewText}) => {
            const col = document.createElement("div");
            col.className = "offset-2 col-8 d-flex pt-5";

            const container = document.createElement("div");
            container.className = "d-flex row";

            const user = document.createElement("div");
            user.className = "user-title col-12 p-0";
            user.innerHTML = `${name} ${surname}`;

            const date = document.createElement("div");
            date.className = "review-date col-12 p-0";
            date.innerHTML = formatDate(reviewDate);

            const review = document.createElement("div");
            review.className = "review-text p-4 col-12 mt-2";
            review.innerHTML = reviewText;

            container.append(user);
            container.append(date);
            container.append(review);

            col.append(container);

            reviewsContainer.append(col);
        });
    }, 1000);
})();

// EXECUTE WHEN NEEDED
const formatDate = (date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const redirectToHome = () => {
    location.href = "/home";
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