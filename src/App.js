import './App.css';

import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './redux/actions';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.web3Connect())
  }, [])

  return (
    <div className="App">
      <h1>Demo Web3</h1>
    </div>
  );
}

export default App;
