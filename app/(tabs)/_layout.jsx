import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack name={'index'}/>
      <Stack name= 'home'/>
    </Stack>
  )
}
