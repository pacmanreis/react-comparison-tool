import React, {useReducer} from 'react';

import Form from './components/Form'
import DisplayItem from './components/DisplayItem'
import DisplayItemList from './components/DisplayItemList'

function App() {
  const initialState = {
    setName: true,
    property: "",
    value: "",
    item: {},
    itemCount: 0,
    addToList: false
  }

  function reducer(state, {field, value}) {
    return {
      ...state,
      [field]: value
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Comparison Tool</h1>
      <Form state={state} dispatch={dispatch} />
      {state.itemCount >= 2 ? <DisplayItemList state={state}/> : <DisplayItem item={state.item} dispatch={dispatch}/>}
    </div>
  );
}

export default App;
