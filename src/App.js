import React, {useReducer} from 'react';

import Form from './components/Form'
import DisplayItem from './components/DisplayItem'
import DisplayItemList from './components/DisplayItemList'

function App() {
  const initialState = {
    property: "",
    value: "",
    item: {},
    itemCount: 0
  }

  function reducer(state, {field, value}) {
    return {
      ...state,
      [field]: value
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  return (
    <div>
      <h1>Comparison Tool</h1>
      <Form state={state} dispatch={dispatch} />
      {state.itemCount >= 2 ? <><DisplayItemList item={state.item1}/><DisplayItemList item={state.item2}/></> : <DisplayItem item={state.item} dispatch={dispatch}/>}
    </div>
  );
}

export default App;
