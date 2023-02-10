import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="body-container">
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
