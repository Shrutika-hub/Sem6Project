import React from 'react'
import './Diabetes.css';
const Diabetes = () => {
  return (
<div className='body'>
<div className="inputBox">
<input type="text" required="required"/>
<span>First Name</span>
</div>

<div className="inputBox">
<input type="text" required="required"/>
<span>Last Name</span>
</div>
</div>
  )
}

export default Diabetes