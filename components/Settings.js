import { Text, View, Alert, Button } from 'react-native';
import Styles from '../styles/Styles'
import { RadioButton, TextInput, Icon } from 'react-native-paper'
import { useContext, useState } from 'react';
import { UserContext, UnitContext } from './Context';


export default function Settings() {

  const [radioval, setRadioval] = useState('Km')
  const [name, setName] = useState('')
  const {username, setUsername} = useContext(UserContext)
  const {unit, setUnit} = useContext(UnitContext)


  const changeUser = () => {
    setUsername(name)
    let info = name === '' ? 'You must choose a username!' : 'User changed to ' + name
    Alert.alert(info)
    setName('')

  }

  const changeUnit = () => {

    setUnit(radioval)
    let info = `Unit selection is disabled at this time ${'\n'} - All distances will be listed in km.`
    /* let info = unit === '' ? 'You must choose a unit!' : 'Unit changed to ' + unit */
    Alert.alert(info)
    setUnit('')

  }

  return (
    <View style={Styles.settings}>
      <Icon source='fruit-watermelon' size={80} color='red'/>
      <Text style={Styles.title}>Welcome to the Watermelon Workout Diary!</Text>
      <TextInput style={Styles.settingsInput} label={'Name'} value={name} onChangeText={setName}/>
      <Button title='change User' onPress={changeUser}>Change user</Button>
      
      <Text style={Styles.label}>Choose your unit of measurement:</Text>
      <RadioButton.Group onValueChange={newValue => setRadioval(newValue)} value={radioval}>
        <View style={Styles.radioStyle}>
          <RadioButton value='Km' />
          <Text>Kilometers</Text>
        </View>
        <View style={Styles.radioStyle}>
          <RadioButton value='Mi' />
          <Text>Miles</Text>
        </View>
      </RadioButton.Group>
      <Button title='change unit' onPress={changeUnit}>Change Unit</Button>
    </View>
  );
}
