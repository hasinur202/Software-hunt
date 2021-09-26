import React, { useEffect, useState } from 'react';
import Software from '../Software/Software';
import Overview from '../Overview/Overview';
import './Shop.css'

const Shop = () => {
    // state declarations
    const [softwares, setSoftware] = useState([]);
    const [softwareList, setSoftwareList] = useState([]);

    // fetch data from our db in public directory 
    useEffect(() => {
        fetch('./softwareDB.JSON')
            .then(res => res.json())
            .then(data => setSoftware(data));
    }, []);

    // purpose of pass data to cart component
    const handleAddToCartist = software => {
        const newSoftwareList = [...softwareList, software];
        setSoftwareList(newSoftwareList);
    };

    return (
        <div className="container">
            {/* Software component */}
            <div className="item-container">
                {
                    softwares.map(soft => <Software
                        key={soft.id}
                        soft={soft}
                        handleAddToCartist={handleAddToCartist}
                    ></Software>)
                }
            </div>
            {/* Cart component */}
            <div className="overview">
                <Overview softwareList={softwareList}></Overview>
            </div>
        </div>
    );
};

export default Shop;