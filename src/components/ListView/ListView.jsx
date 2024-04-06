import ShopItem from "../ShopItem/ShopItem";
import './listView.modules.css';

const ListView = ({ items }) => {
  return (
    <div className='listView'>
      {items.map((el, ind) => (<ShopItem item={el} key={ind} />))}
    </div>
  )
}

export default ListView
