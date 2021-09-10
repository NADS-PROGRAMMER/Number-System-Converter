import './CSS/app.css'
import Header from './Components/Header'
import Converter from './Components/Converter'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="myApp">
      <div className="converter-container">
        <Header />
        <Converter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
