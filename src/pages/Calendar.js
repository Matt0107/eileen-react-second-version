import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Calendar = () => {
  return (
    <div>
      <Navigation />
      <div id="calendar-section">
        <div class="event">
          <p>Sala Nietzsche</p>
          <p className="event-sub">5 February 2022</p>
          <p className="event-sub">Lisbon, Portugal</p>
        </div>

        <div class="event">
          <p class="event-2-p">Jagdzeugmagazin Schloss Grunewald</p>
          <p className="event-sub">6 March 2022</p>
          <p className="event-sub">Berlin, Germany</p>
        </div>

        <div class="event">
          <p>Gemeindehaus Amrum</p>
          <p className="event-sub">5 May 2022</p>
          <p className="event-sub">Berlin, Germany</p>
        </div>

        <div class="event">
          <p>Midsummer Vilnius</p>
          <p className="event-sub">18 July 2022</p>
          <p className="event-sub">Vilnius, Lithuania</p>
        </div>

        {/* <div class="event">
          <p>MS Artania</p>
          <p>14 & 22 October 2022</p>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
