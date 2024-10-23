import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      paddingTop: 50,
      
    },
    header:{
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,
        marginLeft: 10,
    },
    Logo: {
      width: '30%',
      height: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
      },
    product: {
      flexDirection: "row",
      marginBottom: 25,
      marginLeft: 10,
      marginRight: 10
    },
    detail:{
        width: '70%',
    },
    discount:{
        color:'green',
    },
    buttons:{
        
        flexDirection: "row",  
        justifyContent: "space-between"
    },
  });
  export default styles;