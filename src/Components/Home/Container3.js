import React,{useState,useEffect} from 'react';
import './Home.css';
import {Container,Col,Row,Button} from 'reactstrap';
import {Authors} from "../AuthorDetails/AuthorDetails";
import Author from "../AuthorDetails/Author";
import logo from '../../logo192.png';
const Container3 = () => {

    const [isMobile,isMobileUpdated]=useState(window.innerWidth >= 1000 ? false : true);
    let sizeCheck;
    if(Authors.length>3)
    sizeCheck=3;
    let sizechkMobile;
    if(Authors.length>1)
    sizechkMobile=1;

    const size=isMobile?sizechkMobile:sizeCheck;
    let [counter,setCounter]=useState(size);
    const limitdata=[]
    counter=counter-size<0?size:counter;
    for(let i=counter-size;i<counter;i++)
    {
        limitdata.push(Authors[i]);
    }
    console.log("limitdata",limitdata)
    const thumbnail=limitdata.map((content,id)=>{
        return (<Author key={content.id}
                        id={content.id}
                        img={content.ProfilePicture}
                        desc={content.desc}
                        name={content.username}/>)
    })
    useEffect(() => {
        window.addEventListener('resize', UpdateRes); 
        return () => {
            window.removeEventListener('resize', UpdateRes)
        }
    }, [])
    const UpdateRes = () => {
        isMobileUpdated(window.innerWidth >= 1000 ?false : true)
    }

    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col md="12" className="homepage-container-3-title">Don’t just take our word for it
                    </Col>
                    <Col md="12" className="homepage-container-3-text1">See what other business owners feel about collaborating with us as an app development agency.
                    </Col>
                </Row>
                <Row>
                 <Col md="1">
                 </Col>
                 <Col md="10">
                        <Row className={(counter!==1)?"Maincontainer":""}  >
                                    {thumbnail}
                                
                        </Row>
                 </Col>
                 <Col md="1">
                 </Col>
                </Row>

                <Row className="">
                    <Col md="3" xs="1">
                    </Col>
                    <Col md="1" xs="2" className="ArrowBtn" style={counter>size?{visibility:"visible"}:{visibility:"hidden"}}>
                        <h1><i className="fas fa-angle-left shadow p-3 mb-5 bg-white rounded" onClick={()=>{
                            counter>size?setCounter(counter-1):setCounter(counter)
                        }}></i></h1>
                    </Col>
                    <Col md="4" xs="6" >
                    <hr style={{width:"85%" ,borderBlockStyle:"solid"}}></hr>
                    </Col>
                    <Col md="1" xs="2" className="ArrowBtn " style={counter<Authors.length?{visibility:"visible"}:{visibility:"hidden"}}>
                        <h1><i className="fas fa-angle-right shadow p-3 mb-5 bg-white rounded" onClick={()=>{
                            counter<Authors.length?setCounter(counter+1):setCounter(counter)
                        }}></i></h1>
                    </Col>  
                      <Col md="3" xs="1">
                    </Col>

                </Row>
                </Container>
                <Container fluid>
                <Row className="Shop "style={{paddingTop:"60px"}}>
                    <Col md="1">
                    </Col>
                    <Col md="3" sx="12" >
                        <img  src={logo} />
                    </Col>
                    <Col md="7">
                    <Row style={{marginTop:"40px"}}>
                        <div>
                    <hr style={{border:"4px solid ",width:"70px" ,color:"black",float:"left",marginBottom:"40px",marginTop:"40px"}}></hr>
                    </div>
                            <Col md="12" style={{fontWeight:"bold",fontSize:"38px",paddingBottom:"30px",marginLeft:"20px" }}>From A to App Success
                            </Col>
                            <Col md="5" style={{fontWeight:"lighter",fontSize:"24px",paddingBottom:"40px",marginLeft:"20px",fontWeight:"lighter",fontSize:"23px"}}>How to turn Ideas into apps that makes a difference
                            </Col>
                        </Row>
                        <Row>
                            
                            <Col className="btn" md="4">
                                <Button outline color="primary" className="custom-btn"  aria-pressed="true" >
                                    Download the ebook for free
                                </Button>
                            </Col>
                            <Col className="btn" md="4">
                            <input type="image" src="./static/images/amazon3.png" value="submit"  style={{borderRadius:"31%" ,width:"54%"}}/>
                            </Col>
                            <Col md="4">
                            </Col>
                    
                        </Row>
                    </Col>
                    <Col md="1">
                        

                    </Col>
                </Row>
                
            </Container>
            
        </React.Fragment>
    )
}

export default Container3;

