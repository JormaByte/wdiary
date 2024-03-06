import { Text, View, Alert, Button } from 'react-native';
import Styles from '../styles/Styles'
import { RadioButton, TextInput } from 'react-native-paper'
import { useContext, useState } from 'react';
import { UserContext } from './Context';

export default function Settings() {

  const [radioval, setRadioval] = useState('Km')
  const [name, setName] = useState('')
  const {username, setUsername} = useContext(UserContext)
  
  let header = username === '' ? 'Set User' : 'Welcome' + username

  const changeUser = () => {
    setUsername(name)
    let info = name === '' ? 'You must choose a username!' : 'User changed to ' + name
    Alert.alert(info)
    setName('')

  }

  return (
    <View>
      <Text variant="headlineLarge" style={Styles.header}>{header}</Text>
      <TextInput  label={'Name'} value={name} onChangeText={setName}/>
      <Button title='change User' mode="contained" onPress={changeUser}>Change user</Button>
      
      <Text>Choose your unit of measurement:</Text>
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
    </View>
  );
}
