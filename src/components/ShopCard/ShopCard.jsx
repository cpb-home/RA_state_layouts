import './shopcard.modules.css'
const ShopCard = ({ items }) => {

  return (
    <article className="shopCard">
      <header className='shopCard__header'>{items.name}</header>
      <div className='shopCard__color'>{items.color}</div>
      <div className='shopCard__imgCont'>
        <img className='shopCard__img' src={items.img} />
      </div>
      <footer className='shopCard__footer'>
        <div className='shopCard__price'>{'$' + items.price}</div>
        <button className='shopCard__button' type="button">Add to card</button>
      </footer>
    </article>
  )
}  
export default ShopCard
