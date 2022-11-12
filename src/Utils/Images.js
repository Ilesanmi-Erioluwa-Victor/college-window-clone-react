

const Image = ({image, className, alt}) => {
    return <img src={image} className={className} alt={alt} loading="lazy"/>
};


export {
    Image,
}