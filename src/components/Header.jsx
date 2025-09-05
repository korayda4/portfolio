import React from "react";

export default function Header() {
  return (
    <header className="header-floating">
      <div className="header-inner">
        <div className="left">
          <img
            src="./img/1754502027924.png"
            alt="Profil"
            className="avatar"
          />
          <div className="name">Koray Demir</div>
        </div>
        <div className="role">React & NextJS & NodeJS & TypeScript Developer</div>
      </div>
    </header>
  );
}
