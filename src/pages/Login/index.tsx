import React from "react";
import BeesLogo from "../../public/bee.png";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { isValidInputText } from "../../commons/utils";
import { useNavigate } from "react-router";
import "./style.less";

const Login: React.FC = (props) => {
  const navigate = useNavigate();
  const [validName, setValidName] = useState<boolean>(false);
  const [validAge, setValidAge] = useState<boolean>(false);

  return (
    <>
      <main>
        <article>
          <div>
            <p>Please, enter your full name bellow</p>
            <p>Only alphabetical characters are accepted</p>
            <input
              className="input-text"
              placeholder="Full name"
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setValidName(isValidInputText(event.currentTarget.value))
              }
            />
          </div>
          <div className="center-column">
            <Checkbox
              label="Are you older than 18 years old?"
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setValidAge(event.currentTarget.checked)
              }
            />
            <button
              className="primary"
              disabled={!validName || !validAge}
              onClick={() => navigate("/beverages")}
            >
              Enter
            </button>
          </div>
        </article>
      </main>
      <footer>
        <img className="bees-logo" src={BeesLogo} alt="Bees Logo" />
      </footer>
    </>
  );
};

export default Login;
