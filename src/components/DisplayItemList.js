import React from 'react';

function DisplayItemList(props) {
    const {item1, item2} = props.state
    console.log(item1)
    console.log(item2) 

    const itemDisplay = (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>{item1.name}</th>
                    <th>{item2.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>firstname</td>
                    <td>{item1.firstname}</td>
                    <td>{item2.firstname}</td>
                </tr>
            </tbody>
        </table>
    )

    return(
        <div>
            {itemDisplay}
        </div>
    );
}

export default DisplayItemList;
