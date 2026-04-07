function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container container">

        <div className="hero__content">
          <h1 className="hero__greeting">
            Hello<span className="hero__dot">.</span>
          </h1>

          <div className="hero__intro-wrap">
            <p className="hero__intro">I'm Shoham</p>
          </div>

          <h2 className="hero__role">Full-Stack Developer</h2>

          <p className="hero__bio">
            I design and build clean, fast web applications —
            from polished UIs to solid back-end logic.
          </p>

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

        <div className="hero__visual">
          <div className="hero__code-card">
            <div className="hero__code-header">
              <div className="hero__code-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hero__code-filename">portfolio.js</span>
            </div>

            <div className="hero__code-body">
              <div className="hero__line">
                <span className="c-kw">const</span>
                <span className="c-var"> developer</span>
                <span className="c-base"> = {'{'}</span>
              </div>
              <div className="hero__line hero__line--in">
                <span className="c-prop">name</span>
                <span className="c-base">: </span>
                <span className="c-str">"Shoham Shtiler"</span>
                <span className="c-base">,</span>
              </div>
              <div className="hero__line hero__line--in">
                <span className="c-prop">role</span>
                <span className="c-base">: </span>
                <span className="c-str">"Full-Stack Developer"</span>
                <span className="c-base">,</span>
              </div>
              <div className="hero__line hero__line--in">
                <span className="c-prop">stack</span>
                <span className="c-base">: [</span>
                <span className="c-str">"React"</span>
                <span className="c-base">, </span>
                <span className="c-str">"Node.js"</span>
                <span className="c-base">, </span>
                <span className="c-str">"JS"</span>
                <span className="c-base">],</span>
              </div>
              <div className="hero__line hero__line--in">
                <span className="c-prop">available</span>
                <span className="c-base">: </span>
                <span className="c-bool">true</span>
                <span className="c-base">,</span>
              </div>
              <div className="hero__line">
                <span className="c-base">{'}'}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
