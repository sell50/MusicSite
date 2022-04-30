import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const [tag, setTag] = useState(HomePage);

  return (
    <div className="appContainer">
      
        <div id="header">
          <Header />
        </div>
       
        <div id="nav">
          <Nav onButtonClick={(e) => {
            setTag(e)
          }

          }/>
        </div>

        <div id="pageContent">
            <PageContent tag={tag}/>
        </div>

        <div id="footer">
          <Footer onButtonClick={(e) => {
            setTag(e)
          }

          }/>
        </div>

    </div>
  );
}

export default App;
