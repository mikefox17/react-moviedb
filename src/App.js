import './App.css';
import MovieList from './movie/MovieList';
import MovieDetail from './movie/MovieDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/movie/:id'>
                        <MovieDetail />
                    </Route>
                    <Route path='/'>
                        <MovieList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
