// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import { asyncPreloadProcess } from './states/isPreload/action';
import DetailPage from './pages/DetailPage';
import LeaderBoardPage from './pages/LeaderBoardPage';
import Loading from './components/Loading';
function App() {
  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreLoad);
  const dispatch = useDispatch();
  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);
  if (isPreload) {
    return null;
  }
  if (authUser === null) {
    return (
      <> 
      
        <main>
        <Loading />
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      
        <main>
        <Loading />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thread/:id" element={<DetailPage />} /> 
            <Route path="/leaderboard" element={<LeaderBoardPage />} />                    
          </Routes>
        </main>
    
    </>
  );
}

export default App;
