import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
  // console.log(props.value) # this returns an object from getDenState... isMoleVisible its either true or false
  // console.log(props.value.isMoleVisible) # this shows the value true or false only 

  if (props.value.isMoleVisible === true) // this condition statement makes it only show moles when the value is true.
    return(<div className="den"><img src={MoleIcon} className="Mole" alt="Mole" onClick={props.whack} /></div>) //by implementing 'onClick' here it only calls the function that props.whack contains when the image shows.
  
    else  // empty/closed circle with no mole
    return (<div className="den"></div>)
   
  
};

export default Mole
