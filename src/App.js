import './App.css';
import { ThreeScene } from './Scene/ThreeScene';

function App() {
	const nodes = [
		{ position: { x: 0, y: 0, z: 0 }, color: 0xff0000, radius: 1 },
		{ position: { x: 2, y: 0, z: 0 }, color: 0x00ff00, radius: 0.5 },
	];

	return (
		<>
			<h1>Interactive 3D Scene</h1>
			<ThreeScene nodes={nodes} />
		</>
	);
}

export default App;
