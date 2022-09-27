import { Image, Pressable, View, Text, TextInput } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const icon_color = 'rgb(17, 24, 39)';

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

const PostFooter = ({ post }) => {
  const [likes, setPostLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const liked_icon = liked ? 'heart-sharp' : 'heart-outline';

  // Child Components
  const CommentInput = ({ pushComment }) => {
    let user_comment = '';
    return (
      <View className='flex-row items-center mx-1'>
        <View className='w-80'>
          <TextInput
            numberOfLines={2}
            placeholder='Add comment...'
            maxLength={160}
            multiline={true}
            onChangeText={comment => user_comment = comment} />
        </View>
        <View className='flex-row flex-grow justify-end'>
          <Pressable className='justify-center mx-3' onPress={() => pushComment(user_comment)}>
            <Ionicons name="send" size={14} color={icon_color} />
          </Pressable>
        </View>
      </View>
    )
  };

  const Comments = ({ comments }) => {
    const [comments_arr, setComments] = useState(comments);

    const updateComments = new_comment => {
      comments_arr.push({
        user: 'User',
        comment: new_comment
      })
      setComments(comments_arr);
    };

    const comment_header = comments_arr.length > 0 ?
      <Text className='mt-1 mb-1 text-gray-500'>
        {comments_arr.length} {comments_arr.length === 1 ? 'comment' : 'comments'}
      </Text> :
      <CommentInput pushComment={updateComments} />
    // <Text className='mx-1 mt-1 text-gray-500'>Add comment</Text>

    const user_comments = [];
    for (let i = 0; i < comments_arr.length; i++) {
      user_comments.push(
        <View className='break-words' key={i}>
          <Text className=' text-gray-800'>
            <Text className='font-bold'>{comments_arr[i].user}</Text>
            <Text> {comments_arr[i].comment}</Text>
          </Text>
        </View>
      )
    }

    return (
      <View className='mx-2 mb-2'>
        {comment_header}
        {user_comments}
      </View>
    );
  };

  // Methods
  const updateLikes = is_liked => {
    setLiked(is_liked);
    setPostLikes(is_liked ? likes + 1 : post.likes);
    // send post request:
    setTimeout(() => {
      console.log('POST');
    }, 1000);
  };

  return (<View>
    <View className='flex-row items-center'>
      <Pressable className='my-2 mx-3 justify-center' onPress={() => updateLikes(!liked)}>
        <Ionicons name={liked_icon} size={24} color={liked ? 'red' : icon_color} />
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
      <Text className='font-bold'>{likes} {likes > 1 || likes === 0 ? 'likes' : 'like'}</Text>
    </View>

    <View className='flex-row mx-2'>
      <Text className='font-bold mr-1'>{post.user}</Text>
      <Text className=''>{post.caption}</Text>
    </View>

    <Comments comments={post.comments} />
  </View>)
};

export default function Post({ post }) {
  return (
    <View className='justify-center'>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View >
  )
}