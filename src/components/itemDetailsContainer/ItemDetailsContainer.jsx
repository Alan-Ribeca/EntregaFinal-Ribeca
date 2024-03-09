/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { getProduct } from "../../firebase/firebase";
export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProduct(pid)
      .then((prod) => setItem(prod))
      .catch((error) => console.log(error));
  }, [pid]);
  return (
    <section className="itemDetalle">
      <ItemDetail item={item} />
    </section>
  );
};
