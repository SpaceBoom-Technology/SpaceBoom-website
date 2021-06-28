import React from 'react';
import Container2 from './Containers/Container2';
import AuthorCarousel from './AuthorCarousel/AuthorCarousel'
import Container3 from './Containers/Container3';
import ProjectForm from './ProjectForm/ProjectForm';

const Home = () => {
    return (
        <React.Fragment>
            <Container2 />
            <AuthorCarousel
                heading="Don’t just take our word for it"
                desc="See what other business owners feel about collaborating with us as an app development agency."
            />
            <Container3 />
            <ProjectForm />
        </React.Fragment>
    )
}

export default Home;