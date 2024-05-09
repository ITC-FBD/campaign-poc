// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
const icons = document.querySelector('main').querySelectorAll('span.icon');
icons.forEach((span) => {
  const iconName = Array.from(span.classList).find((c) => c.startsWith('icon-')).substring(5);
  const rating = span.parentElement.parentElement.nextElementSibling.innerText;
  if (iconName == 'star-rating') {
   span.style = '--actual-rating:' + rating + ';';
  }
});