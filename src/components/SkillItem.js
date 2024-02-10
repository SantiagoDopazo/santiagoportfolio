export const SkillItem = ({logo, alt , title}) =>{
    return(
        <div className="item">
            <img src={logo} alt={alt} />
            <h5>{title}</h5>
        </div>
    )
}