import { router } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Input from '../components/input';
import Post from '../components/post';

export default function Index(){

  const [email , setEmail] = useState('')
  const [theme , setTheme] = useState('light')
  console.log(email)
  console.log(Platform.OS)
  return (
    
    <ScrollView showsVerticalScrollIndicator={true}>
    <SafeAreaView style={{
      backgroundColor: theme ? 'off-white' : 'black',
      flex:1,
      paddingHorizontal: 10
    }}>
      <View style={{backgroundColor:"red", height:300}}>
        <Text>Hello World</Text>
      </View>
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
        <Input type={'default'} label='Full Name' placeholder={'Enter your Full Name'}/>
        <Input type={'email-address'} label='Email Address' placeholder={'Enter your Email Address'}/>
        <Input type={'number-pad'} label='Phone Number' placeholder={"Enter your Phone Number"}/>
        
        <Pressable style={{height:50, backgroundColor:'orange',
          justifyContent:'center', borderRadius:8
        }} onPress={()=>{
          router.push('./home')
        }}>
          <Text style={{Color:'white', alignSelf:'center'}}>Sign Up!</Text>
        </Pressable>

        </View>
        <Post title={'Why is the earth round?'} body={'This is because God created it so'} image={require('../../assets/images/icon.png')}/>
        <Post title={'How do cows produce milk?'} body={'Cows produce milk after giving birth to their calves'} image={require('../../assets/images/favicon.png')}/>
        <Post title={'Why is the earth round?'} body={'The earth is round because of the force of gravity'} image={require('../../assets/images/react-logo.png')}/>
        <Post title={'Why is the earth round?'} body={'The earth is round because of the force of gravity'} image={require('../../assets/images/splash-icon.png')}/>
        <Post title={'Why is the earth round?'} body={'The earth is round because of the force of gravity'} image={require('../../assets/images/partial-react-logo.png')}/>
    </SafeAreaView>
    </ScrollView>
  )
}
