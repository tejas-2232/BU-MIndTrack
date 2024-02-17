import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/index'
// import Login from './routes/Login'
// import SignUp from './routes/Signup'
import LandingPage from './routes/LandingPage'
import Layout from './common/Layout'
// import AuthorizedRoute from './AuthorizedRoute'
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          {/* <Route path='*' element={<AuthorizedRoute />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} /> */}
        </Route>
      </Routes>
    </Provider>
  )
}

export default App;
