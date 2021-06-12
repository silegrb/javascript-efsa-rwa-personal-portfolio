// CONSTANTS
const BRAIN_TRAINING_IMAGES = [
    {
        src: 'image_education_item_OS_Grbavica2.png',
        title: 'Primary School Diploma',
        subtitle: 'Primary School "Grbavica II"',
        website: 'https://www.osgrbavica2.edu.ba',
    },
    {
        src: 'image_education_item_2gimnazija.png',
        title: 'High School Diploma',
        subtitle: 'Second Gymnasium Sarajevo',
        website: 'https://www.2gimnazija.edu.ba',
    },
    {
        src: 'image_education_item_etf.png',
        title: "Bachelor's Degree",
        subtitle: 'Faculty of Electrical Engineering Sarajevo',
        website: 'https://www.etf.unsa.ba',
    },
    {
        src: 'image_education_item_efsa.png',
        title: "Master's Degree",
        subtitle: 'Faculty of Economics and Business',
        website: 'http://www.efsa.unsa.ba',
    },
    {
        src: 'image_education_item_follow_me.png',
        title: 'English Language C1 Certification',
        subtitle: 'Altera Lingua "Follow Me"',
        website: 'https://www.followme.ba',
    },
    {
        src: 'image_education_item_follow_me2.png',
        title: 'German Language A2 Certification',
        subtitle: 'Altera Lingua "Follow Me"',
        website: 'https://www.followme.ba',
    },
    {
        src: 'image_education_just_code_it.jpg',
        title: 'Innovation Challenge Winners',
        subtitle: 'Hackathon "Just Code It" in Sarajevo',
        website: 'http://www.eestec-sa.ba/posts/76',
    },
    {
        src: 'image_education_symphony.jpg',
        title: 'New knowledge',
        subtitle: 'Symphony MEETUP "Hybernate"',
        website: 'https://symphony.is',
    },
    {
        src: 'image_BH_engineering_weeks_sarajevo_logo.jpg',
        title: 'New knowledge',
        subtitle: 'BH Engineering Weeks 2019',
        website: 'https://www.bhing.ba',
    },
    {
        src: 'image_udemy_logo.jpg',
        title: 'Completed Course',
        subtitle:
            'React - The Complete Guide (incl Hooks, React Router, Redux)',
        website: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux',
    },
    {
        src: 'image_education_atlantbh.jpg',
        title: 'New knowledge',
        subtitle: 'Online Meetup "How to become UX/UI Designer"',
        website: 'https://www.atlantbh.com',
    },
];

const FOOTER_LINKS = {
    FACEBOOK: 'https://www.facebook.com/shile.pres',
    INSTAGRAM: 'https://www.instagram.com/sisicfarris',
    YOUTUBE: 'https://www.youtube.com/channel/UCLbDLtGSzMfB7__-kwvXTPA',
    LINKED_IN: 'https://www.linkedin.com/in/faris-%C5%A1i%C5%A1i%C4%87-06453b1a0',
    GITHUB: 'https://github.com/silegrb'
};

const SKILL_SET_ITEMS = [
    {
        src: 'icon_react.png',
        title: 'React',
        description:
            'Have a little over a year of work experience in React. Currently working as a front end developer using this framework. Some personal projects & this website are developed using React framework.',
    },
    {
        src: 'icon_javascript.png',
        title: 'JavaScript',
        description:
            "Working with JavaScript for two & a half years. Technical interview task that got me job I currently have is developed using Vanilla JavaScript. Understanding Vanilla JavaScript to it's core level helped me achieve full control over my code & learn JavaScript frameworks easily & quickly.",
    },
    {
        src: 'icon_html5.png',
        title: 'HTML5',
        description:
            "Learned about HTML5 during my first year of Bachelor's Degree. Understanding & being able to create front end using HTML5 helped me understand JSX easier, boosting my overall React skills.",
    },
    {
        src: 'icon_css3.png',
        title: 'CSS3',
        description:
            'Got introduced to CSS3 same time I learned about HTML5. Most of styling & animations on this website are custom made.',
    },
    {
        src: 'icon_sass.png',
        title: 'SASS',
        description:
            "Started using SASS during my internship & instantly decided to replace CSS3 with SASS in my work, due to it's powerful capabilities compared to CSS3. Necessary to mention, knowing CSS3 made learning SASS look super easy.",
    },
    {
        src: 'icon_redux.png',
        title: 'Redux',
        description:
            'Was introduced to Redux during my internship & been working with this technology for over a year now. Using Redux facilitated the process of managing application state big time.',
    },
    {
        src: 'icon_mern.png',
        title: 'MERN Stack',
        description:
            "Started learning about MERN Stack during my first internship in 2020. Used NodeJS & ExpressJS during my third year of Bachelor's Degree. Used MERN stack for developing some personal projects as well.",
    },

    {
        src: 'icon_java.png',
        title: 'Java',
        description:
            "Used Java first time during my second year of Bachelor's Degree. I learned a lot more about Java than the course offered, due to my huge interest for Java. Held instructions in Java for group of about 15 colleague students later.",
    },
    {
        src: 'icon_c.png',
        title: 'C',
        description:
            "My first touch with programming was back when I started learning about C & C++ programming language during my third year of High School. I continued learning about C & C++ during my first year of Bachelor's Degree. I held & still am holding instructions & consultations in C for group of about 10 colleague students.",
    },
    {
        src: 'icon_cpp.png',
        title: 'C++',
        description:
            "Like mentioned before, I learned about C++ programming language during my third year of High School & first year of Bachelor's Degree. I held & am holding instructions in C++ for group of 10+ colleague students.",
    },
    {
        src: 'icon_cs.png',
        title: 'C#',
        description:
            "Learned about C# programming language during my second year of Bachelor's Degree. I held & am still holding instructions in C# for group of 10+ Mechanical Engineering students.",
    },
    {
        src: 'icon_mysql.png',
        title: 'MySQL',
        description:
            "Got introduced to MySQL during my second year of Bachelor's Degree, but didn't used it for too long. Important to mention, my personal opinion is that knowing MySQL is a great advantage when learning new stuff in this field.",
    },
];

// EXECUTE RIGHT AWAY
(() => {
    setTimeout(() => {
        const loadingContainer = document.getElementById("loading-container");
        const loadedContainer = document.getElementById("loaded-container");
        loadingContainer.classList.remove("d-flex");
        loadingContainer.classList.add("d-none");
        loadedContainer.classList.remove("d-none");
    }, 3000);
})();


(() => {
    document.getElementById("brain-training-slider-image").setAttribute("src", BRAIN_TRAINING_IMAGES[0].src);
    document.getElementById("brain-training-slider-title").innerHTML =  BRAIN_TRAINING_IMAGES[0].title;
    document.getElementById("brain-training-slider-subtitle").innerHTML = BRAIN_TRAINING_IMAGES[0].subtitle;
    document.getElementById("brain-training-slider-image").onclick = () => window.open(BRAIN_TRAINING_IMAGES[0].website);
})();

(() => {
    const skillSetRow = document.getElementById("skill-set-row");
    SKILL_SET_ITEMS.forEach(({src,title: itemTitle,description: itemDescription}) => {
            const element = document.createElement("div");
            element.className = "col-4 d-block text-center pt-3";

            const image = document.createElement("img");
            image.setAttribute("src", src );
            image.className = "skill-set-icon";
            element.append(image);

            const title = document.createElement("div");
            title.className = "d-flex justify-content-center font-weight-bold pt-1 skill-set-item-title";
            title.innerHTML = itemTitle;
            element.append(title);

            const description = document.createElement("div");
            description.className = "d-flex justify-content-center w-75 m-auto text-center skill-set-item-description";
            description.innerHTML = itemDescription;
            element.append(description);

            skillSetRow.append(element);
        }
    );
})();

// EXECUTE WHEN NEEDED
const handleGoLeft = () => {
    const brainTrainingSliderImageSrc = document.getElementById("brain-training-slider-image").getAttribute("src");
    let currentIndex = BRAIN_TRAINING_IMAGES.findIndex(({src}) => src === brainTrainingSliderImageSrc);
    if(currentIndex === 0) currentIndex = BRAIN_TRAINING_IMAGES.length - 1;
    else currentIndex--;
    document.getElementById("brain-training-slider-image").setAttribute("src", BRAIN_TRAINING_IMAGES[currentIndex].src);
    document.getElementById("brain-training-slider-title").innerHTML =  BRAIN_TRAINING_IMAGES[currentIndex].title;
    document.getElementById("brain-training-slider-subtitle").innerHTML = BRAIN_TRAINING_IMAGES[currentIndex].subtitle;
    document.getElementById("brain-training-slider-image").onclick = () => window.open(BRAIN_TRAINING_IMAGES[currentIndex].website);
}

const handleGoRight = () => {
    const brainTrainingSliderImageSrc = document.getElementById("brain-training-slider-image").getAttribute("src");
    let currentIndex = BRAIN_TRAINING_IMAGES.findIndex(({src}) => src === brainTrainingSliderImageSrc);
    if(currentIndex === BRAIN_TRAINING_IMAGES.length - 1) currentIndex = 0;
    else currentIndex++;
    document.getElementById("brain-training-slider-image").setAttribute("src", BRAIN_TRAINING_IMAGES[currentIndex].src);
    document.getElementById("brain-training-slider-title").innerHTML =  BRAIN_TRAINING_IMAGES[currentIndex].title;
    document.getElementById("brain-training-slider-subtitle").innerHTML = BRAIN_TRAINING_IMAGES[currentIndex].subtitle;
    document.getElementById("brain-training-slider-image").onclick = () => window.open(BRAIN_TRAINING_IMAGES[currentIndex].website);
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

const redirectToReviews = () => {
    location.href = "/reviews";
}

const handleClickMapPin = () => {
    const modal = document.getElementById("map-modal");
    modal.classList.remove("d-none");
    modal.classList.add("d-flex");
    modal.classList.add("justify-content-center");
    modal.classList.add("align-items-center");
}

const handleCloseMapModal = () => {
    const modal = document.getElementById("map-modal");
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
}


