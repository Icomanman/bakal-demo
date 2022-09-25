import { Image, Pressable, View, Text } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const icon_color = 'rgb(17, 24, 39)';

const Comments = ({ post }) => (
  <View className='flex-row'>
    <Text className='font-bold mr-1'>{post.user}</Text>
    <Text>{post.caption}</Text>
  </View>
);

const PostHeader = ({ post }) => (
  <View className='flex-row my-1 items-center'>
    <Image className='w-12 h-12 rounded-full' source={{ uri: post.image_url }} />
    <Text className='font-bold mx-3 text-md'>{post.user}</Text>
    <View className='flex-row flex-grow justify-end'>
      <Pressable className='mx-2'>
        <Ionicons name="ellipsis-vertical" size={18} color="black" />
      </Pressable>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View className='justify-center'>
    <Image
      className='mb-1 w-96 h-96'
      source={{ uri: post.image_url }}
      style={{ resizeMode: 'cover' }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <View className='flex-row items-center'>
      <Pressable className='my-2 ml-3 mr-6'>
        <FontAwesome5 name="heart" size={24} color={icon_color} />
      </Pressable>
      <Pressable className='my-2 mr-6'>
        <FontAwesome5 name="comment" size={24} color={icon_color} />
      </Pressable>
      <Pressable className='my-2 mr-6'>
        <FontAwesome5 name="share-square" size={24} color={icon_color} />
      </Pressable>
    </View>
    <View className='mx-2'>
      <Text className='font-bold'>{post.likes} likes</Text>
    </View>
    <View className='flex-row mx-2'>
      <Text className='font-bold mr-1'>{post.user}</Text>
      <Text className=''>{post.caption}</Text>
    </View>
    <View className='m-2'>
      <Text className='text-gray-500'>Comments</Text>
      <Comments post={post} />
    </View>
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
      <PostFooter post={post} />
      {/* <Pressable> */}
      {/* {post_arr} */}
      {/* </Pressable> */}
    </View >
  )
}