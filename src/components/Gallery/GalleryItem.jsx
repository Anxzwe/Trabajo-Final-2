import { PhotoView } from "react-photo-view";
import PropTypes from "prop-types";

export default function GalleryItem({ img, alt }) {
    return (
        <PhotoView src={img}>
            <img src={img} alt={alt} className="gallery__img" />
        </PhotoView>
    );
}

GalleryItem.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}