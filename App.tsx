import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import AppInner from "./src/AppInner";
import { store } from "./src/model";

function App(){
  return(
    <Provider store={store}>
      <AppInner/>
    </Provider>
  )
}

export default App;