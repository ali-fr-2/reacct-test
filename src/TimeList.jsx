import Item from "./Item"

const TimeList =(props)=>{
    // چون به صورت تگ باز و بسته ارسال شده به صورت چیلدرن دریافتش میکنیم
    console.log(props.children)
    return(
        <dive>
            {/* <Item>
                {props.children[0]}
                {props.children[1]}
            </Item> */}

            {props.children.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </dive>
    )
}
export default TimeList