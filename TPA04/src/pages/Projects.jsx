import WebDevImg from "../assets/webDevBadge.png";
import Bookshelf from "../assets/bookshelf.jpg";
import BMI from "../assets/BMI.png";
const Projects = () => {
  return (
    <>
      <article>
        <h2 className="sub-title">Projects </h2>
        <br />
        <section
          className="cards"
          link="https://skilvul.com/paths/web-development-pemula/student/FiKuRa"
        >
          <div className="card">
            <a href="https://skilvul.com/paths/web-development-pemula/student/FiKuRa">
              <img
                src={WebDevImg}
                alt="Web Dev Image"
                style={{ width: "95%", alignItems: "center" }}
              />
              <div className="container">
                <h4 className="card-tittle">
                  <b>Skilvul Certificate </b>
                </h4>
                <h5>Web Development Beginner Certificate</h5>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="https://github.com/FirdausKun/Bookshelf-Web-App">
              <img src={Bookshelf} alt="Bookshelf Image" />
              <div className="container">
                <h4 className="card-title">
                  <b>Bookshelf Web-App </b>
                </h4>
                <h5>Bookshelf Web-App </h5>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="https://github.com/FirdausKun/Technical-Project-Assignment-TPA/tree/main/TPA02">
              <img src={BMI} alt="" />
              <div className="container">
                <h4 className="card-title">
                  <b>BMI Calculator </b>
                </h4>
                <h5>BMI Calculator Web App </h5>
              </div>
            </a>
          </div>
        </section>
      </article>
    </>
  );
};
export default Projects;
