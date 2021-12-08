import { Route, Routes } from 'react-router';
import './App.css';
import UserDetails from './UserDetails';
import UserList from './UserList';

function App() {
	return (
		<main>
			<section className='container'>
				<div className='title'>
					<h2>Users</h2>
					<div className='underline'></div>
				</div>
				<Routes>
					<Route path='/' element={<UserList />}></Route>
					<Route path='/details/:id' element={<UserDetails />}></Route>
				</Routes>
			</section>
		</main>
	);
}

export default App;
