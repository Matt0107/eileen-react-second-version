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
            src="https://www.youtube-nocookie.com/embed/tHc_bCTKB4w?si=zzgKoh05Uqn44Rag"
            title="Eileen Baum SCHMUCKSTÜCKE TRAILER"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="700"
            height="506"
            src="https://www.youtube-nocookie.com/embed/55kU1yW8sVw?si=Aw_V9r-gEACtoSZO"
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
            src="https://www.youtube-nocookie.com/embed/Evd_xku8ZGc?si=scUHTVKb9zvPUR2u"
            title="LIVE CONCERT: Italian Intermezzo | Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="700"
            height="506"
            src="https://www.youtube-nocookie.com/embed/h2jlBaOHae0?si=ob_0mnF9XK7NXztn"
            title="Eileen Baum Giuliani Concerto op. 30"
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
