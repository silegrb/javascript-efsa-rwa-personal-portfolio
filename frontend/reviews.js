// CONSTANTS

const FOOTER_LINKS = {
    FACEBOOK: 'https://www.facebook.com/shile.pres',
    INSTAGRAM: 'https://www.instagram.com/sisicfarris',
    YOUTUBE: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
    LINKED_IN: 'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0',
    GITHUB: 'https://github.com/silegrb'
};

// EXECUTE RIGHT AWAY
const loadReviews = async () => {

       const { data } = await axios.get('http://localhost:5000/reviews');
        const loaderContainer = document.getElementById("loader-container");
        loaderContainer.classList.remove("d-flex");
        loaderContainer.classList.add("d-none");

        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.classList.remove("d-none");
        data.forEach(({name, surname, date: reviewDate, review: reviewText}) => {
            const col = document.createElement("div");
            col.className = "offset-2 col-8 d-flex pt-5";

            const container = document.createElement("div");
            container.className = "d-flex row w-100";

            const user = document.createElement("div");
            user.className = "user-title col-12 p-0";
            user.innerHTML = `${name} ${surname}`;

            const date = document.createElement("div");
            date.className = "review-date col-12 p-0";
            date.innerHTML = formatDate(new Date(reviewDate));

            const review = document.createElement("div");
            review.className = "review-text p-4 col-12 mt-2";
            review.innerHTML = reviewText;

            container.append(user);
            container.append(date);
            container.append(review);

            col.append(container);

            reviewsContainer.append(col);
    });
}

(async () => {
    await loadReviews();
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

const handleOpenAddReviewModal = () => {
    const backdrop = document.getElementById("modal-backdrop");
    backdrop.classList.remove("d-none");
    const modal = document.getElementById("add-review-modal");
    modal.classList.remove("d-none");
}

const handleCloseAddReviewModal = () => {
    const backdrop = document.getElementById("modal-backdrop");
    backdrop.classList.add("d-none");
    const modal = document.getElementById("add-review-modal");
    modal.classList.add("d-none");
   document.getElementById("name").value = '';
   document.getElementById("surname").value = '';
    document.getElementById("review-text").value = '';
}

const handleClickComplete = async  () => {
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const reviewText = document.getElementById("review-text");

    if(name.value !== '' && surname.value !== '' && reviewText.value !== ''){
        await axios.post('http://localhost:5000/reviews/add', {
            name: name.value,
            surname: surname.value,
            review: reviewText.value,
            date: new Date()
        });
        name.value = '';
        surname.value = '';
        reviewText.value = '';
        handleCloseAddReviewModal();
        const loaderContainer = document.getElementById("loader-container");
        loaderContainer.classList.remove("d-none");
        loaderContainer.classList.add("d-flex");
        document.getElementById("reviews-container").innerHTML = "<div class=\"col-6 d-flex justify-content-end\">\n" +
            "                    <button class=\"review-button\" onclick=\"redirectToHome()\">GO BACK HOME</button>\n" +
            "                </div>\n" +
            "                <div class=\"col-6 d-flex justify-content-start\">\n" +
            "                    <button class=\"review-button\" onclick=\"handleOpenAddReviewModal()\">LEAVE A REVIEW</button>\n" +
            "                </div>";
        await loadReviews();
    }
}