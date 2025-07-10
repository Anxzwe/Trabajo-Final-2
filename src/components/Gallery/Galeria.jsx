import { PhotoProvider } from "react-photo-view";
import { GalleryImages } from '../../data/Gallery/GalleryCards';
import GalleryItem from '../Gallery/GalleryItem';
import 'react-photo-view/dist/react-photo-view.css';
import '../../styles/Gallery/Galeria.css';

export default function Galeria() {
    return (

        <section className="gallery">
            <main>
                <h1 className="gallery__title">Galeria del refugio</h1>

                <PhotoProvider>
                    <div className="gallery__container1">
                        {GalleryImages.map(({ id, img, alt }) => (
                            <GalleryItem key={id} img={img} alt={alt} />
                        ))}
                    </div>
                </PhotoProvider>
            </main>
        </section>

    );
}