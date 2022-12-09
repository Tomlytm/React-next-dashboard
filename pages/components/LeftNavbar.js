import React from 'react'
import Img from 'next/image'
import styles from "../../styles/Home.module.css";
import 'semantic-ui-css/semantic.min.css'

export default function LeftNavbar() {
    return (
		<div>
        <div className={styles.navcontainer}>
            <div className={styles.logo}>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
						<Img alt="pic" width={30} height={25} src='/navicons/Content.png'/>
						 <span className={styles.logotitle} >Untitled UI</span>
						<a href="#"></a>
					</li>
                    <li>
						<Img alt="pic" width={20} height={20} className={styles.iconx} src='/navicons/home.png'/>
						<a href="#"></a>
					</li>
					<li>
					<Img alt="pic" width={20} height={20} className={styles.iconx} src='/navicons/chart.png'/>
						<a href="#"></a>
					</li>
					<li>
					<Img alt="pic" width={20} height={20} className={styles.iconx} src='/navicons/boxes.png'/>
						<a href="#"></a>
					</li>
					<li>
					<Img alt="pic" width={20} height={20} className={styles.iconx} src='/navicons/check-square.png'/>
						<a href="#"></a>
					</li>
					<li>
					<Img alt="pic" width={20} height={20} className={styles.iconx} src='/navicons/flag.png'/>
						<a href="#"></a>
					</li>
					
					<li className={styles.iconx}>
					<Img alt="pic" width={20} height={20} className={styles.iconx} src='/navicons/userx.png'/>
						<a href="#"></a>
					</li>
					
					<li className={styles.down}>
						<div >
					<Img alt="pic" width={30} height={30} className={styles.iconx} src='/Avatar.png'/>
						<a href="#"></a>
						</div>
					</li>
					<li>
					<input type="checkbox" id='check' className={styles.check} />
					<label for="check">
					<Img alt="pic" width={20} height={20} className={styles.hamburger} src='/navicons/menu-2.png'/>
						<a href="#"></a>
						</label>
					</li>
                </ul>
            </div>
			
		</div>
	</div>
		
    )
}
