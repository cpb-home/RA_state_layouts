import ShopCard from "../ShopCard/ShopCard"
import './cardsView.modules.css';

const CardsView = ({ cards }) => {

  return (
    <div className='cardsView'>
      {cards.map((el, ind) => (<ShopCard items={el} key={ind} />))}
    </div>
  )
}

export default CardsView
