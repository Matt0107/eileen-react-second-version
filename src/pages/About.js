import React from "react";
import { useTranslation } from "react-i18next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <Navigation />
      <div id="about-section">
        <div className="picture-section">
          <img src="./assets/eileen2.jpg" alt="eileen-bio" />
        </div>
        <div className="biography-section">
          <div className="biographie-section-div">{t("about.bio1")}</div>
          <div className="biographie-section-div">{t("about.bio2")}</div>
          {/* Bouton pour changer la langue */}
          <div className="language-switcher">
            <button onClick={toggleLanguage}>
              {i18n.language === "en" ? "Deutsche Version" : "English Version"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
