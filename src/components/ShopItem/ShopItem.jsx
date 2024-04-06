import './shopItem.modules.css'

const ShopItem = ({ item }) => {
  return (
    <article className="shopItem">
      <div className='shopItem__imgCont'>
        <img className='shopItem__img' src={item.img} />
      </div>
      <header className='shopItem__header'>{item.name}</header>
      <div className='shopItem__color'>{item.color}</div>
      <div className='shopItem__price'>{'$' + item.price}</div>
      <button className='shopItem__button' type="button">Add to card</button>
    </article>
  )
}

export default ShopItem
