import { Image, StyleSheet, Text, View } from "react-native";

const Post = ({ title, body, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.head}>{body}</Text>
      <Image style={{width:100, height:150, alignSelf:'center'}} source={image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    gap: 10,
    backgroundColor: "green",
    marginBottom: 10,
}
});

export default Post;