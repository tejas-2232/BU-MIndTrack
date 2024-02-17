import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import CategoryDetails from './routes/CategoryDetails'
import AddQuestions from './routes/AddQuestions'
import StudentQuiz from './routes/StudentQuiz'
import { getFromLocalStorage } from './utils/localStorage'

const AuthorizedRoute = () => { 
  const authorization = getFromLocalStorage('accessToken')
  return authorization?.length > 0 ? (
    <main className='main-container'>
      <Routes>
        <Route path='home/*' element={<Home />}></Route>
        {/* <Route path='category-details/*' element={<CategoryDetails />}></Route>
        <Route path='add-questions/*' element={<AddQuestions />}></Route>
        <Route path='student-quiz/*' element={<StudentQuiz />}></Route>
        <Route path='notification/*' element={<Home />}></Route>
        <Route path='profile/*' element={<Home />}></Route> */}
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </main>
  ) : (
    <Navigate to='/' replace />
  )
}

export default AuthorizedRoute
