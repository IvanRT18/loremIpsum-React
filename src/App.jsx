import { useState } from "react";
import dataText from "../src/data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraph = dataText.slice(0, count);
    setText(newParagraph);
  };

  return (
    <section className="section-center">
      <h4>¿Aburrido del mismo lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number-input">Párrafos:</label>
        <input
          max="8"
          min="1"
          step="1"
          type="number"
          name="number-input"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
