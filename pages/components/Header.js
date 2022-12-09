import React from "react";
import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'

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
				<button type="button" className={styles.btn1}><img style={{width: ".9rem"}} src="navicons/import.png"></img> import</button>
				<button style={{marginLeft: "10px"}} type="button" className={styles.btn2}><img style={{width: ".8rem"}} src="navicons/add.png"></img> Add</button>
				</div>
			</div>
	);
}

export default Header;