import { Item } from '../Item/Item';


export const ItemList = ({items=[]}) => {
    return (
        <div className="flex">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}