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
  // naming comments variable is merely semantics (in context); so as not to get confusing in time: 27 Sep 2022
  const [comments_arr, setComments] = useState(post.comments);
  const [comment_btn, setCommentBtn] = useState(false);
  const [likes, setPostLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const liked_icon = liked ? 'heart-sharp' : 'heart-outline';

  // Child Components
  const CommentInput = ({ pushComment, focus }) => {
    let user_comment = '';
    return (
      <View className='flex-row items-center mx-1'>
        <View className='align-middle w-80'>
          <TextInput
            className='align-middle'
            autoFocus={focus}
            numberOfLines={2}
            placeholder='Add comment...'
            maxLength={160}
            multiline={true}
            onChangeText={comment => user_comment = comment}
          />
          {/* setting state like this looks like a bad practice? 27 Sep 2022 */}
        </View>
        <View className='flex-row flex-grow justify-end'>
          <Pressable className='justify-center mx-3' onPress={() => pushComment(user_comment)}>
            <Ionicons name="send-outline" size={20} color={icon_color} />
          </Pressable>
        </View>
      </View>
    )
  };

  const Comments = ({ bubble_pressed, comments, updateComments }) => {
    if (bubble_pressed) {
      var comment_header =
        <CommentInput
          pushComment={updateComments}
          focus={true} />
    } else {
      var comment_header = comments.length > 0 ?
        <Text className='mt-1 mb-1 text-gray-500'>
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </Text> :
        <CommentInput
          pushComment={updateComments}
          focus={false} />
    }

    const user_comments = [];
    for (let i = 0; i < comments.length; i++) {
      user_comments.push(
        <View className='break-words' key={i}>
          <Text className=' text-gray-800'>
            <Text className='font-bold'>{comments[i].user}</Text>
            <Text> {comments[i].comment}</Text>
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

  const updateComments = new_comment => {
    setComments([...comments_arr, { user: 'User', comment: new_comment }]);
    setCommentBtn(false);
  };

  return (<View>
    <View className='flex-row items-center'>
      <Pressable className='my-2 mx-3 justify-center' onPress={() => updateLikes(!liked)}>
        <Ionicons name={liked_icon} size={24} color={liked ? 'red' : icon_color} />
      </Pressable>
      <Pressable className='my-2 mx-3 justify-center' onPress={() => setCommentBtn(!comment_btn)}>
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

    <Comments comments={comments_arr} bubble_pressed={comment_btn} updateComments={updateComments} />
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