import { Image, Pressable, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/solid';

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <View>
      <View className='items-center'>
        <View className='flex-1 px-4'>
          <Text className='font-bold text-gray-800 text-xl'>
            Welcome home!
          </Text>
        </View>
      </View>
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