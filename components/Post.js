import { Image, Pressable, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Post() {
  return (
    <View className='justify-center h-screen'>
      <Image source={require('../assets/img/fit.jpeg')} className='w-full h-full' />
      <Pressable className='items-center'>
        <View className='self-center bg-white w-full'>
          <Text className=''>Oops! Nothing here</Text>
          <Ionicons name='reload-circle-sharp' size={48} color='rgb(17, 24, 39)' />
        </View>
      </Pressable>
    </View>
  )
}