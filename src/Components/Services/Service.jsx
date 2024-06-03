import "./Service.css"
import theme_pattern from "../../../public/assets/theme_pattern.svg"

import Services_Data from "../../../public/assets/services_data"
function Service() {
    return (
      <>
        <div id="services" className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
                {/* <hr style={{width:"70%"}}/> */}
            </div>
            <div className="services-container">
                {Services_Data.map((services,index)=>{
                    return <div key={index} className="services-format">
                                <h3>{services.s_no}</h3>
                                <h2>{services.s_name}</h2>
                                <p>{services.s_desc}</p>
                                {/* <div className="services_readmore">
                                    <p>Read More</p>
                                    <img src={arrow_icon} alt="" />
                                </div> */}
                            </div>
                })}
            </div>
        </div>  
      </>
    )
}  
export default Service