import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-apl">
                <h1>Ikuti Kami</h1>
                <div className="rows_Img">
                    <img
                        src="https://www.static-src.com/siva/asset///08_2021/promo_99.gif"
                        className="footer_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///11_2020/digital-aggr.png"
                        className="footer_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///06_2021/gratis_ongkir_widget.png"
                        className="footer_Img"
                    />
                    <img
                        src="https://www.static-src.com/siva/asset///07_2021/PromoBank96x96pxrevamp.png"
                        className="footer_Img"
                    />
                </div>
            </div>

            <div className="footer-syarat">
                <Link to='/'>Syarat & Ketentuan | Kebijakan Privasi</Link>
            </div>

            <div className='footer__links'>
                <Link to='/'>Blu.com © 2021 | Toko online dengan sensasi belanja ala mall.</Link>
            </div>
        </div>
    )
}

export default Footer