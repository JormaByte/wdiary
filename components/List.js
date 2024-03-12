import { View, FlatList } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import { UnitContext, WorkoutContext } from './Context';
import { useContext } from 'react';
import Styles from '../styles/Styles'


export default function List() {

  const {workout} = useContext(WorkoutContext)
  /* const {unit} = useContext(UnitContext) */

  return (
    <View style={Styles.container}>
      <FlatList
        data={workout}
        renderItem={({item}) => <Item workout={item} />} 
        keyExtractor={(item) => item.date.toString()}/>
    </View>
  );
}

function Item({workout}) {
  let d = workout.date.getDate() + '.' + (workout.date.getMonth()+1) + '.' + workout.date.getFullYear()

  return(
    <View style={Styles.container}>
      <Text style={Styles.stats}> <Icon source='fruit-watermelon' size={20}/> {d} <Icon source='fruit-watermelon' size={20}/>{` Workout by ${workout.username}:  ${'\n'}  (${workout.workoutType} for ${workout.workoutDistance} km) lasted for ${workout.workoutTime} min.`}</Text>
    </View>
  )
}