import FormComponent from './components/form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
