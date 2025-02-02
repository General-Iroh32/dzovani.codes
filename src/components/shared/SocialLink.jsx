import React from 'react';

export const SocialLink = ({ platform, url, iconPath }) => (
  <div className="social">
    <div className="showHover">{platform}</div>
    <a href={url} className="socialContent" style={{ filter: 'brightness(100%)' }}>
      <img
        src={process.env.PUBLIC_URL + iconPath}
        alt={`${platform.toLowerCase()} logo`}
        height="24px"
        width="25px"
      />
    </a>
  </div>
); 