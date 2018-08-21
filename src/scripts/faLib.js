// Library
import { library } from '@fortawesome/fontawesome-svg-core';
// Icons
// ## Brands
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGulp } from '@fortawesome/free-brands-svg-icons/faGulp';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faSass } from '@fortawesome/free-brands-svg-icons/faSass';
import { faWordpress } from '@fortawesome/free-brands-svg-icons/faWordpress';
// ## Solid
import { faAdjust } from '@fortawesome/free-solid-svg-icons/faAdjust';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

const faLib = library.add(
  faCss3, faGithub, faGulp, faHtml5, faJs, faPhp, faReact, faSass, faWordpress, 
  faAdjust, faClipboardList, faEnvelope, faLaptopCode, faPlusCircle, faUser
);