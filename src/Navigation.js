import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <ul>
                    <li>
                        <Link to={{ pathname: '/' }}>Home 🏠</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
