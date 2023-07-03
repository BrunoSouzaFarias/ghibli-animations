import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { FilmContextProvider } from './context/FilmsContext';

function App() {
  return (
    <Route>
      <FilmContextProvider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/film/:id" component={ Favorites } />
        </Switch>
      </FilmContextProvider>
    </Route>
  );
}

export default App;
