import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Calendar = () => {
  return (
    <div>
      <Navigation />
      <div id="calendar-section">
        <div class="event">
          <p>5 February 2022</p>
          <p>Sala Nietzsche</p>
          <p>Lisbon, Portugal</p>
        </div>

        <div class="event">
          <p>6 March 2022</p>
          <p>Jagdzeugmagazin Schloss Grunewald</p>
          <p>Berlin, Germany</p>
        </div>

        <div class="event">
          <p>5 May 2022</p>
          <p>Gemeindehaus Amrum</p>
          <p>Berlin, Germany</p>
        </div>

        <div class="event">
          <p>18 July 2022</p>
          <p>Midsummer Vilnius</p>
          <p>Vilnius, Lithuania</p>
        </div>

        <div class="event">
          <p>14 & 22 October 2022</p>
          <p>MS Artania</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
