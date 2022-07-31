import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10

  },
  button: {
    borderRadius: 5,
    backgroundColor: "#47D19B",
    borderColor: '#47D19B',
    color: 'white',
    borderWidth: 1,
    marginLeft: 2,
    padding: 15,
    fontWeight: 'bold'
  },
  renderitemstyle: {
    padding: 13,
    marginBottom: 15,
    marginLeft: '2%',
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    width: '96%',
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  rendercard: {
    display: "flex",
    flexDirection: "row",
    alignSelf: 'flex-start'
  },
  rendertextview: {
    alignSelf: 'flex-start',
    flex: 3
  },
  cardheading: {
    fontSize: 20,
    marginLeft: '1%',
    padding: 1,
    fontWeight: 'bold'
  },
  cardtext: {
    fontSize: 14,
    marginLeft: '2%',
    padding: 1,
    fontWeight: 'bold',
    color: '#C8C9CD'
  },

  buttonview: {
    alignSelf: 'flex-start',
    flex: 1
  },
  // chartcontainer:{
  //   flex: 1,
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   padding: 10,
  //   marginTop: 40,
  // },
  header: {
    fontSize: 28,
    // marginLeft:10,
    padding: 16,
    marginTop: 16,
    fontWeight: 'bold'
  },
  chartbutton: {
    borderRadius: 5,
    backgroundColor: "#47D19B",
    borderColor: '#47D19B',
    color: 'white',
    borderWidth: 1,
    marginLeft: '70%',
    marginRight: 20,
    textAlign: 'center',
    fontSize: 18,
    padding: 14,
    marginTop: 16,
    fontWeight: 'bold'
  },
 input:{
  color: 'black',
  marginLeft: "20%",
  marginRight: "20%",
  padding: 15,
  fontSize:28,
  fontWeight: 'bold'
 },
 cardbutton:{
  borderRadius: 5,
  backgroundColor: "#47D19B",
  borderColor: '#47D19B',
  color: 'white',
  borderWidth: 1,
  marginLeft: '5%',
  marginRight: 20,
  textAlign: 'center',
  fontSize: 18,
  padding: 14,
  marginTop: 16,
  fontWeight: 'bold'
 }

});
export { styles }