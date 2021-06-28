import amongUs from './Elem/amongUs.jpg';

export const mainHeadData = {
    heading: "Services that bring your app idea to life",
    desc: "Whether you have an app or just an idea, we provide the full range of services you need to ensure your product’s success.",
    image: amongUs,
    points: [],
    btnData: "Let's chat about your idea"
}

export const data = [
    {
        heading: "Product Strategy",
        desc: "We help you turn your idea into a full-fledged product, by defining goals and building a road map with the best solution.",
        image: amongUs,
        points: [
            { logo: "fas fa-bullseye", name: "Objectives Definition" },
            { logo: "fas fa-map-marker-alt", name: "Positioning" },
            { logo: "fas fa-poll", name: "Market & User Research" },
            { logo: "fas fa-chart-line", name: "MVP concepting" },
            { logo: "far fa-chart-bar", name: "Competitive Analysis" },
            { logo: "fas fa-chart-area", name: "Marketing strategy" },
        ],
        btnData: "Product Strategy"
    },
    {
        heading: "Product Design",
        desc: "Our product design services have a user-centered approach that aims to maximize acquisition and retention.",
        image: amongUs,
        points: [
            { logo: "fas fa-info-circle", name: "Functional Specifications" },
            { logo: "fas fa-mobile-alt", name: "Prototyping" },
            { logo: "fas fa-users", name: "Wireframes" },
            { logo: "fas fa-pencil-ruler", name: "UI & UX Design" },
        ],
        btnData: "Product Design",
    },
    {
        heading: "Product development",
        desc: "Our goal is to turn your idea into a versatile mobile app. We deliver incredible mobile experiences with native iOS, Android or cross-platform apps.",
        image: amongUs,
        points: [
            { logo: "fas fa-sitemap", name: "Product architecture" },
            { logo: "fab fa-react", name: "React Native Development" },
            { logo: "fab fa-apple", name: "iOS Development" },
            { logo: "fas fa-server", name: "Backend Development" },
            { logo: "fab fa-android", name: "Android Development" },
        ],
        btnData: "Product Development"
    },
]