import './spinner.css'
// eslint-disable-next-line react/prop-types
const  Banner = () =>  {
    return (
        <>
        <div className="banner-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" className="spinning-gear">

  <circle cx="50" cy="50" r="45" fill="#FDEBD3" />
  

  <g fill="#F5CBA7">
    <rect x="50" y="5" width="6" height="15" transform="rotate(0 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(30 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(60 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(90 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(120 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(150 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(180 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(210 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(240 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(270 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(300 50 50)" />
    <rect x="50" y="5" width="6" height="15" transform="rotate(330 50 50)" />
  </g>
  
  <circle cx="50" cy="50" r="20" fill="#F9E79F" />
</svg>


        </div>
        </>
    )
}

export default Banner;