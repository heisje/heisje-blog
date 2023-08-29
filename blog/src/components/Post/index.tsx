const Post = ({ post }: { post: any }) => {
    return (
        <>
            <div>{post.title}</div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
    );
};

export default Post;