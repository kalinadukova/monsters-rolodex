import { Monster } from "../../App";
import Card from "./Card/Card";

import "./CardList.styles.css";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((m) => {
        return <Card key={m.id} monster={m} />;
      })}
    </div>
  );
};

export default CardList;
