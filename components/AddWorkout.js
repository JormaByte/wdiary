import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown';
import styles from '../styles/Styles';
import { WorkoutContext } from './Context';
import { UserContext } from './Context';

const workoutTypes = [
  {type: 'Running'},
  {type: 'Walking'},
  {type: 'Swimming'},
  {type: 'Tennis'},
  {type: 'Cycling'}
]


export default function AddWorkout() {

  const {username} = useContext(UserContext)
  const {setWorkout} = useContext(WorkoutContext)
  const [workoutType, setWorkoutType] = useState([0])
  const [workoutTime, setWorkoutTime] = useState(0)
  const [date, setDate] = useState()
  //const [workout, setWorkout] = useState=([])
  
  const AddWorkout= () => {

    const date = new Date()

    setWorkout( prev => [...prev, {username, date, workoutType, workoutTime}])
  }

  return (
    <View style={styles.container}>


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

      
      <Button title={'Submit your workout'} onPress={AddWorkout} //onPress={setWorkout}
      />
       
    </View>
  );
}

