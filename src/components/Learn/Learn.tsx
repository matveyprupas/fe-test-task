import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Learn = (): ReactElement => {
  const { id } = useParams();

    return (
      <h1>LEARN. Vine ID: {id}</h1>
    );
  }