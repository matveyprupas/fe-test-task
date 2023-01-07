import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Shop = (): ReactElement => {
  const { id } = useParams();

    return (
      <h1>SHOP. Vine ID: {id}</h1>
    );
  }