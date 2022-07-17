import React from "react";
import { BreweryCardProps } from "./types";
import ChartSquareBarIcon from "../../public/chart-square-bar.png";
import LocationMarkIcon from "../../public/location-marker.png";
import PhoneIcon from "../../public/phone.png";
import TrashIcon from "../../public/trash.png";
import Tag from "../Tag";
import "./style.less";

const BreweryCard: React.FC<BreweryCardProps> = ({
  brewery,
  onDeleteClick,
}) => {
  const breweryState = brewery.state ?? brewery.county_province;

  return (
    <article className="brewery-card">
      <header>
        <h3>{brewery.name}</h3>
        <button onClick={onDeleteClick} value={brewery.id}>
          <img src={TrashIcon} alt="Delete Button" />
        </button>
      </header>
      <section>
        <p>{`${brewery.street ? brewery.street + "\n" : ""}${
          brewery.city
        }, ${breweryState} - ${brewery.country}`}</p>
      </section>
      <section className="section-tags">
        <Tag icon={ChartSquareBarIcon} label={brewery.brewery_type} />
        <Tag icon={LocationMarkIcon} label={brewery.postal_code} />
        {brewery.phone && <Tag icon={PhoneIcon} label={brewery.phone} />}
      </section>
    </article>
  );
};

export default BreweryCard;
