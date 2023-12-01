import React from 'react'
import './Contactme.css'

const Contactme = () => {
  return (
    <div className='contactme'>
      <h1>Contact Me</h1>
      <form className='form' action="https://script.google.com/macros/s/AKfycbw8qbAvMvuAiqz_sq0JbkQmZnuy8PrI5lT-S9knt3mtLE37M8v5BPPG0rYtdHKxQvLDSA/exec" name="form1"  method="post">
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

          <button type="submit" value='submit'>Submit</button>
        </form>

        

    </div>
    
  )
  
}

export default Contactme
