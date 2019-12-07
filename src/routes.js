import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Feed from './pages/Feed';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    })
);

export default Routes;