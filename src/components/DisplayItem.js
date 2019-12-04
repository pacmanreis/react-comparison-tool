import React from 'react';

function DisplayItem(props) {
    const {item, dispatch} = props

    function handleRemoveProperty(key) {
        let itemRemove = {...item};
        delete itemRemove[key]
        Object.keys(item).length === 1 && dispatch({field: "setName", value: true})
        dispatch({field: "item", value: itemRemove})
    }

    const itemDisplay = Object.entries(item)
        .map(([key, value]) =>
            <p key={key}>
                {key}: {value}<button onClick={() => handleRemoveProperty(key)}>-</button>
            </p>
        )

    return(
        <div>
            {itemDisplay}
        </div>
    );
}

export default DisplayItem;