import "./App.scss";
import React, { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState({
    color: "pink",
  });
  const { color } = theme;
  const onChange = event => {
    const { name, value } = event.target;
    setTheme(prevState => ({ ...prevState, [name]: value }));
  };
  return (
    <div data-theme-color={color} className="App color">
      <form onChange={onChange} action="" className="form">
        <input type="radio" name="color" id="pink" value="pink" />
        <input type="radio" name="color" id="orange" value="orange" />
        <input type="radio" name="color" id="yellow" value="yellow" />
        <input type="radio" name="color" id="blue" value="blue" />
        <input type="radio" name="color" id="purple" value="purple" />
      </form>
      <div className="test ">
        <h1 className="color-primary">this is a test</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          eligendi a voluptates? Voluptas porro laboriosam molestiae minus fugit
          recusandae sit tenetur, repudiandae ab aliquid, sint ex dolor, harum
          repellat in.
        </p>
        <h2>test</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio
          est voluptate facere neque in at ipsam animi saepe possimus qui alias
          fugit vitae debitis veritatis, temporibus ullam dignissimos
          blanditiis?
        </p>
      </div>
    </div>
  );
};

export default App;
