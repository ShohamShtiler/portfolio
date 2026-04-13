import portraitImg from '../assets/portrait.png'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container container">

        <div className="hero__content reveal">
          <h1 className="hero__greeting">
            Hello<span className="hero__dot"> .</span>
          </h1>

          <div className="hero__intro-wrap">
            <p className="hero__intro">I'm Shoham</p>
          </div>

          <h2 className="hero__role">Full-Stack Developer</h2>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">See my work</a>
            <a
              href="https://github.com/shohamshtiler"
              className="btn btn--outline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero__visual reveal" style={{ '--reveal-delay': '150ms' }}>
          <div className="hero__portrait">
            <div className="hero__portrait-frame">
              <img
                src={portraitImg}
                alt="Shoham Shtiler"
                className="hero__portrait-img"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
