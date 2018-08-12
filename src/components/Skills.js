import React from 'react';

const Skills = (props) => (
  <section className="skills">
    <h2 className={"skills__title section__title section__title--" + props.theme}>Skills</h2>
    {/* Skills */}
    <div className={"skills-subset skills-subset--skills section__content section__content--" + props.theme}>
      <h3 className="skills-subset__title">Skills</h3>
      <ul className="skills-subset__list">
        <li className="skills-subset__list-item">Front-End Architecture</li>
        <li className="skills-subset__list-item">Responsive Web Design</li>
        <li className="skills-subset__list-item">Semantic Markup</li>
        <li className="skills-subset__list-item">UX Principles</li>
        <li className="skills-subset__list-item">Version Control</li>
      </ul>
    </div>
    {/* Tools */}
    <div className={"skills-subset skills-subset--tools section__content section__content--" + props.theme}>
      <h3 className="skills-subset__title">Tools</h3>
      <ul className="skills-subset__list">
        <li className="skills-subset__list-item">CMS
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">WordPress</li>
          </ul>
        </li>
        <li className="skills-subset__list-item">FWKs
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Bootstrap</li>
            {','}
            <li className="skills-subset__sub-list-item">PostCSS</li>
          </ul>
        </li>
        <li className="skills-subset__list-item">Git
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Bash</li>
            {','}
            <li className="skills-subset__sub-list-item">CMD</li>
            {','}
            <li className="skills-subset__sub-list-item">GitHub</li>
            {','}
            <li className="skills-subset__sub-list-item">GitLab</li>
          </ul>
        </li>
        <li className="skills-subset__list-item">Libs
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">jQuery</li>
            {','}
            <li className="skills-subset__sub-list-item">React</li>
          </ul>
        </li>
        <li className="skills-subset__list-item">Misc
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Babel</li>
            {','}
            <li className="skills-subset__sub-list-item">Gulp</li>
            {','}
            <li className="skills-subset__sub-list-item">NPM</li>
            {','}
            <li className="skills-subset__sub-list-item">Webpack</li>
            {','}
            <li className="skills-subset__sub-list-item">Yarn</li>
          </ul>
        </li>
      </ul>
    </div>
    {/* Languages */}
    <div className={"skills-subset skills-subset--languages section__content section__content--" + props.theme}>
      <h3 className="skills-subset__title">Languages</h3>
      <ul className="skills-subset__list">
        <li className="skills-subset__list-item">CSS3
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Sass</li>
            {','}
            <li className="skills-subset__sub-list-item">BEM</li>
          </ul>
        </li>
        <li className="skills-subset__list-item">HTML5</li>
        <li className="skills-subset__list-item">JavaScript
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">ES6</li>
          </ul>
        </li>
        <li className="skills-subset__list-item">PHP</li>
      </ul>
    </div>
    {/* Additional */}
    <div className={"skills-subset skills-subset--additional section__content section__content--" + props.theme}>
      <h3 className="skills-subset__title">Additional</h3>
      <ul className="skills-subset__list">
        <li className="skills-subset__list-item">Audio
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Audition</li>
            {','}
            <li className="skills-subset__sub-list-item">Pro Tools</li>
            {','}
            <li className="skills-subset__sub-list-item">REAPER</li>
          </ul>
        </li>
        <li className=" skills-subset__list-item">Graphics
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Illustrator</li>
            <li className="skills-subset__sub-list-item">Photoshop</li>
          </ul>
        </li>
        <li className=" skills-subset__list-item">Music
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">Bass/Guitar</li>
            {','}
            <li className="skills-subset__sub-list-item">Piano/Synth</li>
            {','}
            <li className="skills-subset__sub-list-item">Voice</li>
          </ul>
        </li>
        <li className=" skills-subset__list-item">Video
          <ul className="skills-subset__sub-list">
            <li className="skills-subset__sub-list-item">After Effects</li>
            {','}
            <li className="skills-subset__sub-list-item">Final Cut Pro</li>
            {','}
            <li className="skills-subset__sub-list-item">Premiere Pro</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;