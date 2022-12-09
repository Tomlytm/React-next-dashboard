import React from "react";
import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import Img from 'next/image'

function Header() {
	return (
		
		<div className={styles.headcontainer}>
				<div className={styles.title}>
					<h2>
						Welcome back, <span>Tofunmi</span>
					</h2>
					<p style={{marginTop: "-15px", color: "grey"}}>Track manage and forecast your Customers and Orders.</p>
				</div>
				<div className={styles.profile}>
				<button type="button" className={styles.btn1}><Img alt="pic" width={15} height={15} style={{width: ".9rem"}} src="/navicons/import.png"/> import</button>
				<button style={{marginLeft: "10px"}} type="button" className={styles.btn2}><Img alt="pic" width={20} height={12} style={{width: ".8rem"}} src="/navicons/add.png"/> Add</button>
				</div>
			</div>
	);
}

export default Header;