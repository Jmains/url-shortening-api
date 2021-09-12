import bgImg from "../../images/illustration-working.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img className="hero__img" width="500" src={bgImg} alt="" />
        <div className="hero__content">
          <h1 className="hero__title">More than just shorter links</h1>
          <p className="hero__description">
            Build your brand's recognition and get detailed insights on how your links are
            performing
          </p>
          <button className="hero__cta">Get Started</button>
        </div>
        {/* <WorkingIllustration width="40rem" /> */}
      </div>
    </section>
  );
}