import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gray', 'magenta', 'cyan', 'pink', 'brown', 'maroon', 'purple', 'navy', 'silver', 'gold', 'beige', 'olive', 'teal', 'lime', 'crimson'];
  return (
    <ColorPicker colors={colors} />
  );
}

export default App;
