
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './store/store';
import Router from "./Components/pages/Router";
import 'animate.css';

function App() {



    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >

                <Router />

          </PersistGate>
      </Provider>
  );
}

export default App;
