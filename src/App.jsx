import classes from './App.module.css'
import Hero from "./components/cards/Hero.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
function App() {

  return (
    <div className={classes.wrapper}>
        <Hero/>
        <Dashboard/>
    </div>
  )
}

export default App
