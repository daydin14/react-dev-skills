import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    skills: [{ skill: "JavaScript", level: "4" }],
    skill: "",
    level: "3"
  });

  function handleChange(e) {
    setState({
      ...state,
      skill: e.target.value
    });
  };

  function handleSubmit() {
    alert("ADD SKILL CLICKED");
  };

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {state.skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill"/>
        </label>
        <label>
          <span>LEVEL</span>
          <select 
            name="level"
            value = {state.skill}
            onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}