import './style/style.css'

function Tags (props){
    return <div className="tags">
        {props.Tags.map((tag)=>{
            return <div className="tag">{tag}</div>
        })}
    </div>

}

export default Tags