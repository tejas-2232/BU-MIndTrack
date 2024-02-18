import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { setSnackbar } from '../../redux/common'
import { getFromLocalStorage } from '../../utils/localStorage'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Snackbar from '../../components/Snackbar'
import logo from '../../assets/images/logo.png'
import home from '../../assets/images/home.svg'
import success from '../../assets/images/success.svg'
import error from '../../assets/images/error-alert.svg'
import fullLogo from '../../assets/images/full-logo.png'
import '../../App.scss'

const Layout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [active, setActive] = useState('Home')
  const showLoader = useSelector((state) => state.common.showLoader)
  const snackbar = useSelector((state) => state.common.snackbar)
  const authorization = getFromLocalStorage('accessToken')
  const navItems = [
    {
      title: 'Home',
      icon: home,
      onClick: () => {
        setActive('Home')
        navigate('/home')
      },
      isActive: active === 'Home',
    },
    {
      title: 'Logout',
      icon: home,
      onClick: () => {
        setActive('logout')
        navigate('/login')
        localStorage.clear()
      },
      isActive: active === 'logout',
    }
  ]

  const navItemsBeforeLogin = [
    {
      title: 'Login',
      icon: home,
      onClick: () => {
        setActive('Login')
        navigate('/login')
      },
      isActive: active === 'Login',
    },
    {
      title: 'Sign Up',
      icon: home,
      onClick: () => {
        setActive('signUp')
        navigate('/signup')
      },
      isActive: active === 'signUp',
    }
  ]

  const handleSnackbarClose = () => {
    dispatch(setSnackbar({ showSnackbar: false, type: '', message: '' }));
  };

  return (
    <>
      {showLoader ? <Loader /> : null}
      {snackbar?.showSnackbar &&
        <Snackbar type={snackbar.type}
          message={snackbar.message}
          callback={handleSnackbarClose}
          imagePath={snackbar.type === 'success' ? success : error} />}
      {(<Header
        brand={
          <div className='d-flex header-title'>
            <img src={fullLogo} style={{ height: '30px' }} alt='brand logo' className='logo-filter' />
            <div className='header-side-title'>
              <span>MindTrack</span>
            </div>
          </div>
        }
        className={{ navLink: 'header-icon-container' }}
        navItems={authorization?.length > 0 ? navItems : navItemsBeforeLogin}
        position='sticky-top'
      >
      </Header>)}
      <Outlet className='outlet-container' />
      <Footer className={{ footerContainer: 'footer-container' }}>
        <div className='footer-title'>
          <p>Powered By</p>
          <img src={logo} alt='footer' />
        </div>
        <div className='footer-trademark'>
          <p>Footer text</p>
        </div>
        <div className='footer-copyright'>
          <p>
            Copyright &copy; {new Date().getFullYear() - 1}- {new Date().getFullYear()}
          </p>
        </div>
      </Footer>
    </>
  )
}

export default Layout
