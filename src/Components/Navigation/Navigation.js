import './Navigation.css';
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Navigation = () => {

    const UpdateRes = () => {
        isMobileUpdated(window.innerWidth >= 1000 ? true : false)
    }
    const [isMobile, isMobileUpdated] = useState(window.innerWidth >= 1000 ? true : false);
    const [menuSelected, setMenuSelected] = useState(isMobile);

    useEffect(() => {
        window.addEventListener('resize', UpdateRes);

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', UpdateRes)
        }
    }, [])

    const navData = ['WORK', 'SERVICES', 'ABOUT US', 'JOIN US', 'BLOG', 'BOOK', 'CONTACT']
    const navLink = ['work', 'services', 'about', 'join', 'blog', 'book', 'contact']
    const showItems = navData.map((content, id) => {
        const size = isMobile ? "1" : "12";
        return (
            <Col xs="12" md={size} className="m-auto text-center navitems">
                <NavLink className=" navitems" to={'/' + navLink[id]}>
                    {content}
                </NavLink>
            </Col>
        )
    })
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="navbar">
                    <Col xs="5" md="5" className="m-auto">
                        <Link to="/">
                            Logo
                        </Link>
                    </Col>
                    <Col xs="7" md="" className="navMobile">
                        <i className="fas fa-bars" onClick={() => setMenuSelected(!menuSelected)}></i>
                    </Col>
                    {menuSelected ?
                        showItems : null
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Navigation;