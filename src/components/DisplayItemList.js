import React from 'react';

function DisplayItemList(props) {
    const itemDisplay = Object.entries(props.item)
        .map(([key, value]) =>
            <p key={key}>
                {key}: {value}<button>-</button>
            </p>
        )

    return(
        <div>
            {itemDisplay}
        </div>
    );
}

export default DisplayItemList;