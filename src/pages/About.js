import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigation />
      <div id="about-section">
        <div className="picture-section">
          <img src="./assets/face2.jpg" alt="eileen-bio" />
        </div>
        <div className="biography-section">
          <div className="biographie-section-div">
          Born in Berlin, the guitarist Eileen Baum, received her first guitar lessons at the age of 10. Three years later, she met Prof. Rainer Feldmann, with whom she studied guitar at the University of the Arts in Berlin from 2009 to 2014. In 2016, she completed her studies with a concert diploma. She received further important impulses in master classes, among others from David Russell, Álvaro Pierri, and Aniello Desiderio. Eileen Baum has participated in numerous national and international competitions. In 2005, she received the first prize in the guitar duo category at "Jugend musiziert". 
          </div>
          <div className="biographie-section-div">
          In 2019, the Czech label ArcoDiva released her first album entitled "SCHMUCKSTÜCKE", featuring works by H. Vila-Lobos, J. Rodrigo, and J.S. Bach. In addition to her solo activities, she has played in numerous chamber music ensembles both nationally and internationally.
          </div>
          {/* <div className="biographie-section-div">
            Die in Berlin geborene Gitarristin, Eileen Baum erhielt ihren ersten
            Gitarrenunterricht im Alter von 10 Jahren. 3 Jahre später lernte sie
            Prof. Rainer Feldmann kennen, bei dem sie von 2009 bis 2014 an der
            Universität der Künste in Berlin Gitarre studierte. 2016 schloss sie
            ihr Studium mit dem Konzertexamen ab. Weitere wichtige Impulse
            erhielt sie in Meisterkursen u. a bei David Russell, Álvaro Pierri
            und Aniello Desiderio. Eileen Baum hat an zahlreichen nationalen und
            internationalen Wettbewerben teilgenommen. So erhielt sie 2005 den
            1. Preis bei "Jugend musiziert" in der Kategorie Gitarrenduo.
          </div>
          <div className="biographie-section-div">
            2019 veröffentlichte das tschechische Label ArcoDiva unter dem Titel
            SCHMUCKSTÜCKE ihr erstes Album, auf dem Werke von H. Vila-Lobos, J.
            Rodrigo und J.S. Bach zu hören sind. Neben ihrer solistischen
            Tätigkeit hat sie in zahlreichen kammermusikalischen Besetzungen im
            In- und Ausland gespielt.
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
