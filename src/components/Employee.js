import React from 'react'
// import { Link } from 'react-router-dom'

// export const Post = ({ post, excerpt }) => (
//   <article className={excerpt ? 'post-excerpt' : 'post'}>
//     <h2>{post.title}</h2>
//     <p>{excerpt ? post.body.substring(0, 100) : post.body}</p>

//     {excerpt && (
//       <Link to={`/posts/${post.id}`} className="button">
//         View Post
//       </Link>
//     )}
//   </article>
// )

export const Employee = ({ first, last, phone, email}) => (
    <tr>
      <td>
        {first}
      </td>
      <td>
        {last}
      </td>
      <td>
        {phone}
      </td>
      <td>
        {email}
      </td>
    </tr>
)