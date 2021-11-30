import React from 'react';
import './Progressbar.css'

const Progressbar = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 1000);
    return (
        <div>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        </div>
    );
};

export default Progressbar;