
import { View } from 'react-native';
import PressIcons from './PressIcons';

export default function Navbar(props) {

  return (
    <View className='flex-row justify-center bg-gray-200'>
      <PressIcons name='home' label='Home' />
      <PressIcons name='barbell' label='Exercises' />
      <PressIcons name='person' label='Account' />
    </View>
  )
}