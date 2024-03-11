import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contentContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        padding: 30

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
        width: '97 %',
        fontSize: 16,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: 'turquoise',
        backgroundColor: 'pink'
    

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
        borderWidth: 5,
        borderRadius: 10,
        margin: 10,
        padding: 15,
        backgroundColor: 'pink',
        borderColor: 'turquoise'
    },
    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});
  