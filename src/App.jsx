// import './App.css';
import { Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <Routes key={'route'}>
      {routes.map((val, key) => {
        return <Route exact path={val.path} element={val.element} key={key} />;
      })}
    </Routes>
  );
}

export default App;
