import { ScrollView, View, Text } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Searchbar from '../components/Searchbar';

export default function Exercises() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);
  return (
    <View className='bg-white w-full items-center'>
      <View className='my-2'>
        <Searchbar />
      </View>
      <ScrollView className='content-center'>
        <Text>Exercises</Text>
      </ScrollView>
    </View >
  )
}
