import { useState } from 'react';
import { Alert, Platform, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Input from '../components/input';



export default function Index(){

  const [email , setEmail] = useState('')
  const [theme , setTheme] = useState('light')
  console.log(email)
  console.log(Platform.OS)
  return (
    <ScrollView>
    <SafeAreaView style={{
      backgroundColor: theme ? 'off-white' : 'black',
      flex:1,
      paddingHorizontal: 10
    }}>
{/*       
      <Text style={{fontSize:50, color:"red", fontWeight:'900', textAlign:'center'}}>
        Hello World!
      </Text>

      <Text>My Name is Heritage</Text>
      <Text>I love coding</Text>

      <Image
        style={{width:300, height:200, alignSelf:'center'}}
        source={require('../../assets/images/Capture2.png')}
      />

      <TextInput
        placeholder="Enter email"
        placeholderTextColor="black"
        onChangeText={(text)=>{
          setEmail(text)
          console.log(text)
        }}
        style={{
          backgroundColor:'white',
          height:50,
          marginTop:20,
          borderRadius:20,
          paddingHorizontal:20
        }}
      />

      <Pressable onPress={() => console.log("Pressed!")}>
        <Text>Click me!</Text>
      </Pressable>

      <TouchableOpacity
        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          backgroundColor:"orange",
          height:30,
          borderRadius:8,
          justifyContent:"center"
        }}>
        <Text style={{alignSelf:"center", color:"white", fontSize:15}}>Enter</Text>
      </TouchableOpacity>

      <View style={{gap:30, marginTop:20}}>
        <Button style={{backgroundColor:"red"}} text={"Click me"}/>
        <Button text={"Press me"}/>
        <Button text={"Login"}/>
        <Button style={{backgroundColor:"blue"}} text={"Sign in"}/>
      </View> */}
        
        <View style={{marginTop:40, gap:20}}>
        <Input type={'default'} label={'Full Name'} placeholder={'Enter your Full Name'}/>
        <Input type={'email-address'} label='Email Address' placeholder={'Enter your Email Address'}/>
        <Input type={'number-pad'} label='Phone Number' placeholder={"Enter your Phone Number"}/>
        
        <Pressable onPress={()=>{
          Alert.alert("I was clicked", `I am on ${Platform.OS} device!`)
        }}>
          <Text>Click Me!</Text>
        </Pressable>

        </View>
    </SafeAreaView>
    </ScrollView>
  )
}
