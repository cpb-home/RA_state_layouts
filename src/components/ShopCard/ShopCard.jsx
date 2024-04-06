import classes from './shopcard.module.css'

const ShopCard = ({ items }) => {

  return (
    <article className={classes["shopCard"]}>
      <header className={classes['shopCard__header']}>{items.name}</header>
      <div className={classes['shopCard__color']}>{items.color}</div>
      <div className={classes['shopCard__imgCont']}>
        <img className={classes['shopCard__img']} src={items.img} />
      </div>
      <footer className={classes['shopCard__footer']}>
        <div className={classes['shopCard__price']}>{'$' + items.price}</div>
        <button className={classes['shopCard__button']} type="button">Add to card</button>
      </footer>
    </article>
  )
}  
export default ShopCard
