import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/praksa:id" exact element={<Post />} />
        {/* <Route path="/*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
