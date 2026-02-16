

import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './components/button';

export default function index(){
  
  return (
    <SafeAreaView style={{
      backgroundColor: "green",
      flex:0.9, 
      paddingHorizontal: 10
      }}>
      
      <Text style={{fontSize:50, color: "red", fontWeight: '900', textAlign: 'center'}}
      >Hello World! </Text>
      <Text>My Name is Heritage</Text>
      <Text>I love coding</Text>

      <Image style={{width:500, height:200, alignSelf:'center'}} source={require('../assets/images/Capture2.png')}   />

      <TextInput placeholderTextColor={'black'} 
      placeholder='Enter email'
      style={{backgroundColor:'white', height:50, marginTop:20, borderRadius:20,
        paddingHorizontal:20
      }}/>

      <Pressable >
        <Text>Click me!</Text>
      </Pressable>

      <TouchableOpacity onPress={() =>{
        //Alert.alert('Press', "I was clicked!")
        console.log("I was clicked")
      }} style={{backgroundColor:"orange", height:30,
       borderRadius:8, justifyContent:"center"}}>

        <Text style={{alignSelf:"center", color:"white", fontSize:15}}>Enter</Text>
      </TouchableOpacity>

        <View style={{gap:30, marginTop:20}}>
          <Button style={{backgroundColor:"red"}} text={"Click me"}/>
          <Button text={"Press me"}/>
          <Button text={"Login"}/>
          <Button style={{backgroundColor:"blue"}} text={"Sign in"}/>
      
        </View>
      
    </SafeAreaView>
  )  
}