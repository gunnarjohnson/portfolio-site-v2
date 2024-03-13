import React from 'react';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = ({ theme }) => (
	<section className={`hero section section--theme-${theme}`}>
		<h1 className="heading section__title hero__title">Gunnar Johnson</h1>
		<p className={`content hero__content hero__content--theme-${theme}`}>Software Engineer</p>
		<div className="hero__icon-container">
			<a className="link hero__icon" href="https://www.facebook.com/gunnarjohnson" target="_blank">
				<FontAwesomeIcon icon={faFacebookSquare} />
			</a>
			<a className="link hero__icon" href="https://github.com/gunnarjohnson" target="_blank">
				<FontAwesomeIcon icon={faGithubSquare} />
			</a>
			<a className="link hero__icon" href="https://www.linkedin.com/in/gunnarmjohnson" target="_blank">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</div>
	</section>
);

export default Hero;
