import { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch"
import CardsView from "../CardsView/CardsView";
import products from "../../database";
import ListView from "../ListView/ListView";

const Store = () => {

  const [icon, setIcon] = useState('view_module');
  const [view, setView] = useState(<CardsView cards={products} />);
  console.log(view)
  
  const onSwitch = (newIcon) => {
    setIcon(newIcon);

    if (newIcon === 'view_module') {
      setView(<CardsView cards={products} />);console.log(view)
    } else {
      setView(<ListView items={products} />);console.log(view)
    }
  };

  //view_list
  //view_module

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch}/>
      {view}
    </>
  )
}

export default Store
