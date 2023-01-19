import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

function PostList() {
  const posts = useSelector((state) => state.posts)

  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  console.log(posts);

  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <p><PostAuthor userId={post.user} /></p>
      <p><TimeAgo timestamp={post.date} /></p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <p><ReactionButtons post={post} /></p>
    </article>
  ))
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
} 

export default PostList
