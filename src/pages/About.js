import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigation />
      <div id="about-section">
        <div class="picture-section">
          <img src="./assets/face2.jpg" alt="eileen-bio" />
        </div>
        <div class="biography-section">
          <div className="biographie-section-div-title">
            Die in Berlin geborene Gitarristin, Eileen Baum
          </div>
          <div className="biographie-section-div">
            Eileen Baum erhielt ihren ersten Gitarrenunterricht im Alter von 10
            Jahren. 3 Jahre später lernte sie Prof. Rainer Feldmann kennen, bei
            dem sie von 2009 bis 2014 an der Universität der Künste in Berlin
            Gitarre studierte. 2016 schloss sie ihr Studium mit dem
            Konzertexamen ab. Weitere wichtige Impulse erhielt sie in
            Meisterkursen u. a bei David Russell, Álvaro Pierri und Aniello
            Desiderio. Eileen Baum hat an zahlreichen nationalen und
            internationalen Wettbewerben teilgenommen. So erhielt sie 2005 den
            1. Preis bei "Jugend musiziert" in der Kategorie Gitarrenduo.
          </div>
          <div className="biographie-section-div">
            2019 veröffentlichte das tschechische Label ArcoDiva unter dem Titel
            SCHMUCKSTÜCKE ihr erstes Album, auf dem Werke von H. Vila-Lobos, J.
            Rodrigo und J.S. Bach zu hören sind. Neben ihrer solistischen
            Tätigkeit hat sie in zahlreichen kammermusikalischen Besetzungen im
            In- und Ausland gespielt.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
