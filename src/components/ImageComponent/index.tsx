
type ImageComponentProps = {
    src: string; 
    alt: string; 
    width: string; 
    height: string
}

const ImageComponent = ({src, alt, width, height}: ImageComponentProps) => {
    return <img src={src} alt={alt} style={{width, height, objectFit:"cover"}} />
}

export default ImageComponent