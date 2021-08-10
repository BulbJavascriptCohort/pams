import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Welcome to Personnel and Assets Management System(PAMS) Project.</p>
				<a
					className="App-link"
					href="https://www.notion.so/martmal/PAMS-92d047e2ed064416bf7c151a6ea5deff"
					target="_blank"
					rel="noopener noreferrer"
				>
					Open project info
				</a>
			</header>
		</div>
	);
}

export default App;
