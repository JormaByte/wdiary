import { Text, View } from 'react-native';
import Styles from './styles/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import List from './components/List';
import AddWorkout from './components/AddWorkout';
import Settings from './components/Settings';
import { UserContext, WorkoutContext } from './components/Context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { useState } from 'react';

const Tab = createBottomTabNavigator()


export default function App() {

  
  const [username, setUsername] = useState('')
  const [workout, setWorkout] = useState([])

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <WorkoutContext.Provider value={{ workout, setWorkout}}>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </WorkoutContext.Provider>
    </UserContext.Provider>
  );
}

function Navigation() {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='List' component={List}/>
      <Tab.Screen name='Add Workout' component={AddWorkout}/>
      <Tab.Screen name='Settings' component={Settings}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}