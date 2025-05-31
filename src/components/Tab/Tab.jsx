import React from 'react';

const Tab = () => {
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
            <label className="tab">
                <input type="radio" name="my_tabs_4" defaultChecked  />
                Read Books
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">

            </div>

            <label className="tab">
                <input type="radio" name="my_tabs_4" />
                Wishlist Books
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

            </div>
            
        </div>
    );
};

export default Tab;