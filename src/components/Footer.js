import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
        <div className="maincontainer">
            <div className="sec aboutus">
                <h2>
                    About us
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facilis cum odio. Officia vero alias
                    impedit cupiditate vel voluptates rerum cum ipsam harum earum dolorem repellat, repellendus
                    consequatur tenetur nobis. Fuga earum, pariatur culpa suscipit quod, sint in illo laborum
                    aspernatur, quisquam assumenda voluptates voluptatem!
                </p>
                <ul className="icon">
                    <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/></a></li>
                    <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"/></a></li>
                    <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/30/000000/whatsapp.png"/></a></li>
                    <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/></a></li>
                </ul>
            </div>
            <div className="sec quicklinks">
                <h2>
                    Quick Link
                </h2>
                <ul>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">POLICY</a></li>
                    <li><a href="#">HAPPY</a></li>
                    <li><a href="#">BRITHDAY TO YOU</a></li>
                    <li><a href="#">WISH ME</a></li>
                    <li><a href="#">THANK YOU</a></li>
                </ul>
            </div>
            <div className="sec contact">
                <h2>
                    Contact Info
                </h2>
                <ul className="info">
                    <li>
                        <span><img src="https://img.icons8.com/material-rounded/24/000000/address.png"/></span>
                        <span>put your <br/>address here</span>
                    </li>
                    <li>
                        <span><img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"/></span>
                        <p>
                            <a href="#">12343234</a>
                        </p>
                    </li>
                    <li>
                        <span><img src="https://img.icons8.com/material-rounded/24/000000/mail.png"/></span>
                        <p>
                            <a href="#">pratikagnihotri1234@gmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer
