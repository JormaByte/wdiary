import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        padding: 30,
        backgroundColor: 'green'

    },
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
       
    },
    settings: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    settingsInput: {
        margin: 17,
        width: '85%',
        padding: 5

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'pink'
    },
    textInput:{
        margin: 6,
        padding: 14,
        width: '97 %',
        fontSize: 16,
        borderBottomWidth: 3,
        borderBottomColor: 'pink',
    },
    calendar: {
        backgroundColor: 'pink',
        marginBottom: 5
    },
    label:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
        color: 'pink',
        borderBottomWidth: 3,
        borderBottomColor: 'pink'
    },
    
    image:{
        marginTop: 5
    },
    dropDown: {
       
    },
    stats:{
        fontSize: 18,
        borderWidth: 5,
        borderRadius: 10,
        margin: 10,
        padding: 15,
        backgroundColor: 'pink',
        borderColor: 'turquoise'
    },
    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        color: 'pink'
    }
});
  