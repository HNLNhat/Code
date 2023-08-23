import { View, Text, Image, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

//custom component
//View: div
//Text: p

const Hello = () => {
  console.log('>>>>>>>Hello');
  const [name, setName] = useState('Nhật Nam');
  const [hoTen, setHoten] = useState('');

  const changeName = () => {
    setName('Nhật Nam2');

  }
  return (
    <View>
      <Text>Xin chào: {name}</Text>
      <Text>Hello</Text>
     {/*} <Image
      source={{uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fduongphi.com%2Fwp-content%2Fuploads%2F2020%2F10%2F2021_12_04_17_09_IMG_7352.png&imgrefurl=https%3A%2F%2Fduongphi.com%2Fiphone-12-64gb-quoc-te-cu-99-vinh-long-can-tho%2F&tbnid=dxvmm8wfxJGYDM&vet=12ahUKEwj84srU7r_8AhX0K7cAHfVsBS0QMygEegUIARDLAQ..i&docid=sz3OpKdECQvS1M&w=940&h=1112&q=iphone&ved=2ahUKEwj84srU7r_8AhX0K7cAHfVsBS0QMygEegUIARDLAQ'}}
      style={{width: 200, hight: 300}}
  />*/}
      <Image
      source={require('../../media/images/eye.png')}
      style={{width: 200, hight: 300}
    }
    />
    <Button
    title="Click me"
    onPress={changeName}

    />
    <TextInput
    placeholder="Enter your name"
    value={hoTen}
    onChangeText={text => setHoten(text)}
    />


    </View>
  )
}

export default Hello