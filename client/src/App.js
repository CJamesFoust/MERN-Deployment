import './App.css';
import ListView from './views/ListView';
import NewView from './views/NewView';
import DetailView from './views/DetailView';
import UpdateView from './views/UpdateView';
import { Router, navigate } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <ListView path="/" />
        <NewView path="/pets/new" navigate={ navigate } />
        <DetailView path="/pets/:id" navigate={ navigate } />
        <UpdateView path="/pets/:id/edit" navigate={ navigate } />
      </Router>
    </div>
  );
}

export default App;
