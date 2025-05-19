import React from 'react';

const Footer = () => {
    return (
        <footer className="footer xxs:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Md Rakib Hasan</p>
            </aside>
        </footer>
    );
};

export default Footer;