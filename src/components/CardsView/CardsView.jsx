import ShopCard from "../ShopCard/ShopCard"
import classes from './cardsView.module.css';

const CardsView = ({ cards }) => {

  return (
    <div className={classes['cardsView']}>
      {cards.map((el, ind) => (<ShopCard items={el} key={ind} />))}
    </div>
  )
}

export default CardsView
