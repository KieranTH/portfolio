import react from 'react';

import './Footer.scss';

function Footer(){
  return(
    //--- footer ---
        <footer class="footer">
            <p class="footer__title">Kieran Hughes</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
  );
}

export default Footer;
