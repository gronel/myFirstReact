import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform} from 'react-native';


const startTab = () => {

    Promise.all([
        Icon.getImageSource(Platform.OS==='android' ? "md-map":"ios-map", 30,"red"),
        Icon.getImageSource(Platform.OS==='android' ? "md-share-alt" :"ios-share-alt", 30,"green"),
        Icon.getImageSource(Platform.OS==='android' ? "md-menu":'ios-menu',30)
    ]).then(source => {
        Navigation.startTabBasedApp({

            tabs: [
                {
                    screen:"myFirstReact.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: source[0],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:source[2],
                                title:"Menu",
                                id:"sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen:"myFirstReact.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: source[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon:source[2],
                                title:"Menu",
                                id:"sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            appStyle: {
                // tabBarBackgroundColor: '#0f2362',
                // tabBarButtonColor: '#ffffff',
                // tabBarSelectedButtonColor: '#63d7cc',
                // tabBarTranslucent: false,
                forceTitlesDisplay: true,
                tabFontFamily: 'Avenir-Medium'  // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
              },
            drawer: { // optional, add this if you want a side menu drawer in your app
                left: { // optional, define if you want a drawer from the left
                  screen: 'myFirstReact.SideDrawerScreen', // unique ID registered with Navigation.registerScreen
                  passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
                  fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
                },
                type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
                animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                                    // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
                disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
              }
                
        });
    })

   

  
}


export default startTab;

