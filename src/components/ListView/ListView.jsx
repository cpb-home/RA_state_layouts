import ShopItem from "../ShopItem/ShopItem";
import classes from './listView.module.css';

const ListView = ({ items }) => {
  return (
    <div className={classes['listView']}>
      {items.map((el, ind) => (<ShopItem item={el} key={ind} />))}
    </div>
  )
}

export default ListView
