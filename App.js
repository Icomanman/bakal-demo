import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import Home from './screens/Home';
import Exercises from './screens/Exercises';
import Profile from './screens/Profile';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();
const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default function App() {
  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <TailwindProvider>
        <NavigationContainer>
          <Header />
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ title: 'Unli Bakal' }} />
            <Stack.Screen name='Exercises' component={Exercises} options={{ title: 'Giuliano' }} />
            <Stack.Screen name='Profile' component={Profile} options={{ title: 'Profile' }} />
          </Stack.Navigator>
          <Navbar />
        </NavigationContainer>
      </TailwindProvider>
    </SafeAreaView>
  );
}