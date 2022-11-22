import Link from "next/link";

export default function PostList({posts}) {
    return (
        <div>
            <h1>List of Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h2>{post.title}</h2>
                        </Link>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props : {
            posts: data.slice(0,3)
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {postId: '1'}
            },
            {
                params: {postId: '2'}
            },
            {
                params: {postId: '3'}
            }
        ],
        fallback: false
    }
}