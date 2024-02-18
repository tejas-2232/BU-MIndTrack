import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Forms from './routes/Forms'
import ChatPage from './routes/ChatPage'
// import AddQuestions from './routes/AddQuestions'
// import StudentQuiz from './routes/StudentQuiz'
import { getFromLocalStorage } from './utils/localStorage'

const AuthorizedRoute = ({socket}) => { 
  const authorization = getFromLocalStorage('accessToken')
  return authorization?.length > 0 ? (
    <main className='main-container'>
      <Routes>
        <Route path='home/*' element={<Home socket={socket} />}></Route>
        <Route path='forms/*' element={<Forms />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </main>
  ) : (
    <Navigate to='/' replace />
  )
}

export default AuthorizedRoute
