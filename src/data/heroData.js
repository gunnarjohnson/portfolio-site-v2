import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons/faSquareEnvelope';
import contactData from './contactData';

const { emailAddress } = contactData;
const firstName = 'Gunnar';
const lastName = 'Johnson';

const heroTitle = `${firstName} ${lastName}`;
const heroContent = 'Software Engineer';
const heroIcons = [
  {
    ariaLabel: `Send email to ${firstName}`,
    icon: faSquareEnvelope,
    url: `mailto:${emailAddress}`,
  },
  {
    ariaLabel: `Visit ${firstName}'s GitHub page`,
    icon: faGithubSquare,
    url: 'https://github.com/gunnarjohnson',
  },
  {
    ariaLabel: `Visit ${firstName}'s LinkedIn page`,
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/gunnarmjohnson',
  },
];

export default { heroContent, heroIcons, heroTitle };
