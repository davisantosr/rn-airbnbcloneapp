import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    fontSize: 80, 
    fontWeight: 'bold', 
    color: 'white',
    width: '70%',
    marginLeft: 24
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 20,
    marginLeft: 25,
    marginTop: 15,
    justifyContent: 'center', 
    alignItems: 'center'
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    top: 20, 
    zIndex: 100,

  },
  searchButtonText: {

  }

})

export default styles