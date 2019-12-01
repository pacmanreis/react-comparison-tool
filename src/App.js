import React, {useReducer} from 'react';

import Form from './components/Form'

function App() {
  const initialState = {
    property: "",
    value: "",
    item: {},
    itemList: []
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
      <p>Display Object Here</p>
    </div>
  );
}

export default App;
