import './Hero.css';
import profile_img from '../../../public/assets/dp.jpg';

function Hero() {
  return (
    <>
      <div id='home' className='hero'>
        <img src={profile_img} alt="Profile" />
        <h1><span>I'm Mohammad Ittehad Rahman Sami,</span> a full stack developer based in Bangladesh.</h1>
        <p>I am currently pursuing my Bachelor's degree in Software Engineering at the Islamic University of Technology, Gazipur, where I am in the first semester of my senior year. My journey in education began at Sunnydale School in Dhanmondi, Dhaka, where I completed my O level and A level studies.</p>
        <div className="hero-action">
          <a href="/Resume_Mohammad Ittehad Rahman Sami.pdf" download className="hero-resume">My resume</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
