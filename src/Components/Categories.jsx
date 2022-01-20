import {categories} from '../data/db'
import CategoryItems from './CategoryItems'
const Categories = () => {
    return (
        <div className="cat">
             {categories.map((item)=>(
                <CategoryItems item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Categories
