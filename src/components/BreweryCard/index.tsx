import React from "react";
import { BreweryCardProps } from "./types";
import { useUserStore } from "../../stores/User/Context";
import ChartSquareBarIcon from "../../public/chart-square-bar.png";
import LocationMarkIcon from "../../public/location-marker.png";
import PhoneIcon from "../../public/phone.png";
import TrashIcon from "../../public/trash.png";
import PlusCircleIcon from "../../public/plus-circle.png";
import CheckCircleIcon from "../../public/check-circle.png";
import Tag from "../Tag";
import "./style.less";
import { observer } from "mobx-react";

const BreweryCard: React.FC<BreweryCardProps> = observer(
  ({ brewery, onDeleteClick }) => {
    const userStore = useUserStore();
    const breweryState = brewery.state ?? brewery.county_province;

    const handleTagInputChange = (
      breweryId: string,
      tagIndex: number,
      tagNewText: string
    ) => {
      userStore?.editCustomTag(
        userStore?.user,
        breweryId,
        tagIndex,
        tagNewText
      );
    };

    const handleTagOnClick = (
      event: React.FormEvent<HTMLButtonElement>,
      tagIndex: number
    ) => {
      if (tagIndex + 1 === brewery.customTags.length) {
        userStore?.pushCustomTag(userStore?.user, brewery.id, "add more");
        if (
          userStore?.user.breweries[brewery.id].customTags[tagIndex] ===
          "add more"
        )
          userStore?.editCustomTag(userStore?.user, brewery.id, tagIndex, "");
      }
    };

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
          <Tag
            id={brewery.id}
            icon={ChartSquareBarIcon}
            label={brewery.brewery_type}
          />
          <Tag
            id={brewery.id}
            icon={LocationMarkIcon}
            label={brewery.postal_code}
          />
          {brewery.phone && (
            <Tag id={brewery.id} icon={PhoneIcon} label={brewery.phone} />
          )}
          {brewery.customTags.map((customTag, tagIndex) => (
            <Tag
              key={tagIndex}
              id={brewery.id}
              icon={PlusCircleIcon}
              iconEditing={CheckCircleIcon}
              label={customTag}
              editable
              onClick={(event) => handleTagOnClick(event, tagIndex)}
              onChange={(
                event: React.FormEvent<HTMLInputElement>,
                breweryId: string
              ) =>
                handleTagInputChange(
                  breweryId,
                  tagIndex,
                  event.currentTarget.value
                )
              }
            />
          ))}
        </section>
      </article>
    );
  }
);

export default BreweryCard;
