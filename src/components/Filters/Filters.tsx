import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Filters = (): ReactElement => {
    return (
      <form>
        <input type='checkbox' id="dry" name="dry"/>
        <label htmlFor="dry">dry</label>
        <input type='checkbox' id="semi-dry" name="semi-dry"/>
        <label htmlFor="semi-dry">semi-dry</label>
        <input type='checkbox' id="sweet" name="sweet"/>
        <label htmlFor="sweet">sweet</label>
      </form>
    );
  }