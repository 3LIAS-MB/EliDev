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
          <source src="src/music/Celofan.mp3" type="audio/mpeg" />
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
          <section className="section-img">
            <h1>FELIZ CUMPLEAÑOS</h1>
            <img className="img" src="src/img/way.jpg" alt="sele y elias" />
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

          <article className="article-card">
            <h3 className="article-h3">Titulo h3</h3>
            <p className="article-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              necessitatibus fuga distinctio veritatis iure dolorem? Est rerum
              sit nobis, ea rem et? Atque, excepturi nihil! Ipsum rem distinctio
              obcaecati ullam. Itaque ipsum, nostrum quae aliquam, harum
              reiciendis ex ducimus atque suscipit perferendis beatae doloribus
              culpa aspernatur vel non ad doloremque aliquid enim illo cum. Sed
              eveniet ratione itaque ullam recusandae. Esse similique, aliquam
              architecto natus veniam accusantium nulla nemo voluptates ipsa?
              Explicabo perferendis sunt optio quae cupiditate et quos quas
              debitis consequuntur nobis suscipit, fuga doloribus deleniti
              tenetur amet error. Est in quod, omnis fugit nulla iusto id itaque
              voluptatum odio ad maxime sapiente autem vel rerum nemo a nobis!
              Voluptatum temporibus illum similique facere commodi! Excepturi
              debitis iure officiis! Quod mollitia explicabo sunt animi odio
              reiciendis illum ipsum adipisci quas voluptate fugiat quaerat
              similique, laudantium expedita esse libero beatae. Qui eveniet
              quas saepe quos vitae non quam facere deserunt. Ipsa et ipsam, in
              dolorem culpa nisi cupiditate, nemo ducimus dicta iusto voluptatum
              repellendus, molestiae pariatur est velit minima. Quidem
              voluptatum itaque aut accusamus sunt maiores. Praesentium incidunt
              hic maiores. Iure, totam. Suscipit veritatis, provident, similique
              explicabo iste consequuntur dolor unde molestiae velit laboriosam
              sequi nesciunt expedita! Amet officiis eveniet pariatur, magnam
              corporis praesentium inventore aut, voluptate voluptatum labore
              tempora. Officiis at, est obcaecati molestias, quidem atque quasi
              non vel facilis quae reprehenderit? Fugiat, cupiditate velit! Id
              molestias rem dolores sunt repudiandae blanditiis debitis
              cupiditate optio eius? Quaerat, consequuntur aliquam! Dolorem
              soluta neque laborum earum perspiciatis eum optio voluptas,
              inventore facilis dolore eos doloribus quasi alias voluptate
              dignissimos praesentium cum ducimus aut nesciunt reiciendis? Quos
              quisquam suscipit ad quia excepturi? Adipisci necessitatibus dicta
              modi amet quaerat consequuntur quam veritatis non nihil, hic,
              suscipit eligendi impedit autem cum labore illo consequatur
              minima, ea ullam magnam. Quo mollitia quaerat nihil sequi
              molestiae!
            </p>
            {/* <img src="src/img/married.jpg"></img> */}
          </article>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
