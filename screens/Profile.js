import { Image, Pressable, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, SearchIcon } from 'react-native-heroicons/solid';

export default function Profile() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);
  return (
    <View>
      <View className='items-center'>
        <View className='flex-row items-center py-4 mt-2'>
          <Image
            source={require('../assets/img/fit.jpeg')}
            className='h-20 w-20 bg-gray-300 rounded-full'
          />
        </View>
        <View className='flex-1 px-4'>
          <Text className='font-bold text-gray-800 text-xl'>
            Hi, Cassandra!
          </Text>
        </View>
      </View>
    </View>
  )
}
