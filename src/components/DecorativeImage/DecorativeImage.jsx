
import './DecorativeImage.scss';

function DecorativeImage({ show }) {
    return (
        <div className={`img-container ${show && 'img-container--show'}`}>
        </div>
    )
}

export default DecorativeImage;