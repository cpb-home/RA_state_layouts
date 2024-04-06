const IconSwitch = ( {icon, onSwitch} ) => {

  return (
    <div className="icon">
      <span className="material-icons" onClick={() => onSwitch(icon === 'view_list' ? 'view_module' : 'view_list')}>{icon}</span>
    </div>
  )
}

export default IconSwitch
