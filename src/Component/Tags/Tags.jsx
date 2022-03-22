import './style/style.css'

function Tags (props){
    return <div className="tags">
        {props.Tags.map((tag, index)=>{
            return <div key ={`${index}-${props.id}`}className="tag">{tag}</div>
        })}
    </div>

}

export default Tags