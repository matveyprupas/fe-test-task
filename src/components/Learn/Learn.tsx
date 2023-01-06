import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Learn = (): ReactElement => {
  const { id } = useParams();

    return (
      <h1>Header 1. Learn about wine with id: {id}</h1>
    );
  }