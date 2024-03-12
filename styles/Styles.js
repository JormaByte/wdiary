import { StyleSheet } from "react-native";

export default StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        padding: 30,
        backgroundColor: 'mediumseagreen'

    },
    container: {
        flex: 1,
        backgroundColor: 'mediumseagreen',
        alignItems: 'center',
       
    },
    settings: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'mediumseagreen'
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
        borderRadius: 10,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderBottomColor: 'pink',
        borderLeftColor: 'pink',
        color: 'white',
        backgroundColor: 'mediumaquamarine'
    },
    calendar: {
        backgroundColor: 'pink',
        marginBottom: 5
    },
    date: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
        color: 'white',
        borderBottomWidth: 3,
        borderBottomColor: 'pink'
    },
    label:{
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
        color: 'pink',
        borderBottomWidth: 3,
        borderBottomColor: 'pink'
    },
    errorlabel: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
        color: 'orange'
    },
    
    image:{
        marginTop: 5
    },
    dropDown: {
       
    },
    stats:{
        fontSize: 18,
        borderRadius: 10,
        margin: 10,
        padding: 15,
        backgroundColor: 'turquoise',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderBottomColor: 'pink',
        borderLeftColor: 'pink',
    },
    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        color: 'pink'
    }
});
  