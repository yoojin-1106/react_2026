function ProfileCard({name, role, hobbies}){
    // name: 이름, role: 역할, hobbies: 취미
    //console.log(name);
    //console.log(role);
    //console.log(hobbies);
    return(
        <>
            <div className="profile-card">
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <p className="label">취미</p>
                <ul className="hobbyList">
                    {
                        hobbies.map((hobby) => {
                            return(
                                <>
                                    <li className="hobby-list">{hobby}</li>
                                </>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default ProfileCard;