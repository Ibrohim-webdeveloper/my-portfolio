import "./About.css"
import algoritm from "../assets/algoritm.jpg"

function About() {
  return (
    <div className="About">
      <h2>About <span>Me</span></h2>
      <div className="about-img">
        <img src={algoritm} />
      </div>
      <p className="about-text"><span>Full-sstack Developer</span><br />Lorem ipsum dolor amet consectetur adipisicing elit. Cupiditate eveniet nostrum debitis exercitationem vitae, consequuntur pariatur.<br /> Distinctio dignissimos perferendis totam autem corrupti! Voluptatem omnis hic temporibus dolorum consequatur<br /> maxime iusto delectus vel quae. Eum eveniet error tenetur magni perspiciatis.</p>
      <button className="about-btn">Read More</button>
    </div>
  )
}

export default About