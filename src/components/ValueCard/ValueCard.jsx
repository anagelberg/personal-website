import './ValueCard.scss';


function ValueCard({ name, description, icon }) {
    return (
        <article className="value-card">
            <div className="value-card__icon">
                {icon()}
            </div>
            <div className="value-card__text">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
};

export default ValueCard;