// eslint-disable-next-line react/prop-types
import "./itemListContainer.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../itemList/ItemLis";
import { BentoGrid } from "../bentoGrid/BentoGrid";
import { getProducts } from "../../firebase/firebase.js";
// eslint-disable-next-line react/prop-types
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [mostrarBento, ocultarBento] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    getProducts()
      .then((prods) => {
        if (cid) {
          const productosFiltrados = prods.filter(
            (prod) => prod.category === cid
          );
          ocultarBento(false);
          setProducts(productosFiltrados);
        } else {
          setProducts(prods);
          ocultarBento(true);
        }
      })
      .catch((error) => console.log(error));
  }, [cid]);

  return (
    <>
      {mostrarBento && <BentoGrid />}
      <section className="containerProductos">
        <ItemList products={products} plantilla="Item" />
      </section>
    </>
  );
};
