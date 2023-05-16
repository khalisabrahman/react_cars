import  CarForm  from "./components/CarForm";
import  CarList  from "./components/CarList";
import  CarSearch  from "./components/CarSearch";
import  CarValue  from "./components/CarValue";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </Provider>
  );
}

export default App;
