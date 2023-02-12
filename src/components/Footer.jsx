import './Footer.css';

/**
 * Current year constant
 */
const currentYear = new Date().getFullYear();

/**
 * @function Footer 
 * @returns footer html
 */
export default function Footer() {
  return (
    <footer>
      <p> Copyleft 2020 - { currentYear }, Introducción a React</p>
    </footer>
  );
}