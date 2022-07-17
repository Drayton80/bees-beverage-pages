import React from "react";
import BeesLogo from "../../public/bee.png";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { isValidInputText } from "../../commons/utils";
import { useNavigate } from "react-router";
import { URL_BREWERIES } from "../../constants/urlRoutes";
import { LOGIN } from "../../constants/idNames";
import "./style.less";
import { useUserStore } from "../../stores/User/Context";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const [validName, setValidName] = useState<boolean>(false);
  const [validAge, setValidAge] = useState<boolean>(false);

  const handleInputTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    const isValidName = isValidInputText(event.currentTarget.value);

    if (isValidName) userStore?.setName(event.currentTarget.value);

    setValidName(isValidName);
  };

  const handleCheckboxAgeChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValidAge(event.currentTarget.checked);

  return (
    <>
      <main id={LOGIN}>
        <article>
          <section>
            <p>Please, enter your full name bellow</p>
            <p>Only alphabetical characters are accepted</p>
            <input
              className="input-text"
              placeholder="Full name"
              onChange={handleInputTextChange}
            />
          </section>
          <section className="center-column">
            <Checkbox
              label="Are you older than 18 years old?"
              onChange={handleCheckboxAgeChange}
            />
            <button
              className="primary"
              disabled={!validName || !validAge}
              onClick={() => navigate(URL_BREWERIES)}
            >
              Enter
            </button>
          </section>
        </article>
      </main>
      <footer id={LOGIN}>
        <img className="bees-logo" src={BeesLogo} alt="Bees Logo" />
      </footer>
    </>
  );
};

export default Login;
