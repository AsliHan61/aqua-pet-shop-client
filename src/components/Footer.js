import React, { useState, useEffect } from 'react';


function Footer () {
    const [Footer, setCount] = useState();
    
    return (
        <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
  </footer>
    )
};

export default Footer;
