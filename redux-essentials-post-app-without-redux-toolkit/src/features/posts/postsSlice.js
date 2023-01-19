const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

function PostsReducer(posts = initialState, action) {
  switch (action.type) {
    case 'POSTADDED':
      // posts.push(action.payload);
      return [...posts,action.payload];
    case 'POSTUPDATED':
      const { id, title, content } = action.action
      const exisstingPost = posts.find((post) => post.id === id)
      if (exisstingPost) {
        exisstingPost.title = title
        exisstingPost.content = content
      }
      return posts
    default:
      return posts
  }
}

export default PostsReducer
