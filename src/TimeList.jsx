import { useContext } from "react"
import Item from "./Item"
import { TestContext } from "./testContext"

const TimeList =(props)=>{
    // چون به صورت تگ باز و بسته ارسال شده به صورت چیلدرن دریافتش میکنیم
    console.log(props.children)
    const context = useContext(TestContext);
    return(
        <div className="main_time_list">
            {context.timeArr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}
export default TimeList