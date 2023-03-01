import { Routes, Route ,BrowserRouter } from 'react-router-dom'
import LoginPage from './views/LoginPage/LoginPage';
import HomePage from './views/HomePage/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/homepage' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

