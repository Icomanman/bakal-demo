import { ScrollView, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Post from '../components/Post';
import Searchbar from '../components/Searchbar';

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <View className='bg-gray-300 w-full items-center'>
      <Searchbar />
      <ScrollView className='content-center'>
        <Post />
      </ScrollView>
    </View>
  )
}

const log = () => {
  console.log('pressed!');
  // tmp
  /**
  <Pressable onPress={log}>
    <View className='items-center'>
      <UserIcon size={35} color='gray' />
      <Text className='text-gray-800'>Account</Text>
    </View>
  </Pressable>
   */
}