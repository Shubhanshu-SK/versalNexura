
import { useState , useEffect} from 'react'
import React from 'react'
// import './ourService.css'
import css from './ourService.module.css'

function OurService() {

    const [data, setData] = useState([])

    let dataObject = {
        'UI/UX Design': ['User-Centric Design',
            'Wireframing & Prototyping',
            'Visual & Interactive Design',
            'Website design',
            'Mobile & Web UI/UX',
            'Usability Testing & Optimization'],

        'Web Development': ['Full-Stack Development',
            'Custom Web Applications',
            'E-Commerce & CMS Solutions',
            'API Integration & Backened Solutions',
            'Responsive & Mobile-Optimized Websites'],

        '3D Modelling And Animation': ['High-Quality 3D Models',
            'Photorealistic Rendering',
            'Dynamic Animation & VFX',
            'Product Visualization',
            'Motion Graphic & Explainar Videos'],
        'Parametric Modelling and Simulation': ['Advanced CAD Modelling',
            'Finite Element Analysis (FEA)',
            'Engineering Simulations (Stress, Thermal, Motion)'],
        'Public Relations and Operations': ['Strategic Communication',
            'Content & Digital Marketing',
            'rand Reputation Management',
            'Social Media Management',
            'Public Relations & Media Outreach',
            'Event Planning & Coordination',
            'Business Process Automation',
            'Client Engagement Strategies',
            'Performance Analytics & Reporting',
            'Operational Efficiency & Workflow Optimization'
        ]
            
    }
    
    useEffect(() => {
      setData(dataObject)
    }, [])

    

    const Content = () => {
        return (
            <>
            
            {Object.keys(data).map((e,i)=>{
                return box(data,i)
            })}
           

        </>
        )
    }
    const box = (props , index)=>{
         
        return (
            <>
            <div className={css.container} >

                <h2 className={css.deptContainer}>
                    {Object.keys(props)[index]}
                </h2>
                <div className={css.listContainer}>
                    <ul className={css.flex}>
                        {Array.from(Object.values(props)[index]).map((e , index)=>{
                            return <li key={'list'+index}> {e}</li>
                        })}
                    </ul>
                </div>
                <div className={css.arrow} >
                    <div style={{fontSize: '2rem'}}>
                        {'>>'}
                    </div>
                </div>
            </div>
            </>
            
        )
    }

    return (

        <div className={css.ourServicesBlock} id="Services">
            <h1>
                Our Service and Works
            </h1>

            <div className={css.flexCol}>

                <Content />
            </div>

            <div className={css.question}>
                <p>Got questions? Reach out us at<a href='nexurargpv@gmail.com' style={{color:"whitesmoke"}}> nexurargpv@gmail.com </a >or call:</p>
                <p><b>Pawan Soni</b> - 7477098233</p>
                <p><b>Astha Pawar</b> - 8305566978</p>
                <p><b>Soumya Shrivastava</b> - 9630012262</p>
            </div>
        </div>
    )
}

export default OurService