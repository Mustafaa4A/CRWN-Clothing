import categories from "./categories";
import Directory from "./components/directory/directory.component";

function App() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default App;
