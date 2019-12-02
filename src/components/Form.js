import React from 'react';

function Form(props) {
    const {property, value, item, itemCount} = props.state
    const {dispatch} = props

    function handleOnChange(event) {
        const {name, value} = event.target
        dispatch({field: name, value: value})
    }

    function handleAddToItem() {
        const addProperty = item
        addProperty[`${property}`] = value
        dispatch({field: "item", value: addProperty})
        dispatch({field: "property", value: ""})
        dispatch({field: "value", value: ""})
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {handleAddToItem()} 
    }

    function handleAddItemToState() {
        dispatch({field: `${"item" + (itemCount + 1)}`, value: item})           
        dispatch({field: "itemCount", value: itemCount + 1})
        dispatch({field: "property", value: ""})
        dispatch({field: "value", value: ""})
        dispatch({field: "item", value: {}})
    }

    return (
        <div>
            <input
                placeholder="Property"
                name="property"
                value={property}
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
            />
            <input
                placeholder="Value"
                name="value"
                value={value}
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleAddToItem}>Add to List</button>
            <p><button onClick={handleAddItemToState}>Save Object</button></p>
        </div>
    );
}

export default Form;