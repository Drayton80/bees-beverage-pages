import React, { useEffect, useState } from "react";
import { BREWERIES } from "../../constants/idNames";
import { URL_LOGIN } from "../../constants/urlRoutes";
import { useNavigate } from "react-router";
import BackButton from "../../components/BackButton";
import breweriesService from "../../services/Breweries";
import BreweryCard from "../../components/BreweryCard";
import { useUserStore } from "../../stores/User/Context";
import "./style.less";
import { BreweryInfo } from "../../services/Breweries/types";

const Breweries: React.FC = () => {
  const navigate = useNavigate();
  const userStore = useUserStore();
  const [breweries, setBreweries] = useState<BreweryInfo[]>([]);

  useEffect(() => {
    breweriesService.getAll().then((data) => setBreweries(data.data));
  }, []);

  const handleCardDelete = (event: React.FormEvent<HTMLButtonElement>) => {
    const breweriesUpdated = [...breweries];
    const breweryIndex = breweries
      .map((brewery) => brewery.id)
      .indexOf(event.currentTarget.value);

    breweriesUpdated.splice(breweryIndex, 1);

    setBreweries(breweriesUpdated);
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
          {breweries.map((brewery) => (
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
};

export default Breweries;
