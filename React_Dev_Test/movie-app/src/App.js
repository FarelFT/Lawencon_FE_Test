import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
