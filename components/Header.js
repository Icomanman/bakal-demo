
import React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/solid';

export default function Header() {
  const nav = useNavigation();
  return (
    <View>
      <View className='p-2 bg-gray-900 flex-row'>
        <Pressable className='flex-row pl-2' onPress={() => { pressHome(); nav.navigate('Home') }}>
          <Image source={require('../assets/img/bakal-body.jpg')}
            className='h-12 w-12 bg-gray-300 rounded-full' />
          <View className='justify-center pl-3'>
            <Text className='text-lg text-white font-bold'>Unli Bakal</Text>
          </View>
        </Pressable>
        <View className='justify-center pl-2'>
          <Text className='justify-center text-white'>|</Text>
        </View>
        <View className='justify-center pl-2'>
          <Text className='text-white'>Go hard or go home!</Text>
        </View>
      </View>
    </View >
  )
}

const pressHome = () => {
  console.log('Home pressed!');
}