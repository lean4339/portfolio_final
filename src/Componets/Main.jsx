import { Element } from "react-scroll"

export const Main = () => {
    return (
        <>
        <Element name='/main'/>
        <main className='main-container' id="/main">
            <div className='main-content-container'>
                <h3 className="subtitulo-main">Descubre el arte de crear soluciones</h3>
                <h1 className="titulo-main">Buscá el próximo nivel</h1>
                <button className='button-principal  pointer'>Conocenos!</button>
            </div>
        </main>
        </>
    )
}