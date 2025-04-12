import styles from "./card.css";
import { useRef } from "react";
function Card({ image, name, position, description }) {
  const popUp = useRef()
  
  
  const showpopUp = ()=>{
    popUp.current.className = popUp.current.className + ' afterpopUP'
    
    setTimeout(() => {
      hidepopUp()
    }, 8500);
  }
  const hidepopUp = ()=>{
  
    popUp.current.className = 'popUp'
  }

  return (
    <>
   

    <div className="card" onClick={()=>{
      
      showpopUp()}}>
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
    <div ref={popUp} className="popUp">
      <div className="closeDiv" onClick={hidepopUp}>
      
        <div className="close">
        +
        </div>
        
        <p>
            {description}
        </p>
      </div>
    </div>

    </>
  );
}

export default Card; 
