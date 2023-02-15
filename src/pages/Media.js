import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Media = () => {
  return (
    <div>
      <Navigation />
      <div id="media-section">
        <div class="youtube-link">
          <iframe
            width="700"
            height="506"
            src="https://www.youtube.com/embed/tHc_bCTKB4w"
            title="Eileen Baum SCHMUCKSTÜCKE TRAILER"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="700"
            height="506"
            src="https://www.youtube.com/embed/55kU1yW8sVw"
            title="Eileen Baum ,,Melancholy”"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="youtube-link">
          <iframe
            width="700"
            height="506"
            src="https://www.youtube.com/embed/h2jlBaOHae0"
            title="Eileen Baum Giuliani Concerto op. 30"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="700"
            height="506"
            src="https://www.youtube.com/embed/cx9xyQSz39g"
            title="Eileen Baum Ponce Sonata III"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Media;
