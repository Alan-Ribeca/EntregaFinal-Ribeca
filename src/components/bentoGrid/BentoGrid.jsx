import "./bentoGrid.scss";

export const BentoGrid = () => {
  return (
    <section className="bento">
      <div className="auri">
        <img src="./img/auri.jpg" alt="" />
        <p className="nombreProducto auricular">Auriculares</p>
        <button className="bentoButon">Comprar ahora</button>
      </div>
      <div className="componentes">
        <img src="./img/componente.png" alt="" />
        <p className="nombreProducto componente">Componentes</p>
        <button className="bentoButon">Comprar ahora</button>
      </div>
      <div className="pc">
        <img src="./img/pcNueva.jpg" alt="" />
        <p className="nombreProducto pcFoto">Pc Gamer</p>
        <button className="bentoButon">Comprar ahora</button>
      </div>
      <div className="celu">
        <img src="./img/celuMasBajo.jpg" alt="" />
        <p className="nombreProducto celuFoto">Celulares</p>
        <button className="bentoButon">Comprar ahora</button>
      </div>
      <div className="netbo">
        <img src="./img/laptop.png" alt="" />
        <p className="nombreProducto netboFoto">Netbook</p>
        <button className="bentoButon">Comprar ahora</button>
      </div>
      <div className="moni">
        <img src="./img/moni.png" alt="" />
        <p className="nombreProducto moniFoto">Monitores</p>
        <button className="bentoButon">Comprar ahora</button>
      </div>
    </section>
  );
};
