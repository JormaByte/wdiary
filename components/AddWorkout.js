import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useContext, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import styles from '../styles/Styles';
import { WorkoutContext } from './Context';
import { UserContext } from './Context';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'


export default function AddWorkout() {

  const {username} = useContext(UserContext)
  const {setWorkout} = useContext(WorkoutContext)
  const [workoutType, setWorkoutType] = useState('')
  const [workoutTime, setWorkoutTime] = useState('')
  const [workoutDistance, setWorkoutDistance] = useState('')
  const [date, setDate] = useState()
  const workoutTypes = [
    {type: 'Running'},
    {type: 'Walking'},
    {type: 'Swimming'},
    {type: 'Cycling'}
  ]

  const AddWorkout= () => {

    const date = new Date()
    const newWorkout = {username, date, workoutType, workoutDistance, workoutTime}

    setWorkout((prev) => [...prev, newWorkout])

  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyles={styles.contentContainer}>
     {/*  <Text variant="headlineLarge">{header}</Text> */}
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => setDate(day)}/>

 
      <View style={styles.bar}> 
      <Text style={styles.date}> {date ? date.dateString : 'Date not selected'}</Text>
        <SelectDropdown
        
        data={workoutTypes. map(workout => workout.type)}
        onSelect={setWorkoutType}
        place
      />
      </View>


      <TextInput
        style={styles.textInput}
        placeholder='How long was your workout? (in minutes)'
        placeholderTextColor='pink'
        keyboardType='number-pad'
        onChangeText={setWorkoutTime}
        value={workoutTime}
      />

      <TextInput 
        style={styles.textInput}
        placeholder='What was the distance? (in km)'
        placeholderTextColor='pink'
        keyboardType='number-pad'
        onChangeText={setWorkoutDistance}
        value={workoutDistance}
        />

      {username !== '' && workoutTime !== '' && workoutType !== '' && workoutDistance !== '' ?(
      <Button title={'Submit your workout'} onPress={AddWorkout}
      />) : (<Text style={styles.errorlabel}>Please provide your name and all the details of your workout before submitting!</Text>)}
      
    </ScrollView>
    </SafeAreaView>
  );
}

