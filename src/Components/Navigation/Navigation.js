import './Navigation.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class Navigation extends React.Component {

    // const UpdateRes = () => {
    //     isMobileUpdated(window.innerWidth >= 1000 ? true : false)
    // }
    // const [isMobile, isMobileUpdated] = useState(window.innerWidth >= 1000 ? true : false);
    state = {
        menuSelected: this.props.isMobile
    }
    // const [menuSelected, setMenuSelected] = useState(isMobile);

    componentDidMount() {
        window.addEventListener('resize', this.props.updateResolution.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.updateResolution.bind(this))
    }

    render() {
        const navData = ['WORK', 'SERVICES', 'ABOUT US', 'JOIN US', 'BLOG', 'CONTACT']
        const navLink = ['work', 'services', 'about', 'joinus', 'blog', 'contact']
        const showItems = navData.map((content, id) => {
            const size = this.props.isMobile ? "1" : "12";
            return (
                <Col xs="12" md={size} className="m-auto text-center navitems" key={id}>
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
                            <i className="fas fa-bars" onClick={() => this.setState({ menuSelected: !this.state.menuSelected })}></i>
                        </Col>
                        {this.state.menuSelected ?
                            showItems : null
                        }
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.isMobile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateResolution: () => dispatch({ type: "CHANGE" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);