import { useState, useEffect } from "react";
import { Draw } from "./conffetiCanvas/conffet";
import "./App.css";

const NUM_BALLOONS = 120; // Cantidad de globos
const MIN_ANIMATION_DURATION = 2; // Duración mínima de la animación en segundos
const MAX_ANIMATION_DURATION = 6; // Duración máxima de la animación en segundos
const MIN_DELAY = 0; // Retardo mínimo en segundos antes de que aparezca un globo
const MAX_DELAY = 5; // Retardo máximo en segundos antes de que aparezca un globo
const COLORS = [
  "#FFD700",
  "#FF6347",
  "#00FF00",
  "#ADD8E6",
  "#1E90FF",
  "#8A2BE2",
];
const timingFunctions = ["ease", "ease-in", "ease-out", "linear"];

function App() {
  const [show, setShow] = useState(false);
  const [balloons, setBalloons] = useState([]);

  const handleClick = () => {
    Draw();
    setShow(!show);
  };

  let mostrar = show ? "none" : "";

  function Audio() {
    return (
      <div>
        <audio autoPlay>
          <source src="/music/yaNoMiresAtras.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }

  useEffect(() => {
    const randomXCoordinate = () =>
      Math.floor(Math.random() * window.innerWidth);
    const randomAnimationDuration = () =>
      Math.random() * (MAX_ANIMATION_DURATION - MIN_ANIMATION_DURATION) +
      MIN_ANIMATION_DURATION;
    const randomDelay = () =>
      Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
    const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
    const randomTimingFunction = () => Math.floor(Math.random() * 4);

    const newBalloons = Array.from({ length: NUM_BALLOONS }, (_, index) => ({
      id: index,
      left: randomXCoordinate(),
      time: randomAnimationDuration(),
      delay: randomDelay(),
      color: randomColor(),
      timing: timingFunctions[randomTimingFunction()],
    }));

    setBalloons(newBalloons);
  }, []);

  return (
    <div className="app">
      <button
        type="button"
        className={`App-button ${mostrar}`}
        onClick={handleClick}
      >
        Click me
      </button>

      {show ? (
        <>
          <Audio />
          <article className="article-card">
            <h1 className="article-h1">
              FE-FE-FE-FE-FELIZ CUMPLEEEEEEEEEEEEE!
            </h1>
            <p className="article-p">
              En este día te quiero agradecer por todo formar parte de mi vida.
              Muchas personas pueden pasar por mi vida, pero pocas marcarme como
              lo hiciste vos. Quiero hacerte saber lo importante que sos, y que
              en este punto, ya formas parte de mí, que te guardo y resguardo en
              mi conciencia. Sos especial. Gracias por hacerme amar de nuevo, y
              gracias por corresponderlo.
              <br />
              <br />
              No me olvido todo lo que hiciste por mí, es algo que de verdad
              aprecio. Estoy orgulloso de ser parte de tus textos, de formar
              parte de tu inspiración y creatividad. Gracias por acordarte de
              mí, de tenerme tanto cariño y de mostrarmelo todos los días,
              incluso cuando yo no estuve.
              <br />
              <br />
              Pienso que sos alguien grandiosa, que me enseñó y me sigue
              enseñando mucho, aprendo mucho de vos; espero poder
              retroalimentarnos tanto como podamos. Me gusta tu forma tan
              particular de ser, es algo que me atrae y me genera curiosad,
              porque sos interesante. Me gustan tus historias, tus ocurriencias
              y tus sueños, porque sos soñadora.
              <br />
              <br />
              Desde el amor que te tengo deseo que cumplas todos tus objetivos,
              tus metas a corto y largo plazo, tus proyectos; que vivas una
              buena vida aunque no sea conmigo, que seas feliz. Incluso si
              alguna vez decidimos ya no compartir tiempo de vida, siempre vas a
              contar conmigo, porque siempre voy a querer que estés bien, porque
              te lo mereces. Sé fuerte en los momentos dificiles, aprendé de
              ellos, construí tú futuro, predecilo. No está mal decaer, pero sí
              no volver a levantarse, tenés que ser fuerte.
              <br />
              <br />
              Espero seguir siendo parte de tú vida hasta que me lo permitas.
              Voy a disfrutar el proceso y de tu compania. Me voy a esforzar
              para mejorar y sé que estás haciendo lo mismo. Espero que
              superemos todos los obstaculos, que haya confianza, que se hablen
              las cosas y poder desearte muchos feliz cumpleaños más, tetete te
              quiero un montónnn. <br /> Feliz cumple. 💕💕💕💕💕💕💕
            </p>
          </article>

          <section className="section-img">
            <img className="img-hand" src="/way.jpg" alt="sele y elias" />
          </section>

          {balloons.map((balloon) => (
            <div
              key={balloon.id}
              className={`balloon ${mostrar}`}
              style={{
                "--color": balloon.color,
                "--left": `${balloon.left}px`,
                "--time": `${balloon.time}s`,
                "--delay": `${balloon.delay}s`,
                "--bottom": "-2025px",
                "--timing-function": balloon.timing,
              }}
            />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
