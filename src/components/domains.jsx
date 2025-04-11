import DomCards from './cards';
import styled from 'styled-components';


function Domains() {
  const domains = [
    {
      title: "UI/UX",
      image: "/images/UI-UX.png",
      description: "Dedicated to enhancing user interaction, this domain focuses on creating smooth and engaging user interfaces. Members work on modern design trends to deliver high-quality digital experiences, bridging the gap between functionality and aesthetics."
    },
    {
      title: "Web Development",
      image: "/images/webdev.png",
      description: "This domain builds and maintains web platforms, ensuring cutting-edge digital presence. From front-end designs to back-end functionality, members explore various web technologies, contributing to projects that enhance both usability and performance."
    },
    {
      title: "Public Relation and Operations",
      image: "/images/PR.png",
      description: "As the backbone of the club's operations, this domain handles outreach, partnerships, and event management. Members ensure smooth communication and organize activities to build the Nexura brand," 
    },
    {
      title: "3D Modelling and Animation",
      image: "/images/3d.png",
      description: "This domain specializes in creating stunning visual content through VFX and 3D design. It brings ideas to life with immersive models and animations, contributing to various creative projects, including automotive visualization." 
    },
    {
      title: "Parametric Modelling and Simulation",
      image: "/images/PR.png",
      description: "Focused on precision engineering, this domain leverages tools like ANSYS and SolidWorks to develop and analyze high-performance designs. Members explore advanced simulations to optimize structures for real-world applications, ensuring efficiency and reliability in automotive engineering." 
    }
  ]
  return (
    <StyledWrapper>
    <div className="domainContainer">
                    {domains.map((domains, index) => (
                        <DomCards
                            key={index}
                            image={domains.image}  
                            title={domains.title}
                            description={domains.description}
                        />
                    ))}
                </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
.domainContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    
        }`;
export default Domains;