import React from 'react';
import Container2 from './Containers/Container2';
import AuthorCarousel from './AuthorCarousel/AuthorCarousel'
import Container3 from './Containers/Container3';
import ProjectForm from './ProjectForm/ProjectForm';
import { Container } from 'reactstrap';
import Logo from './../../logo192.png';
import ServiceData from '../Services/Elem/ServiceData';

const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <ServiceData
                    heading="Apps that make a difference are born here"
                    type="mainHead"
                    desc="We craft the product strategy, design and build mobile apps with leading technology to make the world a better place.

                    Will yours be one of them?"
                    img={Logo}
                    points={[]}
                    btnData="See our Services here"
                    alignment="right"
                />
            </Container>
            <Container2 />
            <Container>
                <ServiceData
                    heading="Staffcloud"
                    type="mainHead"
                    desc="Staffcloud keeps you up-to-date on your job assignments. Your scheduling and your communication with your employer will be a walk in the park."
                    img={Logo}
                    points={[]}
                    btnData="view case study"
                    alignment="left"
                />
                <ServiceData
                    heading="Staffcloud"
                    type="mainHead"
                    desc="Staffcloud keeps you up-to-date on your job assignments. Your scheduling and your communication with your employer will be a walk in the park."
                    img={Logo}
                    points={[]}
                    btnData="view case study"
                    alignment="right"
                />
            </Container>
            <AuthorCarousel
                heading="Don’t just take our word for it"
                desc="See what other business owners feel about collaborating with us as an app development agency."
            />
            <ProjectForm />
        </React.Fragment>
    )
}

export default Home;