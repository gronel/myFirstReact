import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTab = () => {

    Promise.all([
        Icon.getImageSource("md-map", 30,"red"),
        Icon.getImageSource("md-search", 30,"green")
    ]).then(source => {
        Navigation.startTabBasedApp({

            tabs: [
                {
                    screen:"myFirstReact.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: source[0]
                },
                {
                    screen:"myFirstReact.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: source[1]
                }
            ]
        });
    })

   

  
}


export default startTab;

