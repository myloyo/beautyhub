function Card({
    postId,
    title,
    body,
    name,
    username,
}) {

    return(
        <div className="card">
            <span className="postId">(postID)#</span>
            <span className="title">(title)</span>
            <p>{body}</p>
            <div className="author">
                <span>{name}@</span>
                <span className="username">{username}</span>
            </div>
        </div>
    )
}

export default Card;