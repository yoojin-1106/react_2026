function PostItem({post, onEdit, onDelete}){
    //console.log("PostItem");
     
    return (
        <li className="card">
            <p className="post-title">{post.title}</p>
            <p className="post-body">{post.body}</p>
            <div className="post-actions">
                <button className="secondary" type="button" onClick={() => onEdit(post)}>수정</button>
                <button className="danger" type="button" onClick={() => onDelete(post.id)}>삭제</button>
            </div>
        </li>
    )
}

export default PostItem;