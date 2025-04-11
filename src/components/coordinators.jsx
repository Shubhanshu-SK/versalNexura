import styles from "./coordinators.module.css";
import Card from "./card";
import { div } from "framer-motion/client";
import { hover } from "framer-motion";

// Test data with actual image paths

const Coordinators = () => {
    // Test data
    const faculty = [
        {
            image: "/people/rishabh tomar.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Test description"
        },
        {
            image: "/people/rishabh tomar.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Test description"
        },
        {
            image: "/people/rishabh tomar.png",
            name: "Rishabh Tomar",
            position: "B.Tech in Automobile Engineering",
            description: "Test description"
        },
    
        // Add more test data if needed
    ]
    const founders= [
        {
            image: "/people/Soumya Ma'am.jpg",
            name: "Soumya Shrivastava",
            position: "Head of UI/UX Designing | Co-head of Parametric Modelling and Simulation | Executive Board Member, Nexura",
            description:"Soumya Shrivastava, a B.Tech student in Automobile Engineering at UIT-RGPV Bhopal, specializes in UI/UX design and parametric modeling. As Head of UI/UX Designing and an Executive Board Member at Nexura, she creates user-friendly digital experiences. Skilled in Figma, SolidWorks, and ANSYS, she blends creativity with engineering precision. With two years of experience, she focuses on intuitive design and simulations. Passionate about innovation, Soumya constantly pushes the boundaries of design and technology."
        },

        {
            image: "/people/Pawan Sir.jpg",
            name: "Pawan Soni",
            position: "Head of 3D modelling and Animation | head of Parametric Modelling and Simulation | Executive Board member , Nexura ",
            description:"Pawan Soni, a B.Tech student in Automobile Engineering at UIT-RGPV Bhopal, is passionate about 3D animation, VFX, and parametric modeling. As Head of 3D Modeling and Animation and an Executive Board Member at Nexura, he brings technical ideas to life with high-quality visuals. Skilled in SolidWorks and ANSYS simulations, he blends creativity with engineering precision. Always eager to innovate, Pawan pushes the boundaries of 3D visualization and simulation, contributing to cutting-edge projects."
        },
        {
            image: "/people/Astha Ma'am.jpg",
            name: "Astha Pawar",
            position: "Head of Web Development | Executive Board Member , Nexura ",
            description:"Astha Pawar, a B.Tech student in Computer Science Engineering at UIT-RGPV Bhopal, is passionate about web development, DSA, and blockchain. As Head of Web Development and an Executive Board Member at Nexura, she leads innovative projects. With two years of experience, she has explored 3D animation and is now diving into blockchain. Beyond tech, she enjoys sketching and swimming. Always eager to learn, Astha thrives on challenges and believes in using technology to make a difference."
        },
        {
            image: "/people/Vishal.jpg",
            name: "Vishal Singh Thakur",
            position: "Mentor - UI/UX | Member, Nexura",
            description: "Vishal Singh Thakur, a Mechanical Engineering student at UIT-RGPV, Bhopal, is passionate about 3D Animation and UI/UX Design. As a UI/UX Mentor and active member at Nexura, he is refining his skills to create intuitive digital experiences. With four months of hands-on experience, he blends creativity with technology. Beyond design, he enjoys cricket, singing, eSports, dancing, and reading. Always eager to learn and innovate, Vishal aims to make an impact in both technical and creative fields."
        },
        {
            image: "/people/Rishabh.png",
            name: "Rishabh Tomar",
            position: "Senior Member - 3D Animation and Modelling,Nexura",
            description: "I'm Rishabh Tomar,Currently pursuing a B.Tech in Automobile Engineering from UIT RGPV, A passionate 3D artist with a keen eye for detail and creativity. After completing my schooling from St. Mary's Residential H.S. School. Alongside my academic pursuits in the dynamic field of automobile engineering, I also explores the world of 3D modeling, bringing my imaginative ideas to life through my artistic skills. Combining technical knowledge with artistic talent, I am dedicated to refining my craft and expanding my expertise in field of 3D, aiming to make a mark in the intersection of technology and design."
        },{
            image: "/people/Mradul.jpg",
            name: "Mradul Shivhare",
            position: "Senior Member - Web Development,Nexura",
            description:"Mradul Shivhare, a web developer with three years of experience, is a Senior Member of the Web Development Department at Nexura. A graduate of UIT-RGPV, Bhopal, he excels in building seamless, high-performance web solutions, from front-end design to backend optimization. Passionate about innovation, he constantly explores new technologies to push digital boundaries. For Mradul, web development is more than coding—it’s about solving problems and shaping the future of the web."
        },
        {
            image: "/people/Harshit Sir.jpg",
            name: "Harshit Mishra",
            position: "Head of Public relation & Operation |Pre-Final year Mechanical Engineering Student | PR & HR Enthusiast ",
            description: "Fascinated by machines and cars since childhood, Harshit pursued Mechanical Engineering at UIT-RGPV, Bhopal. In his freshman year, he discovered a passion for Public Relations, Operations, and HR Management, where strategy meets people. Defined by hard work and determination, he values teamwork, leadership, and strong communication. Believing in continuous growth, he thrives on learning, adapting, and gaining hands-on experience. His goal is to keep building skills and embracing challenges that push him to the next level."
        },
        {
            image: "/people/Sameer sir.png",
            name: "Mohammad Sameer ",
            position: "B.Tech in Automobile Engineering",
            description: "Mohammad Sameer, a Petrochemical Technology Engineering student at UIT-RGPV, Bhopal, is passionate about web development. A member of Nexura's Front-End Web Development team, he has four months of experience, working on projects like Tic-Tac-Toe, Stone-Paper-Scissors, and a Currency Converter. Currently exploring Tailwind CSS, he focuses on modern, efficient design. Beyond coding, he enjoys outdoor sports, driving, and gaming. With a growth mindset, he aims to master full-stack development and impact web technologies."
        },
        
        // Add more test data if needed
    ];

    // const PopUp=(props)=>{
    //     return(
    //         <div style={{position:'fixed', top:'40%', width:'200px', height:'200px'}}>
    //             <p>
    //                 {props.description}
    //             </p>

    //         </div>
    //     )
    // }

    return (
        <div className={styles.allContainer} id="Team">
            <div className={styles.coordinatorsContainer}>
                <h2>Faculty Coordinators</h2>
                <div className={styles.cardGrid}>
                    {faculty.map((member, index) => (
                        <>
                        <Card
                            key={index}
                            image={member.image} 
                            name={member.name}
                            position={member.position}
                            description={member.description}
                            
                            />

                  
                            </>
                    ))}
                </div>
                <h2>Founding Members</h2>
                <div className={styles.cardGrid}>
                    {founders.map((member, index) => (
                        <Card
                            key={index}
                            image={member.image}  
                            name={member.name}
                            position={member.position}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Coordinators;