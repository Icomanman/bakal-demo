import { Image, Pressable, View, Text } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const icon_color = 'rgb(17, 24, 39)';

const Comments = ({ comments }) => {
  const comment_header = comments.length > 1 ?
    <Text className='mx-1 mt-1 text-gray-500'>See all {comments.length} comments</Text> :
    <Text className='mx-1 mt-1 text-gray-500'>Add comment</Text>

  const user_comments = [];
  for (let i = 0; i < comments.length; i++) {
    user_comments.push(
      <View className='break-words' key={i}>
        <Text className=' text-gray-800 m-1'>
          <Text className='font-bold'>{comments[i].user}</Text>
          <Text> {comments[i].comment}</Text>
        </Text>
      </View>
    )
  }

  return (
    <View className='mx-1 mb-2'>
      {comment_header}
      {user_comments}
    </View>
  );
}

const PostHeader = ({ post }) => (
  <View className='flex-row my-1 mx-2 items-center'>
    <Image className='w-12 h-12 rounded-full' source={{ uri: post.image_url }} />
    <Text className='font-bold mx-3 text-md'>{post.user}</Text>
    <View className='flex-row flex-grow justify-end'>
      <Pressable className='mx-3'>
        <Ionicons name="ellipsis-vertical" size={18} color="black" />
      </Pressable>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View className='justify-center items-center'>
    <Image
      className='mb-1 w-full h-96'
      source={{ uri: post.image_url }}
      style={{ resizeMode: 'cover' }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <View className='flex-row items-center'>
      <Pressable className='my-2 mx-3 justify-center'>
        <FontAwesome5 name="heart" size={24} color={icon_color} />
      </Pressable>
      <Pressable className='my-2 mx-3 justify-center'>
        <FontAwesome5 name="comment" size={24} color={icon_color} />
      </Pressable>
      <Pressable className='my-2 mx-3 justify-center'>
        <FontAwesome5 name="share-square" size={24} color={icon_color} />
      </Pressable>
      <View className='flex-row flex-grow justify-end mx-3'>
        <Pressable className='mx-3'>
          <Ionicons name="pint-outline" size={24} color={icon_color} />
        </Pressable>
      </View>
    </View>

    <View className='mx-2'>
      <Text className='font-bold'>{post.likes} likes</Text>
    </View>

    <View className='flex-row mx-2'>
      <Text className='font-bold mr-1'>{post.user}</Text>
      <Text className=''>{post.caption}</Text>
    </View>

    <Comments comments={post.comments} />

  </View>
);

export default function Post({ post }) {
  return (
    <View className='justify-center'>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View >
  )
}