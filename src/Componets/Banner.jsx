// eslint-disable-next-line react/prop-types
const  Banner = ({image}) =>  {
    return (
        <>
        <div className="banner-container">
        <img src={image} alt="Banner" className="banner-image" />
        </div>
        </>
    )
}

export default Banner;