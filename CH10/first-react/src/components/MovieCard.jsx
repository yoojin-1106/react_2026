function MovieCard({movieList}){
    return(
        <>
            <div className="profile-card">
                <input type="text" className="hidden" value={movieList.key} readOnly/>
                <h3>{movieList.title}</h3>

                <span className="label">개봉일</span>
                <p className="role">{movieList.year}</p>
                
                <span className="label">별점</span>
                <p className="role">{movieList.star}</p>
         
                <span className="label">장르</span>
                <div className="hobby-list">
                    {
                        movieList.genre.map((genre) => {
                            return(
                                <>
                                     <input type="text" className="hidden" value={movieList.key} readOnly/>
                                    <span className="skill-badge">{genre}</span>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default MovieCard;