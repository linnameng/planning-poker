import React from 'react';
import './CardList.css';

function CardList(props) {
    return (
        <div className="card-list">
            <div className="card-list-container uk-align-center">

                {props.listItems.map(function (listItem) {
                    return (
                    <div class="uk-card uk-card-primary uk-card-body uk-margin">
                        <div class="uk-card-badge uk-label">{listItem.priority}</div>
                        <h3 class="uk-card-title">{listItem.title}</h3>
                        <p>{listItem.description}</p>
                    </div>
                    );
                })}
                
            </div>
        </div>
    );
}

export default CardList;