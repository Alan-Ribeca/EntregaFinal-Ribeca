import "./bentoGrid.scss";
import { Link } from "react-router-dom";

export const BentoGrid = () => {
  return (
    <section className="bento">
      <div className="auri">
        <img src="./img/auri.jpg" alt="" />
        <p className="nombreProducto auricular">Auriculares</p>
        <Link to={"/category/accesorios"}>
        <button className="bentoButon">Comprar ahora</button>
        </Link>
      </div>
      <div className="componentes">
        <img src="./img/componente.png" alt="" />
        <p className="nombreProducto componente">Componentes</p>
        <Link to={"/category/Componente"}>
        <button className="bentoButon">Comprar ahora</button>
        </Link>
      </div>
      <div className="pc">
        <img src="./img/pcNueva.jpg" alt="" />
        <p className="nombreProducto pcFoto">Pc Gamer</p>
        <Link to={"/category/Pc"}> 
        <button className="bentoButon">Comprar ahora</button>
        </Link>
      </div>
      <div className="celu">
        <img src="./img/celuMasBajo.jpg" alt="" />
        <p className="nombreProducto celuFoto">Celulares</p>
        <Link to={"/category/Celular"}>
        <button className="bentoButon">Comprar ahora</button>
        </Link>
      </div>
      <div className="netbo">
        <img src="./img/laptop.png" alt="" />
        <p className="nombreProducto netboFoto">Netbook</p>
        <Link to={"/category/Netbook"}>
        <button className="bentoButon">Comprar ahora</button>
        </Link>
      </div>
      <div className="moni">
        <img src="./img/moni.png" alt="" />
        <p className="nombreProducto moniFoto">Monitores</p>
        <Link to={"/category/Monitor"}>
        <button className="bentoButon">Comprar ahora</button>
        </Link>
      </div>
    </section>
  );
};
