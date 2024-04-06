import styles from './shopItem.module.css'

const ShopItem = ({ item }) => {
  return (
    <article className={styles["shopItem"]}>
      <div className={styles['shopItem__imgCont']}>
        <img className={styles['shopItem__img']} src={item.img} />
      </div>
      <header className={styles['shopItem__header']}>{item.name}</header>
      <div className={styles['shopItem__color']}>{item.color}</div>
      <div className={styles['shopItem__price']}>{'$' + item.price}</div>
      <button className={styles['shopItem__button']} type="button">Add to card</button>
    </article>
  )
}

export default ShopItem
