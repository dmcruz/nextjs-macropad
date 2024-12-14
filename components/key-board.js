import React from 'react';

const KeyBoard = ({ children, rows = 3, columns = 3 }) => {
    const gridTemplate = {
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '5px',
    };

    return <div style={gridTemplate}>{children}</div>;
};


export default KeyBoard;