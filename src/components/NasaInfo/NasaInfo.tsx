import './NasaInfo.css'
interface NasaInfoProps {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    imageUrl: string;
}

export default function NasaInfo({title, firstParagraph, secondParagraph, imageUrl}: NasaInfoProps) {
    return (
        <section className="nasa-card">
            <h2 className="nasa-card-title">
                {title}
            </h2>
            <p className="nasa-card-text">
                {firstParagraph}
            </p>
            <p className="nasa-card-text">
                {secondParagraph}
            </p>
            <img src={imageUrl} alt={title} className="nasa-card-image" />
        </section>
    )
}

