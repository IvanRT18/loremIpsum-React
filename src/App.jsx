import { useState } from "react";
import dataText from "../src/data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const handleChange = () => {
    if (count >= 8) {
      setCount(1);
      return;
    }
    if (count <= 0) {
      setCount(1);
      return;
    }
    setCount((currentValue) => {
      const newValue = currentValue + 1;
      return newValue;
    });
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
          max={8}
          min={1}
          type="number"
          name="number-input"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
      {text &&
        text.map((paragraph) => {
          return (
            <div className="lorem-text">
              <p key={nanoid()}>{paragraph}</p>
            </div>
          );
        })}
    </section>
  );
};
export default App;
