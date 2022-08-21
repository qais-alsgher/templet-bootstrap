import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Lending from './components/Lending';
import Good from './components/Good';
import SectionNum from './components/SectionNum';
import OurWork from './components/OurWork';
import Stuff from './components/Stuff';
import Team from './components/Team'
import Blog from './components/Blog';
function App() {
  return (
    <div className="App">
      <Header />
      <Lending />
      <Good />
      <SectionNum />
      <OurWork />
      <Stuff />
      <Team />
      <Blog />
    </div>
  );
}

export default App;
