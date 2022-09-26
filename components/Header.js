
import React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/solid';

export default function Header() {
  const nav = useNavigation();
  return (
    <View className='justify-center py-2 bg-gray-800 flex-row'>
      <Pressable className='flex-row pl-2' onPress={() => { pressHome(); nav.navigate('Home') }}>
        <View className='justify-center'>
          <Text className='text-lg text-white font-bold'>Social</Text>
        </View>
        <Image source={require('../assets/img/bakal-body.jpg')}
          className='h-10 w-10 rounded-full mx-3' />
        <View className='justify-center'>
          <Text className='text-lg text-white font-bold'>Bakal</Text>
        </View>
      </Pressable>
    </View>
  )
}

const pressHome = () => {
  console.log('Home pressed!');
}