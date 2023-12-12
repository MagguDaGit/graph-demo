import './App.css';
import { DefaultCanvas } from './Scene/DefaultCanvas';
// resource: https://www.npmjs.com/package/@react-three/fiber

function App() {
	return (
		<>
			<h1>Interactive 3D Scene</h1>
			<DefaultCanvas />
		</>
	);
}

export default App;
