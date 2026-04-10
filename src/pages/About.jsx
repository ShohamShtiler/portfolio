import UiIcon from '../svgs/UiIcon'
import StackIcon from '../svgs/StackIcon'
import ProductIcon from '../svgs/ProductIcon'

const highlights = [
  {
    title: 'Clean UI Engineering',
    desc: 'Interfaces that feel intuitive, polished, and fast.',
    icon: UiIcon,
  },
  {
    title: 'Full-Stack Systems',
    desc: 'From frontend logic to backend architecture and APIs.',
    icon: StackIcon,
  },
  {
    title: 'Real Product Mindset',
    desc: 'Building solutions, not just features.',
    icon: ProductIcon,
  },
]

const skills = ['React', 'Redux', 'Node.js', 'MongoDB', 'TypeScript', 'SCSS']

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__content">

          <div className="about__left">

            {/* Rail: explicit segments and dots */}
            <div className="about__rail">
              <div className="about__rail-seg" />
              <div className="about__rail-dot" />
              <div className="about__rail-seg" />
              <div className="about__rail-dot" />
              <div className="about__rail-seg" />
            </div>

            {/* Items: icon + text, separate column */}
            <div className="about__items">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="about__tl-item">
                    <Icon className="about__tl-icon" />
                    <div className="about__tl-body">
                      <h4 className="about__tl-title">{item.title}</h4>
                      <p className="about__tl-desc">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

          <div className="about__right">
            <h2 className="about__title">About Me</h2>

            <div className="about__text">
              <p className="about__intro">
                I'm a Full-Stack Developer building clean, fast, and user-focused web apps.
              </p>

              <p className="about__body">
                I work mainly with React, Node.js, and MongoDB, focusing on clean code,
                great UX, and products that feel polished.
              </p>
            </div>

            <ul className="about__skills-grid">
              {skills.map((skill) => (
                <li key={skill} className="about__skill-card">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
