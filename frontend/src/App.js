import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import DayPage from './pages/DayPage';
import ExplorePage from './pages/ExplorePage';
import MyCalendarPage from './pages/MyCPage';
import AddEventPage from './pages/AddEventPage';
import Login from './pages/Login'
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/day" element={<DayPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/my" element={<MyCalendarPage />} />
      <Route path="/add" element={<AddEventPage />} />
    </Routes>
  </Router>
  );
}

export default App;
