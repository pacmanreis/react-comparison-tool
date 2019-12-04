import React from 'react';

function Form(props) {
    const {setName, property, value, item, itemCount} = props.state
    const {dispatch} = props

    function handleOnChange(event) {
        const {name, value} = event.target
        dispatch({field: name, value: value})
    }

    function handleAddToItem() {
        const addProperty = item
        setName ? addProperty["name"] = value : addProperty[`${property}`] = value
        dispatch({field: "item", value: addProperty})
        dispatch({field: "property", value: ""})
        dispatch({field: "value", value: ""})
        dispatch({field: "setName", value: false})
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
        dispatch({field: "setName", value: true})
    }

    return (
        <div>
            <input
                placeholder={setName ? `${"item" + (itemCount + 1)}` : "Property"}
                name="property"
                value={property}
                disabled={setName}
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
            <p><button onClick={handleAddItemToState} disabled={Object.keys(item).length < 2}>Save Object</button></p>
        </div>
    );
}

export default Form;