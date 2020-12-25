import React from 'react';
import ReactDom from 'react-dom';

function digitalClock()
{
   setInterval(() => {
        const a = new Date().toLocaleTimeString();
        ReactDom.render(
            <>
            {a}
            </>,
            document.getElementById('clock')
        );
    }, 1000);
}

export default digitalClock;