function ProjectCard({projectCardList}){
   // console.log(projectCardList);
    return(
        <>
            <div className="profile-card">
                <h3>{projectCardList.name}</h3>
                <p className="role">({projectCardList.desc})</p>
               
                <p className="label">할 일</p>
                <ul className="hobby-list">
                    {
                        projectCardList.toDos.map((todo) => {
                            return(
                                <>
                                    <li className="hobby-list">{todo}</li>
                                </>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default ProjectCard;