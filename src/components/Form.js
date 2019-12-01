import React from 'react';

function Form(props) {
    const {property, value, item, itemList} = props.state

    function handleOnChange(event) {
        const {name, value} = event.target
        props.dispatch({field: name, value: value})
    }

    function handleAddToItem() {
        const addProperty = item
        addProperty[`${property}`] = value
        props.dispatch({field: item, value: addProperty})
    }

    function handleAddToItemList() {
        const addObject = itemList
        addObject.push(item)
        props.dispatch({field: itemList, value: addObject})
    }

    return (
        <div>
            <input
                placeholder="Property"
                name="property"
                value={property}
                onChange={handleOnChange}
            />
            <input
                placeholder="Value"
                name="value"
                value={value}
                onChange={handleOnChange}
            />
            <button onClick={handleAddToItem}>Add to List</button>
            <p><button onClick={handleAddToItemList}>Save Object</button></p>
        </div>
    );
}

export default Form;