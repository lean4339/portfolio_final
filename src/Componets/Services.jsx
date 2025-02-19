import { Element } from "react-scroll";

export const Services = () => {
  return (
    <>
      <Element name="/servicios" />
      <main className="services-container" id="/servicios">
      <div className="services-header">
        <h1 className="titulo-main">Mostrate al mundo</h1>
        <p className="services-intro">
          Mostrá tus productos, obras de arte, dibujos o artesanías con una página web hecha a tu medida.
        </p>
      </div>
        <section className="services">
          <article className="service">
            <div className="service-header">
              <h2 className="service-title">Diseño Web</h2>
            </div>
            <p className="service-description">
              Diseños personalizados y adaptados a tus necesidades, con un enfoque en usabilidad y atractivo visual.
            </p>
          </article>
          <article className="service">
            <div className="service-header">
              <h2 className="service-title">Desarrollo Web</h2>
            </div>
            <p className="service-description">
              Desarrollo de aplicaciones web dinámicas, optimizadas y escalables, utilizando las últimas tecnologías del mercado.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};
