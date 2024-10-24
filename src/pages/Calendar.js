import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Calendar = () => {
  return (
    <div>
      <Navigation />
      <div id="calendar-section">
      <div class="event">
          <p>MS Amadea</p>
          <p className="event-sub">11  - 25 September 2024</p>
          <p className="event-sub">England, Frankreich, Spanien</p>
        </div>
        <div class="event">
          <p>Sommer Palais Dresden</p>
          <p className="event-sub">27 July 2024</p>
          <p className="event-sub">Dresden, Germany</p>
        </div>
        <div class="event">
          <p>MS Artania</p>
          <p className="event-sub">27 Juni - 11 Juli 2024</p>
          <p className="event-sub">Norway</p>
        </div>
        <div class="event">
          <p>Dominikanerkloster</p>
          <p className="event-sub">9 September 2023</p>
          <p className="event-sub">Prenzlau, Germany</p>
        </div>
        <div class="event">
          <p>Barockschloss Zeilitzheim</p>
          <p className="event-sub">26 May 2023</p>
          <p className="event-sub">Kolitzheim, Germany</p>
        </div>
        <div class="event">
          <p>MS Artania</p>
          <p className="event-sub">21 March - 7 April 2023</p>
          <p className="event-sub">Africa & Spain</p>
        </div>
        <div class="event">
          <p>MS Artania</p>
          <p className="event-sub">9 - 29 October 2022</p>
          <p className="event-sub">Europe</p>
        </div>
        <div class="event">
          <p>Midsummer Vilnius</p>
          <p className="event-sub">18 July 2022</p>
          <p className="event-sub">Vilnius, Lithuania</p>
        </div>
        <div class="event">
          <p>Gemeindehaus Amrum</p>
          <p className="event-sub">5 May 2022</p>
          <p className="event-sub">Berlin, Germany</p>
        </div>
        <div class="event">
          <p class="event-2-p">Jagdzeugmagazin Schloss Grunewald</p>
          <p className="event-sub">6 March 2022</p>
          <p className="event-sub">Berlin, Germany</p>
        </div>
        <div class="event">
          <p>Sala Nietzsche</p>
          <p className="event-sub">5 February 2022</p>
          <p className="event-sub">Lisbon, Portugal</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
