import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Shop = (): ReactElement => {
  const { id } = useParams();

    return (
      <h1>Header 1. There you can buy vine with id: {id}</h1>
    );
  }