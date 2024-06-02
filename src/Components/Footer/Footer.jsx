import "./Footer.css"
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer() {
    return (
      <>
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    {/* <img src={footer_logo} alt="" /> */}
                    <p>Fullstack Developer, Bangladesh</p>
                </div>
                <div className="footer-top-right">
                    {/* <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" name="" id="" />
                    </div>
                    <p className="footer-subscribe">Subscribe</p> */}
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bootom-left">@ 2024 Ittehad Rahman. All rights reserved</div>
                <div className="footer-bottom-right">
                    {/* <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Contact with me</p> */}
                </div>
            </div>
        </div>  
      </>
    )
}  
export default Footer