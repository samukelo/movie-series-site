import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="sectionlast">
      <div id="footer">
        <p className="left">
          <div className="flex lg:flex-1">
            <Link to="../" className="linkcolor" id>
              <h1 className="Logo">
                Anime <span>Zone</span>
              </h1>
            </Link>
          </div>
        </p>
        <p className="right">
          <div className="bottomlinks">
            <a href="">SUBSCRIBE</a>
          </div>
        </p>
        <p className="centered">
          <div className="bottomlinks">
            <Link to="../movies" className="linkcolor" id>
              MOVIES
            </Link>
            <Link to="../series" className="linkcolor" id>
              SERIES
            </Link>
          </div>
        </p>
      </div>
    </section>
  );
}

export default Footer;
