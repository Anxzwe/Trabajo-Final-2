import { PhotoProvider } from "react-photo-view";
import { GalleryImages } from '../../data/Gallery/GalleryCards';
import GalleryItem from '../Gallery/GalleryItem';
import 'react-photo-view/dist/react-photo-view.css';
import '../../styles/Gallery/Galeria.css';

export default function Galeria() {
    return (

        <main>

            <section class="gallery">

                <h1 class="gallery__title">Galeria del refugio</h1>

                <PhotoProvider>
                    <div className="gallery__container1">
                        {GalleryImages.map(({ id, img, alt }) => (
                            <GalleryItem key={id} img={img} alt={alt} />
                        ))}
                    </div>
                </PhotoProvider>

            </section>

        </main>

    );
}
