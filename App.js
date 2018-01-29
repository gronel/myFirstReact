import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent("myFirstReact.AuthScreen", () => AuthScreen, store,Provider );
Navigation.registerComponent("myFirstReact.SharePlaceScreen", () => SharePlaceScreen , store,Provider  );
Navigation.registerComponent("myFirstReact.FindPlaceScreen", () => FindPlaceScreen , store,Provider  );

Navigation.registerComponent("myFirstReact.PlaceDetailScreen", () => PlaceDetailScreen , store,Provider  );

Navigation.registerComponent("myFirstReact.SideDrawerScreen", () => SideDrawerScreen  );
//Start app
Navigation.startSingleScreenApp({
  screen :{
    screen: 'myFirstReact.AuthScreen',
    title: 'Login'
  }
})
