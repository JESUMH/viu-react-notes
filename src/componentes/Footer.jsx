import './Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p> Copyleft 2020 - { currentYear }, Introducción a React</p>
    </footer>
  );
}