import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  //Main page content useState
  const [tag, setTag] = useState(HomePage);

  return (
    <div className="appContainer">
      
        {/* Header Component */}
        <div id="header">
          <Header />
        </div>
       
        <div id="nav">
          {/* Nav State -> Set with button click */}
          <Nav onButtonClick={(e) => {
            setTag(e)
          }

          }/>
        </div>

          {/* Show Page Content - Default -> HomePage */}
        <div id="pageContent">
            <PageContent tag={tag}/>
        </div>

          {/* Footer Component */}
        <div id="footer">
          <Footer />
        </div>

    </div>
  );
}

export default App;
