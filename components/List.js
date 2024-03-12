import React, { useState, useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import { UnitContext, WorkoutContext } from './Context';
import Styles from '../styles/Styles';

export default function List() {
  const { workout } = useContext(WorkoutContext);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const filteredWorkout = selectedWorkout
    ? workout.filter(item => item.workoutType === selectedWorkout)
    : workout;



  return (
    <View style={Styles.container}>
      <View style={Styles.filterBar}>
        <TouchableOpacity style={Styles.option} onPress={() => setSelectedWorkout(null)}>
          <Text style={Styles.buttonStyle} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.option} onPress={() => setSelectedWorkout('Running')}>
          <Text style={Styles.buttonStyle} >Running</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.option} onPress={() => setSelectedWorkout('Walking')}>
          <Text style={Styles.buttonStyle} >Walking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.option} onPress={() => setSelectedWorkout('Swimming')}>
          <Text style={Styles.buttonStyle} >Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.option} onPress={() => setSelectedWorkout('Cycling')}>
          <Text style={Styles.buttonStyle} >Cycling</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredWorkout}
        renderItem={({ item }) => <Item workout={item} />}
        keyExtractor={(item) => item.date.toString()}
      />
    </View>
  );
}

function Item({ workout }) {
  let d =
    workout.date.getDate() +
    '.' +
    (workout.date.getMonth() + 1) +
    '.' +
    workout.date.getFullYear();

  return (
    <View style={Styles.container}>
      <Text style={Styles.stats}>
        {' '}
        <Icon source="fruit-watermelon" size={20} /> {workout.id} {d}{' '}
        <Icon source="fruit-watermelon" size={20} />
        {` Workout by ${workout.username}:  ${'\n'}  (${workout.workoutType} for ${workout.workoutDistance} km) lasted for ${workout.workoutTime} min.`}
      </Text>
    </View>
  );
}
