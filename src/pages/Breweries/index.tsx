import React from "react";
import { BREWERIES } from "../../constants/idNames";
import { URL_LOGIN } from "../../constants/urlRoutes";
import { useNavigate } from "react-router";
import BackButton from "../../components/BackButton";
import BreweryCard from "../../components/BreweryCard";
import { useUserStore } from "../../stores/User/Context";
import { observer } from "mobx-react";
import "./style.less";

const Breweries: React.FC = observer(() => {
  const userStore = useUserStore();
  const navigate = useNavigate();

  const handleCardDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    userStore?.deleteBrewery(userStore.user, event.currentTarget.value);
  };

  return (
    <>
      <header id={BREWERIES}>
        <nav>
          <BackButton onClick={() => navigate(URL_LOGIN)} />
        </nav>
        <h2>{userStore?.user.name}</h2>
      </header>
      <main id={BREWERIES}>
        <section>
          {userStore?.user.breweries.map((brewery) => (
            <BreweryCard
              key={brewery.id}
              brewery={brewery}
              onDeleteClick={handleCardDelete}
            />
          ))}
        </section>
      </main>
    </>
  );
});

export default Breweries;
