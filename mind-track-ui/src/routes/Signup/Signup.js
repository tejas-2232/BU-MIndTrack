import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Dropdown from '../../components/Dropdown'
import { setSnackbar, setLoader } from '../../redux/common'
import { postRequestAsync } from '../../config/requestAsync'
import loginBanner from '../../assets/images/signupImg.jpg'
import './Signup.scss'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  // const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [selectedRole, setSelectedRole] = useState('')

  useEffect(() => {
    localStorage.removeItem('accessToken')
  }, [])

  const handleOnSubmitBtnClick = async () => {
    try {
      dispatch(setLoader(true))
      // const response = await postRequestAsync('register/', {
      //   email: email,
      //   password: password,
      //   confirmPassword: confirmPassword
      // })
      // console.log('response', response)
      const response = { access: 'test' }
      if (response?.access) {
        navigate('/login')
        dispatch(setSnackbar({ showSnackbar: true, type: 'success', message: response.result }))
      } else {
        dispatch(setSnackbar({ showSnackbar: true, type: 'error', message: response.request.responseText }))
      }
      dispatch(setLoader(false))
    } catch (error) {
      console.log('error', error)
      dispatch(setLoader(false))
    }
  }

  // const handleRoleChange = (option) => {
  //   setSelectedRole(option.value);
  // }

  return (
    <div className='main-container'>
      <div className='signup-page-container d-flex width-full'>
        <div className='signup-img-section width-full'>
          <img src={loginBanner} className='width-full' alt='login-banner' />
        </div>
        <div className='signup-form-section'>
          <div className='text-center mb20 signup-title'>SignUp Form</div>
          {/* <Input placeholder='Enter Firstname' id='firstname' label='Firstname' value={firstname} className={{ formControl: 'mb30' }} handleOnChange={(e) => setFirstname(e.target.value)} /> */}
          {/* <Input placeholder='Enter Lastname' id='lastname' label='Lastname' value={lastname} className={{ formControl: 'mb30' }} handleOnChange={(e) => setLastname(e.target.value)} /> */}
          <Input placeholder='Enter Email' id='email' label='Email' value={email} className={{ formControl: 'mb30' }} handleOnChange={(e) => setEmail(e.target.value)} />
          {/* <label className='role-label'>Select Role</label>
          <Dropdown
            id='roleDropdown'
            value={selectedRole}
            placeholder='Select a Role'
            handleOnChange={handleRoleChange}
            options={[
              { id: 1, value: 'Examinee' },
              { id: 2, value: 'Examiner' },
            ]}
            classObject={{ container: 'mb30 mt10' }}
          /> */}
          {/* <Input placeholder='Enter Username' id='username' label='Username' value={username} className={{ formControl: 'mb30' }} handleOnChange={(e) => setUsername(e.target.value)} /> */}
          <Input placeholder='Enter Password' id='password' label='Password' value={password} className={{ formControl: 'mb30' }} handleOnChange={(e) => setPassword(e.target.value)} />
          <Input placeholder='Confirm Password' id='confirm_password' label='Confirm Password' value={confirmPassword} className={{ formControl: 'mb30' }} handleOnChange={(e) => setConfirmPassword(e.target.value)} />
          <Button className='button button-primary' handleOnClick={handleOnSubmitBtnClick}>Submit</Button>
        </div>
      </div>

    </div>
  )
}

export default Signup
