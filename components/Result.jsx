import { View, Text } from 'react-native'
import React from 'react'

const Result = ({ route }) => {
  const { res } = route.params; // Access prediction result from navigation params
  return (
    <View style={{display:'flex', alignItems:'center', justifyContent:'center' ,}}>
      <Text>Result: {res}</Text>
    </View>
  )
}

export default Result