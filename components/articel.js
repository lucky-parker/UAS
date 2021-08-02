import parse from 'html-react-parser'
export default function Articel({post}){
    return(
        <article className="blog-post">
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-meta">27 april 2021 </p>

       { parse(post.body)}
      </article>
    )}