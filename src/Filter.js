const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            <h3>{filter}</h3>
            <input type='text' onChange={e => setFilter(e.target.value)} />
        </div>
    );
};

export default Filter;
