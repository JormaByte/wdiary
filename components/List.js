import { View, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { WorkoutContext } from './Context';
import { useContext } from 'react';

import Styles from '../styles/Styles'


export default function List() {

  const {workout} = useContext(WorkoutContext)
  console.log(workout)

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
      <Text>{`Username: ${workout.username}, Type: ${workout.workoutType}, Time: ${workout.workoutTime}, Date: ${workout.date}`}</Text>
    </View>
  )
}