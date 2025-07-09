import { Link } from 'react-router-dom'

export default function GalleryImg({ href, img, alt }) {
    return (
        <Link className='gallery__link' to={href}><img className='gallery__img' src={img} alt={alt} /></Link>
    )
}