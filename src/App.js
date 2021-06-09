import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Sidebar from './components/About/Sidebar';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contacts" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
  }
  .line-1,
  .line-2,
  .line-3,
  .line-4 {
    width: 1px;
    height: 100vh;
    background-color: var(--border-color);
  }
`;

export default App;
