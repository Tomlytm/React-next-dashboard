import React from 'react'
import styles from "../../styles/Home.module.css";
export default function LeftNavbar() {
    return (
		<div>
        <div className={styles.navcontainer}>
            <div className={styles.logo}>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
						<img src='navicons/Content.png'/>
						 <span className={styles.logotitle} >Untitled UI</span>
						<a href="#"></a>
					</li>
                    <li>
						<img className={styles.iconx} src='navicons/home.png'/>
						<a href="#"></a>
					</li>
					<li>
					<img className={styles.iconx} src='navicons/icon.png'/>
						<a href="#"></a>
					</li>
					<li>
					<img className={styles.iconx} src='navicons/icon(1).png'/>
						<a href="#"></a>
					</li>
					<li>
					<img className={styles.iconx} src='navicons/check-square.png'/>
						<a href="#"></a>
					</li>
					<li>
					<img className={styles.iconx} src='navicons/icon(2).png'/>
						<a href="#"></a>
					</li>
					<li>
					<img className={styles.iconx} src='navicons/icon(3).png'/>
						<a href="#"></a>
					</li>
					<li>
					<input type="checkbox" id='check' className={styles.check} />
					<label for="check">
					<img className={styles.hamburger} src='navicons/menu-2.png'/>
						<a href="#"></a>
						</label>
					</li>
                </ul>
            </div>
			
		</div>
	</div>
		
    )
}
