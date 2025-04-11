import styles from "./card.css";
function Card({ image, name, position, description }) {
  return (
    <>
    <div className="card">
      <div className="image-container">
        <img src={image} alt={name} />
        <div className="overlay">
          <p>{description}</p>
        </div>
      </div>
      <div className="info-container">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
    <div className="popUp">
        <p>
            {description}
        </p>
    </div>
    </>
  );
}

export default Card; 