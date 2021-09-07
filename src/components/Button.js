import React from 'react';
import { Link } from 'react-router-dom';

function Button({ link, text }) {
    return (
        <div>
            <Link to="/">
                <button className="button">
                    <a href={link}>
                        {text}
                    </a>
                </button>
            </Link>
        </div>
    );
}

export default Button;