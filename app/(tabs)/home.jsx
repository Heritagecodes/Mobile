import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () =>{
    return(
        <SafeAreaView>
            <Pressable onPress={()=>{
                router.back()
            }} style={{backgroundColor:'red', width:100, marginLeft:40}}>
                <Text>Back</Text>
            </Pressable>
            <View>
                <Text> Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}



export default Home;