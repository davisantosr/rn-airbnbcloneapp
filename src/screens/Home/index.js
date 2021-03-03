import React from 'react'
import {
  View, 
  Text, 
  ImageBackground, 
  Pressable,
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

import styles from './styles'

const HomeScreen = () => {
  return (
    <View>
      {/* SearchBar */}
      <Pressable
            style={styles.searchButton}
            onPress={() => {console.warn('search')}}
          >
            <Fontisto name={'search'} size={20} color={'#f15454'} />
            <Text style={styles.buttonText}>
              Where are you going?
            </Text>
          </Pressable>

      <ImageBackground 
        source={require('../../../assets/images/wallpaper.jpg')} 
        style={styles.image}>

          {/*Title*/}
          <Text style={styles.title}>
            Go Near
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => {console.warn('nearby')}}
          >
            <Text style={styles.buttonText}>
              Explore Nearby Stays
            </Text>
          </Pressable>

        </ImageBackground>



      {/* Button */}

    </View>
  )
}

export default HomeScreen
