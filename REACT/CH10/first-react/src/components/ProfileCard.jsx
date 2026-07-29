import SkillBadge from "./SkillBadge";

function ProfileCard({name, role, hobbies, skills}){
    // name: 이름, role: 역할, hobbies: 취미
    //console.log(name);
    //console.log(role);
    //console.log(hobbies);
    return(
        <>
            <div className="profile-card">
                <h3>{name}</h3>
                <p className="role">({role})</p>
               
                <p className="label">취미</p>
                <ul className="hobby-list">
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

                <p className="label">기술</p>
                <div className="badge-list">
                    {
                        skills.map((skill) => {
                            return(
                               <SkillBadge key = {skill} skill = {skill}/>
                            );
                        })
                    }
                </div>

                
            </div>
        </>
    );
};

export default ProfileCard;