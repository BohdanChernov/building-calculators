import React from 'react';

function Footer() {
    return (
        <div style={footerStyle}>
            © 2020 Building calulators. All rights reserved.
        </div>
    );
}

export default Footer;

const footerStyle = {
    backgroundColor: '#8cb4af',
    height: '50px',
    width: '100%',
    color: '#ffffff',
    textAlign: 'center',
}
