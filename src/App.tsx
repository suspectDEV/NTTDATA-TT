import FormComponent from './components/form';
import UserResume from './components/userResume';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/search" element={<UserResume />} />
      </Routes>
    </BrowserRouter>
  );
}