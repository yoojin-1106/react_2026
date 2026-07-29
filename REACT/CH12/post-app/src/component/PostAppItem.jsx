import { useState } from "react";


/* 
    isEditing : 편집중 상태
    onEditTitleChange : Title 변경 감지
    onEditContnetChange : Contnet 변경 감지
*/
function PostAppItem({
              post
            , onDelete
            , isEditing
            , editTitle
            , editContent
            , onEditTitleChange
            , onEditContnetChange
            , onStartEdit
            , onSaveEdit
}){

    if(isEditing){
        return(
            <>
                <li className="post-item post-item--editing">
                    <form className="post-edit-form" onSubmit={onSaveEdit}>
                        <input 
                                type="text" 
                                value={editTitle} 
                                placeholder="제목" 
                                onChange={onEditTitleChange}
                        />
                        <textarea 
                                className="post-body-input" 
                                value={editContent} 
                                onChange={onEditContnetChange} 
                                rows={3} 
                                placeholder="내용"
                        />
                        <div className="post-edit-actions">
                            <button type="submit">저장</button>
                            <button className="ghost" >취소</button>
                        </div>
                    </form>
                </li>
            </>
        )
    }


    return(
        <>
            <li className="post-item" key={post.id}>
                <div className="post-content">
                    <strong className="post-title">{post.title}</strong>
                    <p className="post-body">{post.content}</p>
                </div>
                <div className="post-actions">
                    <button type="button" className="ghost" onClick={() => onStartEdit(post.id)}>수정</button>
                    <button type="button" className="danger" onClick={() => onDelete(post.id)}>삭제</button>
                </div>
            </li>
        </>
    )
}

export default PostAppItem;