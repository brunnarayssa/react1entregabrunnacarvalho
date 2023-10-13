import React from 'react';

const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;
