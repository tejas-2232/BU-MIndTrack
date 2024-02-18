import { useEffect, useState } from 'react'
import TypingText from '../../utils/TypingText'
import landingBg from '../../assets/images/LandingBg.jpg'
import './LandingPage.scss'
import '../../_helpers.scss'

// const welcomeText = "Welcome to MindTrack, the Beacon of Balanced Well-Being for University Students. Step into a world where your mental health is the priority, and every aspect of your well-being is mapped with care. Here, we don't just track — we illuminate paths to resilience and vitality with innovative tools and personalized insights. Embrace the power of understanding your emotions, behaviors, and stressors, and unlock a treasure trove of resources for your self-care journey.Begin your voyage to a healthier mind today, because when you flourish, so does your potential."
const headingText = "Tailored Mental Health Insights for University Students!"
const LandingPage = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    localStorage.removeItem('accessToken')
  }, [])

  const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${landingBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    padding: windowWidth > 768 ? "50px 0px" : "20px",
  };

  return (
    <div className='main-container'>
      <div style={sectionStyle}>
        <div className='text-center'>
          <h1><TypingText text={headingText} typingSpeed={100} /></h1>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
