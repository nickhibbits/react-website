import React from "react";

function Connect() {
  return (
    <section className="container connect-container">
      <div className="component connect-component">
        <section className="info-wrapper">
          <h1>Connect</h1>
          <p>Something on your mind? Shoot me a message!</p>
        </section>
        <form className="connect-form" action="">
          <p className="subject">Subject</p>
          <input type="text" className="subject-input" />
          <p className="message">Message</p>
          <input type="text-area" className="message-input" />
        </form>
      </div>
    </section>
  );
}

export default Connect;
