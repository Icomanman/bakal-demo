import { React, useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function PressIcons(props) {
  const [active, setActive] = useState(props.selected);
  const switchActive = new_active => {
    props.setActive(new_active);
    setActive(new_active);
    console.log(new_active);
  };
  return (
    <Pressable className={`items-center justify-center w-14 h-14 mx-2 rounded ${props.label === props.selected ? 'bg-gray-300' : ''}`}
      onPress={() => { switchActive(props.label); }}>
      <View className={`items-center ${props.label !== props.selected ? 'opacity-20' : ''}`}>
        <Ionicons size={28} name={props.name} className='justify-center' />
      </View>
    </Pressable >
  )
}