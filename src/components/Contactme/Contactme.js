import React from 'react'
import './Contactme.css'

const Contactme = () => {
  return (
    <div className='contactme'>
      <h1>Contact Me</h1>
      <form className='form' action="https://script.google.com/macros/s/AKfycbyV2V3axD7kSKk9CXf7Xl9l_-4GE78apz8uO_3kqZxvpmSobz7N1KuCY-mTZotpuQVH/exec" name="form1" onsubmit="return validate()" method="post">
          <label >Name:</label><br/>
          <input type="text"  name="name" id="name" /><br/>

          <label >Email address:</label><br/>
          <input type="email"  name="email" id="email" /><br/>

          <label >phone:</label><br/>
          <input type="number" name="phone" id="phone" /><br/>

          <label >Meassage:</label><br/>
          <textarea
            type="text"
            
            name="message"
            id="message"
            height="250px"
          ></textarea><br/>

          <button type="submit">Submit</button>
        </form>

        

    </div>
  )
}

export default Contactme
