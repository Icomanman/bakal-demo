import { Pressable, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Reload() {
  return (
    <View className='justify-center w-96 h-48 pb-16'>
      <Pressable className='items-center'>
        <Text className='font-bold text-lg text-gray-800'>Oops! Nothing here</Text>
        <Ionicons name='reload-circle-sharp' size={48} color='rgb(17, 24, 39)' />
      </Pressable>
    </View>
  )
}