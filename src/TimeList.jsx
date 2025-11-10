import { useContext } from "react"
import Item from "./Item"
import { TestContext } from "./testContext"

const TimeList =(props)=>{
    // چون به صورت تگ باز و بسته ارسال شده به صورت چیلدرن دریافتش میکنیم
    console.log(props.children)
    const {timeArr}=useContext(TestContext)
    return(
        <div>
            {/* <Item>
                {props.children[0]}
                {props.children[1]}
            </Item> */}
            
            {/* {props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))} */}
            {timeArr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}
export default TimeList