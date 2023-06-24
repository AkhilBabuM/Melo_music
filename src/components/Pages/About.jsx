import React from 'react';
import './css/About.scss';
import Container from "../fragment/Container";
import melopdf from "../assets/img/melo_ppt.pdf";

const About = () => {
    return (
        <Container>
            <div className={"About"}>
            <embed src={melopdf} type="application/pdf" width="100%" height="6000px" />
            </div>
        </Container>
    );
}

export default About;
