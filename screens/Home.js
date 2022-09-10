import { ScrollView, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Post from '../components/Post';
import Reload from '../components/Reload';
import Searchbar from '../components/Searchbar';

import posts from '../dat/posts';

export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const content = posts.length > 0 ? posts.map((post, i) => (
    <Post post={post} key={i} />
  )) : <Reload />;

  return (
    <View className='bg-gray-300 w-full items-center'>
      <Searchbar />
      <ScrollView className='content-center'>
        {content}
      </ScrollView>
    </View>
  )
}

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