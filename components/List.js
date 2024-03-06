import { View, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { WorkoutContext } from './Context';
import { useContext } from 'react';

import Styles from '../styles/Styles'


export default function List() {

  const {workouts} = useContext(WorkoutContext)

  return (
    <View>
      <FlatList
        data={workouts}
        renderItem={({item}) => <Item workout={item} />} />
    </View>
  );
}

function Item({workout}) {

  return(
    <View>
      <Text>{workout.workout}</Text>
    </View>
  )
}