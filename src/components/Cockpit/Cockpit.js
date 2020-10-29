import React from 'react';

const cockpit = ({toggle, login}) => {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    return (
        <div>
            <h1>Hi, I'm a react app</h1>
            <button 
            style={style}
            onClick={toggle}
            >Toggle Persons</button>
            <button onClick={login}>Log in</button>
        </div>
    );
};

export default cockpit;