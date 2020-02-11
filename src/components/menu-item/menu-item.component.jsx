import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({
    size,
    title,
    imageUrl,
}) => (
    <div
        className={`${size} menu-item`}
    >
        <div
            className="background-image"
            style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
        />
        <div className="content">
            <div className="title">
                {title.toUpperCase()}
            </div>
            <span className="subtitle">
                SHOP NOW
            </span>
        </div>
    </div>
);

export default MenuItem;