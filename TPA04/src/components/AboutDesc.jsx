import ProfileImg from '../assets/ProfileImg.png'

const AboutDesc = () => {
  return (
    <>
      <article className="about">
        <div className="about-txt">
          <h2 className="title-about">About</h2>
          <p>
            Hello, I'm Firdaus Kuncoro Ramadhani. I am a student from Bumigora
            University in Mataram studying computer science and I have an
            interest in front-end web development. For now, I am participating
            activity in the "Studi Independen-Kampus Merdeka" in Skilvul to
            extend my knowledge in front-end web development.
          </p>
          <p>
            So far, I learned a lot of things in Skilvul, starting from the
            basics of UI/UX Designer, web, and javascript as well as increasing
            experience and relations.
          </p>
        </div>
        <div className="about-img">
          <img src={ProfileImg} alt="Profile Image" />
        </div>
      </article>
    </>
  );
};
export default AboutDesc;
