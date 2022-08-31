import { Image, Pressable, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Post() {
  const posts = [];
  for (let i = 0; i < 16; i++) {
    posts.push(
      <Image key={i} source={require('../assets/img/fit.jpg')} className='mb-1 w-96 h-96' />)
  };

  return (
    <View className='justify-center'>
      <Pressable>
        {posts}
      </Pressable>
      <View className='justify-center w-96 h-48 pb-16'>
        <Pressable className='items-center'>
          <Text className='font-bold text-lg text-gray-800'>Oops! Nothing here</Text>
          <Ionicons name='reload-circle-sharp' size={48} color='rgb(17, 24, 39)' />
        </Pressable>
      </View>
    </View >
  )
}