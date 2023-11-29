import React from "react";
import Contactme from "../../components/Contactme/Contactme";


const Contacts = () => {
  return (
    <div>
      <Contactme />
      <iframe
        width="100%"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=kerala&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Contacts;
