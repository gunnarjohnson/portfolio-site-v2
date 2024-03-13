import React from 'react';

const About = ({ theme }) => (
	<section id="about" className={`about section section--theme-${theme}`}>
		<h2 className="heading about__title section__title">About</h2>
		<p className="about__content section__content">
			<span className="content about__content-block">
				<span className="section__content--uppercase">I build web applications and websites. </span>
				The Internet is always evolving and I love learning its new technologies. Every day affords fresh opportunities
				to innovate.
			</span>
			<span className="content about__content-block">
				When I'm not developing, you might find me brewing a farmhouse ale, building a guitar pedal, or reading a good
				book. I also love to travel with my family, and we visit the PNW at least once a year to seek out scenic hikes
				(and Portland donuts).
			</span>
			<span className="content about__content-block">Thanks for stopping by, and check out some of my work below!</span>
		</p>
	</section>
);

export default About;
