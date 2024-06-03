import "./Contact.css"
import theme_pattern from "../../../public/assets/theme_pattern.svg"
import mail_icon from "../../../public/assets/icon.svg"
import call_icon from "../../../public/assets/call_icon.svg"
import location_icon from "../../../public/assets/location_icon.svg"

function Contact() {
    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    
    //     formData.append("access_key", "546e73ca-1db1-42e2-90d9-cde1d3b21531");
    
    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);
    
    //     const res = await fetch("https://api.web3forms.com/submit", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       },
    //       body: json
    //     }).then((res) => res.json());
    
    //     if (res.success) {
    //       alert(res.message);
    //     }
    //   };
    return (
      <>
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> 
                            <p>ittehadrahman@iut-dhaka.edu</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+8801641113528</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Naya Paltan, Dhaka-1000, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <form  className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write your message here:</label>
                    <textarea name="message" id="" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>

        </div>  
      </>
    )
}  
export default Contact