import "./backgroundVideo.css";
import Fondo from '../assets/fondo.mp4'
const BackgroundVideo = () => {
    return (
        <div className="video-container">
            <video className="background-video" autoPlay loop muted playsInline>
                <source src={Fondo} type="video/mp4" />
                Tu navegador no soporta videos.
            </video>
        </div>
    );
};

export default BackgroundVideo;
