import { useDispatch, useSelector } from 'react-redux';

import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

	const { counter } = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>count is {counter}</h1>
			<div className="card">
				<button onClick={() => dispatch(increment())}>
					Increment
				</button>
			</div>
			<div className="card">
				<button onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
			<div className="card">
				<button onClick={() => dispatch(incrementBy(2))}>
					Increment by 2
				</button>
			</div>
		</div>
	)
}

export default App
