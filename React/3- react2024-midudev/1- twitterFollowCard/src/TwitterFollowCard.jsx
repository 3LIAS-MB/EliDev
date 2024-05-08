import { useState } from "react";

export function TwitterFollowCard({
  children,
  userName = "unkonown",
  initialIsFollowing,
}) {
  //const imageSrc = `https://unavatar.io/midudev/${userName}`
  //const userNam3 = `@${userName}` -> para no modificar/mutar la prop
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  /*La diferencia entre un componente y un elemento. Un componente es
    una factoria de elementos, es una funcion que al ejecutarla te devuelve
    un elemento. El elemento es lo que renderiza React*/

  // Renderizado condicional
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    // Utilizar suit o bem (metodologias)
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midu"
          src={`https://unavatar.io/midudev ${userName}`}
        />

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span> {/*-> children*/}
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
