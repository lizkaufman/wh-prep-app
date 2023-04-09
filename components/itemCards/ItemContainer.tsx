import React from "react";

import { ItemDetails } from "./interfaces";
import styles from "../../styles/itemCards.module.css";
import itemData from "@/libs/data/itemData";

import ItemCard from "./ItemCard";

import { Event, EventObject } from "xstate";

interface ItemContainerProps {
  send?: (event: EventObject) => void;
}

const ItemContainer: React.FC<ItemContainerProps> = ({ send }) => {
  return (
    <section className={`py-5 px-5 mx-5 ${styles.itemContainer}`}>
      {itemData.map((item: ItemDetails) => {
        // {exampleItemList.map((item: ItemDetails) => {
        return (
          <ItemCard
            id={item.id}
            name={item.name}
            price={item.price}
            key={item.id}
            image={item.image}
            send={send}
          />
        );
      })}
    </section>
  );
};

export default ItemContainer;
