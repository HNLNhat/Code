import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState} from 'react'

const Morning = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');
  const [number6, setNumber6] = useState('');
  
const [kp1, setkp1] = useState('');
const [kp2, setkp2] = useState('');
const [kp3, setkp3] = useState('');
const [kp4, setkp4] = useState('');
const [kp5, setkp5] = useState('');
const [kp6, setkp6] = useState('');
  const xoSo = () => {
    //Tao ngau nhien
const random1 = Math.floor(Math.random() * 100);
setkp1(random1)
const random2 = Math.floor(Math.random() * 100);
setkp2(random2);
const random3 = Math.floor(Math.random() * 100);
setkp3(random3);
const random4 = Math.floor(Math.random() * 100);
setkp4(random4);
const random5 = Math.floor(Math.random() * 100);
setkp5(random5);
const random6 = Math.floor(Math.random() * 100);
setkp6(random6);

//Kiem tra so 
if( random1 ==  number1 || random2 == number2 || random3 == number3 || random4 == number4 || random5 == number5 || random6 == number6){
  Alert.alert('Chúc mừng bạn đã trúng giải');

}else{
  Alert.alert('Chúc bạn may mắn lần sau');
}
  
  }

  return (
    <View>
      <Text>Chương trình xổ số</Text>
      <TextInput
      placeholder="Nhập số 1:"
      value={number1}
      onChangeText={text => setNumber1(text)}
      />
       <TextInput
      placeholder="Nhập số 2:"
      value={number2}
      onChangeText={text => setNumber2(text)}
      />
       <TextInput
      placeholder="Nhập số 3:"
      value={number3}
      onChangeText={text => setNumber3(text)}
      />
       <TextInput
      placeholder="Nhập số 4:"
      value={number4}
      onChangeText={text => setNumber4(text)}
      />
       <TextInput
      placeholder="Nhập số 5:"
      value={number5}
      onChangeText={text => setNumber5(text)}
      />
     <TextInput
      placeholder="Nhập số 6:"
      value={number6}
      onChangeText={text => setNumber6(text)}
      />
  
      <Text>Kết quả: {kp1}</Text>
      <Text>{kp2}</Text>
      <Text>{kp3}</Text>
      <Text>{kp4}</Text>
      <Text>{kp5}</Text>
      <Text>{kp6}</Text>
      <Button
      title="Xổ số"
      onPress={xoSo}/>
    </View>
  )
}

export default Morning