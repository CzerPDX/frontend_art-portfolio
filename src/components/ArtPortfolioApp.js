import '../styles/ArtPortfolioApp.css';
import NavMain from './artPortfolio/NavMain';
import LandingMain from './artPortfolio/LandingMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';


function ArtPortfolioApp() {
  return (
    <div className="ArtPortfolioApp">
      <NavMain />
      <Container>
        <Routes>
          <Route exact path='/' element={<LandingMain />} />
          {/* Future Routes to Create? */}
          {/* <Route exact path='/illustration' element={<Illustration />} />
          <Route exact path='/graphic-design' element={<GraphicDesign />} />
          <Route exact path='/web-design' element={<WebDesign />} /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default ArtPortfolioApp;
