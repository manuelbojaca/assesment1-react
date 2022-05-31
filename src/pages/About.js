import photo from '../photo/42239557.jpeg';
import '../styles/components/About.scss';

const About = () => {
  return (
    <div className="about">
      <h1>Realizado por:</h1>
      <img className="about--photo" src={photo}></img>
      <h2>Jefferson Manuel Bojaca Jaime</h2>
      <p>
        He vivido toda mi vida en la ciudad de Bogota, he sentido afiunidad por la tegnologia y la
        velocidad siempre. Curso la carrera de Ingenieria de sistemas en la universidad distrital
        Francisco Jose de Caldas, vivo con mi esposa Valentina y mi perro Kiara, tengo gran
        experiencia en el campo de la programacion y las matematicas, y me preparao para ser el
        mejor desarrollador web de Colombia.
      </p>
      <p>manuel.bojaca@outlook.com</p>
      <p>https://github.com/manueliciouss</p>
      <p>Tel: 3202573704</p>
    </div>
  );
};

export default About;
