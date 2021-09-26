import React from 'react';
import './Software.css'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Software = (props) => {
    // import neccessary value via destructuring
    const { name, tech, image, support_time, ratting, price, count, last_updated } = props.soft;
    const addIcon = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className="software-container">
            <img src={image} alt="" />
            <div className="main-content">
                <div className="btn">
                    {/* // event handler with parameter  */}
                    <button onClick={() => { props.handleAddToCartist(props.soft) }}>
                        {addIcon} Add to Cart
                    </button>
                </div>

                <div className="descrip-content">
                    <h3>{name}</h3>
                    <div className="description">
                        <p className="price">Price: ${price}</p>
                        <p>Technologies: {tech}</p>
                        <p>Support Time: {support_time}</p>
                    </div>
                    <div>
                        <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={ratting}
                            readonly
                        ></Rating> ({ratting}/5) - Count: {count}
                    </div>
                    <div className="description">
                        <p>Last Updated: {last_updated}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;