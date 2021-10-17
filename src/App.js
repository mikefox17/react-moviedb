import './App.css';
import MovieList from './movie/MovieList';
import MovieDetail from './movie/MovieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/' exact>
                        <MovieList />
                    </Route>
                    <Route path='/movie/:id'>
                        <MovieDetail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
