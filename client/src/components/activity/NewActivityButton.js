import React from 'react'

const NewActivityButton = (props) => {

 function handleToggleActivityForm(){
   props.toggleActivityForm()
   props.resetForm()
 }

return(
  <>
    <button onClick={handleToggleActivityForm}>No Chance This Works</button>
  </>
 )

}


export default NewActivityButton;
