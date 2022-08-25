import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Image, Pressable, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/solid';

import Header from '../components/Header';

export default function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <Header />

      <View className='items-center'>
        <View className='flex-row items-center py-4 mt-2'>
          <Image
            source={require('../assets/img/fit.jpeg')}
            className='h-20 w-20 bg-gray-300 rounded-full'
          />
        </View>
        <View className='flex-1 px-4'>
          <Text className='font-bold text-gray-800 text-xl'>
            Hi, User!
          </Text>
        </View>
      </View>

    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

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