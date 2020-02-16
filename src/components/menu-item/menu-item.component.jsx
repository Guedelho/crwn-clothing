import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({
    size,
    title,
    match,
    linkUrl,
    history,
    imageUrl,
}) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);