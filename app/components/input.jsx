import { StyleSheet, Text, TextInput, View } from "react-native";
const Input = ({placeholder, label, type}) => {
    return(

        <View style={styles.container}>
            
            <Text style={{marginBottom:10}}>{label}</Text>
            <TextInput keyboardType={type} style={{paddingLeft:20, height:50, backgroundColor:'white'}} 
            placeholderTextColor={'black'}
             placeholder={placeholder} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent:'center'
    },
});

export default Input;