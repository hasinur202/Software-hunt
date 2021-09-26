import React from 'react';
import './Overview.css';

const Overview = (props) => {
    const { softwareList } = props;
    let total = 0;
    let newList = [];
    // calculate total price
    for (const software of softwareList) {
        total = total + software.price;
        newList = [...newList, software.name];
    }
    return (
        <div className="overview-content">
            <h3>Software Added: {softwareList.length}</h3>
            <h2>Total Cost: <span className="total">${total}</span></h2>
            {
                newList.map(item => <div className="items" key={item.id}>{item}</div>)
            }
        </div>
    );
};

export default Overview;