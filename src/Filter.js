import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            <h3>{filter}</h3>
            <input type='text' onChange={e => setFilter(e.target.value)} />
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Filter;
