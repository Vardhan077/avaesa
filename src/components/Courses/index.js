import './index.css'

const Courses = props =>{
    const{item} = props
    const {img,course} = item
    console.log()
    return(
        <div className='item'>
            <img src={img} className="img" />
            <p className='p'>{course}</p>
        </div>
    )
}

export default Courses