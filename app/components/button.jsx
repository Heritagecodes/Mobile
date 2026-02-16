import { Text, TouchableOpacity } from "react-native";


const Button = ({text, style})=> {
    return(
        <TouchableOpacity style={{backgroundColor:"purple", height:30,
            borderRadius:12, justifyContent:"center", ...style}}>

            <Text style={{alignSelf:"center"}}>{text}</Text>
        </TouchableOpacity>
    )
}


export default Button;