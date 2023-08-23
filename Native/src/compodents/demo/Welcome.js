import { View, Text, Button } from 'react-native'
import React from 'react'


const Welcome = (props) => {
    const {ten, setName} = props;
  return (
    <View>
      <Text>Welcome:{ten}</Text>
      <Button
      title='Đổi tên'
      onPress={changeName}
      />
    </View>
  )
}

export default Welcome