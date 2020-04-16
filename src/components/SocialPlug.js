import React from 'react';
import PropTypes from 'prop-types';

const SocialPlug = ({
    content1,
    content2,
    logoUrl,
    socialName,
    socialLink,
}) => {
    return (
        <header className="App-header">
            <div className='overlay'>
                <div className='content'>
                    <p className='trap'>
                        {content1} 
                    </p>
                    <p className='find'>
                        {content2}
                    </p>
                </div>
                <div className='imgWrap'>
                    <img className='socialLogo' src={logoUrl} />
                    <p>{socialName}</p>
                </div>
                <a
                    className="App-link"
                    href={socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <button></button> */}
                    <img className='jsButton' src="https://res.cloudinary.com/drbxih6it/image/upload/v1585770625/Discover_Our_Server_iad9rh.png" />
                </a>
            </div>
        </header>
    );
}

SocialPlug.propTypes = {
    content1: PropTypes.string,
    content2: PropTypes.string,
    logoUrl: PropTypes.string,
    socialName: PropTypes.string,
    socialLink: PropTypes.string,
};

SocialPlug.defaultProps = {
    content1: 'TEST',
    content2: '',
    logoUrl: '',
    socialName: '',
    socialLink: '',
};

export default SocialPlug;