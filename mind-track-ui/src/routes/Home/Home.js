
import { useNavigate } from 'react-router-dom'
import form from '../../assets/images/healthForm.svg'
import './Home.scss'

const Home = () => {
  const navigate = useNavigate()

  const lowerNavItems = [
    {
      title: 'Forms',
      icon: form,
      onClick: () => {
        navigate('/forms')
      }
    },
    {
      title: 'Visualisation',
      icon: form,
      onClick: () => {
        navigate('/visualisation')
      }
    },
  ]

  return (
    <div className='home-container'>
      <div className='lower-tab'>
        {lowerNavItems.map((item, index) => (
          <div key={index} className='lower-tab-item' onClick={item.onClick}>
            <img src={item.icon} alt='lowerNavItems' />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
