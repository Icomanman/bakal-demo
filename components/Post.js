import { Image, Pressable, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PostHeader = ({ post }) => (
  <View className='flex-row'>
    <Text className='font-bold'>{post.user}</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View>
    <Image
      className='mb-1 w-96 h-96'
      source={{ uri: post.image_url }}
      style={{ resizeMode: true }}
    />
    <Text>{post.image_url}</Text>
  </View>
);
const PostFooter = ({ post_dat }) => (
  <View>
    <Text>Footer</Text>
  </View>
);

export default function Post({ post }) {
  // const post-arr = [];
  // for (let i = 0; i < 16; i++) {
  //   post_arr.push(
  //     <Image key={i} source={require('../assets/img/fit.jpg')} className='mb-1 w-96 h-96' />)
  // };
  return (
    <View className='justify-center'>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      {/* <Pressable> */}
      {/* {post_arr} */}
      {/* </Pressable> */}
    </View >
  )
}