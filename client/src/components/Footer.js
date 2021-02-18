import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'


import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer-top">
                <div className="footer-logo">
                    <div className="logo-title"><h4>과제좀<span>해</span></h4></div>
                    <div className="logo-desc"><p>이 사이트는 대학생들의 과제 걱정을 조금이라도 덜어줄 수 있었으면 하는 마음에서 제작됐습니다.<br/>혹시나 사이트 이용 중 오류를 발견했다면 이메일로 언제든지 연락주세요!<br/>원하는 기능이나 아이디어 제보는 더더욱 환영합니다!</p></div>
                </div>
                <div className="visit">
                    <p>VISIT US</p>
                    <div className="address">
                        <p>43, Jibong-ro, Bucheon-si, Gyeonggi-do, Republic of Korea</p>
                    </div>
                </div>
                <div className="contact">
                    <p>CONTACT US</p>
                    <div className="e-address">
                        <p>gyurilee.me@gmail.com</p>
                    </div>
                    <ul className="contact-icon">
                        <li><a href="https://github.com/jae04099"><FontAwesomeIcon className="fa faGit" icon={faGithub} /></a></li>
                        <li><a href="https://jae04099.tistory.com/"><FontAwesomeIcon className="fa faBlog" icon={faBlogger} /></a></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="rights"><p>© 2021 Adorevoy Inc. All rights reserved</p></div>
            </div>
        </div>
    )
}

export default Footer
