import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../styles/Styles';
import { WorkoutContext } from './Context';
import { UserContext } from './Context';



export default function AddWorkout() {

  const {username} = useContext(UserContext)
  const {setWorkout} = useContext(WorkoutContext)
  const [workoutType, setWorkoutType] = useState('')
  const [workoutTime, setWorkoutTime] = useState('')
  const [date, setDate] = useState()

  
  const AddWorkout= () => {

    const date = new Date()
    const newWorkout = {username, date, workoutType, workoutTime}

    setWorkout((prev) => [...prev, newWorkout])
  }

  return (
    <View style={styles.container}>
      <Text>Select date:</Text>
      <Calendar
        onDayPress={(day) => setDate(day)}/>
   
      <TextInput
        style={styles.textInput}
        placeholder='How long was your workout? (in minutes)'
        keyboardType='number-pad'
        onChangeText={setWorkoutTime}
        value={workoutTime}
      />

      <TextInput
        style={styles.textInput}
        placeholder='What did you do?'
        onChangeText={setWorkoutType}
        value={workoutType}
        />  

      <TextInput 
      style={styles.textInput}
      placeholder='What was the distance? (in '/>

      <Text style={styles.stats}>Your workout stats: {workoutTime} | {workoutType} | {date ? date.dateString : 'Select date'}</Text>
      <Button title={'Submit your workout'} onPress={AddWorkout} //onPress={setWorkout}
      />    
    </View>
  );
}

