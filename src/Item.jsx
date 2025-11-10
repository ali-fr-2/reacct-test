// import { useContext } from "react"
// import { TestContext } from "./testContext"
// style={{color:context}}


const Item =(props)=>{
    // const context = useContext(TestContext);
    return(
        <div className="time_item" >
            {props.children}
        </div>
    )
}
export default Item