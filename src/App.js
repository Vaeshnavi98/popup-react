import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
