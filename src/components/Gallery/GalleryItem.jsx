import { PhotoView } from "react-photo-view";

export default function GalleryItem({ img, alt }) {
    return (
                <PhotoView src={img}>
                    <img src={img} alt={alt} className="gallery__img" />
                </PhotoView>
    );
}