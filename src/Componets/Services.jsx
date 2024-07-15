import { Element } from "react-scroll"
import LanguageIcon from '@mui/icons-material/Language';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
export const Services = () => {
    return (
    
        <>
        <Element name='/servicios'/>
        <main className='services-container' id="/servicios">
            <h1 className="titulo-main">Mostrate al mundo</h1>
            <section className='services'>
            <p>Mostrá tus productos, obras de arte, dibujos o artesanías con una página web hecha a tu medida</p>
                <div className={'service'}>
                    <div className="service-title">
                    <LanguageIcon className='service-icon'/>
                    <h2 className='service-title'>Diseño Web</h2>
                    </div>
                    <p className='service-description'>Diseños personalizados y adaptados a tus necesidades</p>
                </div>
                <div className={'service'}>

                <div className="service-title">
                    <LaptopMacIcon className='service-icon'/>
                    <h2 className='service-title'>Desarrollo Web</h2>
                    </div>
                    <p className='service-description'>Desarrollo de aplicaciones web con las últimas tecnologías</p>
                </div>
            </section>
        </main>
        </>
    )
}