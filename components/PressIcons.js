import { React, useState } from 'react'

import { Pressable, View, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function PressIcons(props) {
  const [selected, setSelected] = useState(1);
  return (
    <Pressable className='items-center w-16 h-16 pt-2 mx-1 rounded-sm bg-gray-300'>
      <View className='items-center opacity-50'>
        {/* <UserIcon size={32} color='gray' /> */}
        <Ionicons size={24} name={props.name} />
        <Text>{(props.label)}</ Text>
      </View>
    </Pressable>
  )
}