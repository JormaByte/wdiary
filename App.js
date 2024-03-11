import { Text, View } from 'react-native';
import Styles from './styles/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import List from './components/List';
import AddWorkout from './components/AddWorkout';
import Settings from './components/Settings';
import { UserContext, WorkoutContext, UnitContext } from './components/Context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, Icon } from 'react-native-paper';
import { useState } from 'react';



const Tab = createBottomTabNavigator()


export default function App() {

  
  const [username, setUsername] = useState('')
  const [workout, setWorkout] = useState([])
  const [unit, setUnit] = useState('')

  return (
    <UserContext.Provider value={{username, setUsername}}>
      <WorkoutContext.Provider value={{ workout, setWorkout}}>
        <UnitContext.Provider value={{ unit, setUnit}}>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
        </UnitContext.Provider>
      </WorkoutContext.Provider>
    </UserContext.Provider>
  );
}

function Navigation() {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Settings' options={{tabBarIcon: () => <Icon source='account-circle' size={24} />}} component={Settings}/>
      <Tab.Screen name='Add Workout' options={{tabBarIcon: () => <Icon source='dumbbell' size={24} />}} component={AddWorkout}/>
      <Tab.Screen name='List' options={{tabBarIcon: () => <Icon source='format-list-bulleted' size={24} />}} component={List}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}