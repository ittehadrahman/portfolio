import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from '../../assets/dp.jpg'

function About() {
    return (
      <>
        <div id="about" className='about'>
            <div className="about-title">
                <h1>Technical Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
        </div>
        <div className="about-sections">
            {/* <div className="about-left">
                <img src={profile_img} alt="" style={{width:"50%"}}/>
            </div> */}
            <div className="right">
                <div className="about-para">

                    {/* <br></br> */}
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Languages:</p>
                        <p> Python, Java, C, C++, JavaScript, PHP</p>
                    </div>
                    <div className="about-skill">
                        <p>Frontend:</p>
                        <p>  ReactJS, HTML, CSS, Bootstrap</p>
                    </div>
                    <div className="about-skill">
                        <p>Backend:</p>
                        <p>  Django, Node.js, Express.js</p>
                    </div>
                    <div className="about-skill">
                        <p>Databases:</p>
                        <p>  MySQL, Oracle SQL, SQLite3, MongoDB</p>
                    </div>
                    <div className="about-skill">
                        <p>Developer Tools:</p>
                        <p>  Postman, VS Code, GitHub, Trello, Jira</p>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-acheievement">
                    <h1></h1>
                    <p></p>
                </div>
                <div className="about acheievement">
                    <h1></h1>
                    <p></p>
                </div>
            </div> */}

        </div>  
      </>
    )
}  
export default About