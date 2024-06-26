import "./list.scss"
import { listData } from "../../lib/dummyData"
import Card from "../card/Card"

const List = () => {
  return (
    <div className='list'>
        {
            listData.map((item)=>(
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default List