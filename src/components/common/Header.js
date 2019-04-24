// Import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../../styles'

// Make a component
const Header = (props) => {
  return (
    <View style={Styles.viewStyle}>
      <Text style={Styles.textStyle}>{props.headerText}</Text>
    </View>
  )
}

// Make the component available to other parts of the app
export { Header }
