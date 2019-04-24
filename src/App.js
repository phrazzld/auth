import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Header } from './components/common'

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header headerText="Authentication"/>
        <Text>Auth App</Text>
      </SafeAreaView>
    )
  }
}

export default App
