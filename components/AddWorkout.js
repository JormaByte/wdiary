import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../styles/Styles';

const workoutTypes = [
  {type: 'Running'},
  {type: 'Walking'},
  {type: 'Swimming'},
  {type: 'Tennis'},
  {type: 'Cycling'}
]


export default function AddWorkout() {

  const [workoutType, setWorkoutType] = useState([0])
  const [workoutTime, setWorkoutTime] = useState(0)
  const [date, setDate] = useState()
  //const [workout, setWorkout] = useState=([])
  
  

  return (
    <View style={styles.container}>
      <Text>Welcome to Jormas workout diary!</Text>

      <Calendar
        onDayPress={setDate}/>
   
      

      <TextInput
        style={styles.textInput}
        placeholder='How long was your workout? (in minutes)'
        keyboardType='number-pad'
        onChangeText={setWorkoutTime}
        value={workoutTime}
      />

        <Text> What did you do?</Text>
       <SelectDropdown 
       style={styles.dropDown}
        data={workoutTypes. map(workout => workout.type)}
        onSelect={setWorkoutType}
      />


      <Text style={styles.stats}>Your workout stats: {workoutTime} | {workoutType} | {date ? date.dateString : 'Select date'}</Text>

      
      <Button title={'Submit your workout'} onPress={console.log("works")} //onPress={setWorkout}
      />
       

      <Text>Your previous workouts:</Text>
      
       
      


      <StatusBar style="auto" />
    </View>
  );
}

