
function Card({title, children}){
    return(
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}

export default Card;