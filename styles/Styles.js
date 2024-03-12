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
        fontSize: 16,
        fontWeight: "bold",
        margin: 10,
        padding: 12,
        color: 'white',
        borderBottomWidth: 3,
        borderBottomColor: 'pink',
        width: '40 %'
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
        alignItems: 'center',
        justifyContent: 'center', 
    },
    stats:{
        fontSize: 18,
        borderRadius: 8,
        margin: 5,
        padding: 10,
        width: '100 %',
        backgroundColor: 'turquoise',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderBottomColor: 'pink',
        borderTopColor: 'pink',
    },
    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        color: 'pink'
    },
    bar: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    filterBar: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 3,
        borderRadius: 6,
        backgroundColor: 'mediumaquamarine',
        borderBottomColor: 'grey',
   
    },
    option: {
        margin: 5,
        padding: 4,
        borderBottomWidth: 3,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen',
        borderBottomColor: 'pink',
        borderLeftWidth: 3,
        borderLeftColor: 'pink',
        color: 'red'
    },
    buttonStyle: {
        fontWeight: 'bold',
        color: 'pink'
    }
});
  