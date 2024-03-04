import { Text, View } from 'react-native';
import Styles from './styles/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import List from './components/List';
import AddWorkout from './components/AddWorkout';
import Settings from './components/Settings';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='List' component={List}/>
        <Tab.Screen name='Add Workout' component={AddWorkout}/>
        <Tab.Screen name='Settings' component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
