import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { UnitContext, WorkoutContext } from './Context';
import { useContext } from 'react';
import Styles from '../styles/Styles'


export default function List() {

  const {workout} = useContext(WorkoutContext)
  /* const {unit} = useContext(UnitContext) */

  return (
    <View>
      <FlatList
        data={workout}
        renderItem={({item}) => <Item workout={item} />} 
        keyExtractor={(item) => item.date.toString()}/>
    </View>
  );
}

function Item({workout}) {

  return(
    <View>
      <Text style={Styles.stats}>{`${workout.date}: ${workout.username}'s workout (${workout.workoutType} for ${workout.workoutDistance} km) lasted for ${workout.workoutTime} minutes.`}</Text>
    </View>
  )
}