
import { React, useState } from 'react'
import { View } from 'react-native';
import PressIcons from './PressIcons';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const [selected, setSelected] = useState('Home');

  const nav = useNavigation();
  const setActive = active => {
    nav.navigate(active);
    setSelected(active);
  };

  return (
    <View className='flex-row justify-center bg-gray-200'>
      <PressIcons name='home' label='Home' selected={selected} setActive={setActive} />
      <PressIcons name='barbell' label='Exercises' selected={selected} setActive={setActive} />
      <PressIcons name='person' label='Profile' selected={selected} setActive={setActive} />
    </View>
  )
}