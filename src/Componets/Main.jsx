import { Element } from "react-scroll";
// eslint-disable-next-line react/prop-types
export const Main = ({showMenu}) => {
  return (
    <>
      <Element name="/main" />
      <main className="main-container" id="/main">
        <div className="main-content-container">
          <h1 className={`${showMenu? 'black-text': 'titulo-main'}`}>
            Llevá tu creatividad al siguiente nivel
          </h1>
          <h3 className={`${showMenu? 'black-text': 'subtitulo-main'}`}>
            Explora nuevas posibilidades, transforma ideas en soluciones <br/>
            innovadoras y crea impacto con cada proyecto que desarrolles.
          </h3>
        </div>
      </main>
    </>
  );
};
