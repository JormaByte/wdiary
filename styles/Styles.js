import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        border: 3
    },
    settings: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsInput: {
        margin: 17,
        width: '85%',
        padding: 5

    },

    textInput:{
        margin: 6,
        padding: 14,
        width: '85 %',
        fontSize: 16,
        borderWidth: 3,
        borderRadius: 90,
        borderColor: 'pink'
    

    },
    label:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 10
    },
    
    image:{
        marginTop: 5
    },
    dropDown: {
       
    },
    stats:{
        fontSize: 18,
        borderWidth: 2,
        margin: 10,
        padding: 10,
        backgroundColor: 'bisque'
    },
    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});
  