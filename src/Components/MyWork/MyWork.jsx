import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"

import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from "../../assets/mywork_data"
function MyWork() {
    return (
      <>
        <div id="work" className='mywork'>
            <div className="mywork-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index)=>{
                    return <><div className="container"><div className="name">{work.w_name}</div>
                    <div className="desc">{work.w_desc}</div>
                    <div className="link"><a href={work.w_link}><img src={arrow_icon} alt="" /></a></div>
                    </div></>
                })}
            </div>
            {/* <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>  
      </>
    )
}  
export default MyWork