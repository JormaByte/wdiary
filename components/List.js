import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { WorkoutContext } from './Context';
import { useContext } from 'react';
import Styles from '../styles/Styles'


export default function List() {

  const {workout} = useContext(WorkoutContext)

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
      <Text style={Styles.stats}>{`${workout.username}'s workout (${workout.workoutType}) lasted for ${workout.workoutTime} minutes & was done on ${workout.date}`}</Text>
    </View>
  )
}