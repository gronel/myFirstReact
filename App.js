import { Navigation } from "react-native-navigation";
import { Provider } from 'redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent("myFirstReact.AuthScreen", () => AuthScreen, store,Provider );
Navigation.registerComponent("myFirstReact.SharePlaceScreen", () => SharePlaceScreen , store,Provider  );
Navigation.registerComponent("myFirstReact.FindPlaceScreen", () => FindPlaceScreen , store,Provider  );


//Start app
Navigation.startSingleScreenApp({
  screen :{
    screen: 'myFirstReact.AuthScreen',
    title: 'Login'
  }
})
