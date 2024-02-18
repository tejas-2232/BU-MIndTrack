import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postRequestAsync } from '../../config/requestAsync'
import { setSnackbar, setLoader, setAuthorization, setIsExaminee } from '../../redux/common'
import Button from '../../components/Button'
import Input from '../../components/Input'
import loginBanner from '../../assets/images/signupImg.jpg'
import { setToLocalStorage } from '../../utils/localStorage'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState({ access: 'test' })

  useEffect(() => {
    localStorage.removeItem('accessToken')
  }, [])

  const handleOnSubmitBtnClick = async () => {
    try {
      dispatch(setLoader(true))
      // const response = await postRequestAsync('login/', {
      //   username_or_email: username,
      //   password: password,
      // })
      setResponse(response)
      if (response.access) {
        dispatch(setAuthorization(response?.access))
        // setToLocalStorage('is_examinee', response?.is_examinee)
        // dispatch(setIsExaminee(response.is_examinee))
        setToLocalStorage('accessToken', response?.access)
        dispatch(setSnackbar({ showSnackbar: true, type: 'success', message: "Login Successful!" }))
        navigate('/home')
      } else {
        dispatch(setSnackbar({ showSnackbar: true, type: 'error', message: response.data.result }))

      }
      dispatch(setLoader(false))
    } catch (error) {
      console.log('error', error)
      console.log('response', response, error)
      // dispatch(setSnackbar({ showSnackbar: true, type: 'error', message: response.data.result }))
      dispatch(setLoader(false))
    }
  }

  return (
    <div className='main-container'>
      <div className='login-page-container d-flex width-full'>
        <div className='login-img-section width-full'>
          <img src={loginBanner} className='width-full' alt='login-banner' />
        </div>
        <div className='login-creds-section'>
          <Input placeholder='Username' id='username' label='Enter Username' value={username} className={{ formControl: 'mb30' }} handleOnChange={(e) => setUsername(e.target.value)} />
          <Input placeholder='Password' id='password' label='Enter Password' value={password} handleOnChange={(e) => setPassword(e.target.value)} />
          <div className='new-user-span mt20 mb20 d-flex'>New User?
            <a href='/signup' className='pl10'>SignUp</a>
          </div>
          <Button className='button button-primary' handleOnClick={handleOnSubmitBtnClick}>Submit</Button>
        </div>
      </div>

    </div>
  )
}

export default Login
