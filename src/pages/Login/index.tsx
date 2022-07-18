import React from "react";
import BeesLogo from "../../public/bee.png";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { isValidInputText } from "../../commons/utils";
import { useNavigate } from "react-router";
import { URL_BREWERIES } from "../../constants/urlRoutes";
import { LOGIN } from "../../constants/idNames";
import { useUserStore } from "../../stores/User/Context";
import breweriesService from "../../services/Breweries";
import InputText from "../../components/InputText";
import "./style.less";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const [inputName, setInputName] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(false);
  const [validAge, setValidAge] = useState<boolean>(false);

  const handleInputTextChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputName(event.currentTarget.value);
    setValidName(isValidInputText(event.currentTarget.value));
  };

  const handleEnterClick = async () => {
    if (userStore?.user.name !== inputName) {
      const breweries = (await breweriesService.getAll())?.data;
      userStore?.setBreweries(userStore?.user, breweries);
      userStore?.setName(userStore?.user, inputName);
    }
    navigate(URL_BREWERIES);
  };

  const handleCheckboxAgeChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValidAge(event.currentTarget.checked);

  return (
    <>
      <main id={LOGIN}>
        <article>
          <section>
            <InputText
              label="Please, enter your full name bellow"
              warningLabel="Only alphabetical characters are accepted"
              placeholder="Full name"
              error={!(inputName === "" || validName)}
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
              onClick={handleEnterClick}
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
