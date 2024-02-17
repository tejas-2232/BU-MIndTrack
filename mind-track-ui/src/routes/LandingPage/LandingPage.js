import { useEffect } from 'react'
import './LandingPage.scss'
import '../../_helpers.scss'

const LandingPage = () => {

  useEffect(() => {
    localStorage.removeItem('accessToken')
  }, [])

  return (
    <div className='main-container'>
      {/* <h1>Landing Page</h1> */}
      {/* <Button handleOnClick={handleOnBtnClick}>Login</Button> */}
      <div className='intro-line-container width100'>
        <div className='bu-line text-center mb10'>Navigate Your Mind, Chart Your Wellness Journey —</div>
        <div className='quiz-line text-center'>MindTrack: Tailored Mental Health Insights for University Students!</div>
      </div>
      <div className='welcome-msg-container'>
        <h2>Welcome Message</h2>
        <p>Welcome to MindTrack, the Beacon of Balanced Well-Being for University Students. 
          Step into a world where your mental health is the priority, and every aspect of your well-being is mapped with care. 
          Here, we don't just track — we illuminate paths to resilience and vitality with innovative tools and personalized insights. 
          Embrace the power of understanding your emotions, behaviors, and stressors, and unlock a treasure trove of resources for your self-care journey. 
          Begin your voyage to a healthier mind today, because when you flourish, so does your potential.</p>
      </div>
    </div>
  )
}

export default LandingPage
