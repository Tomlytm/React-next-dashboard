import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Content from "../components/Contents";
import styles from "../../styles/Home.module.css";
import React from 'react'
export default function() {
  return (
    <div className={styles.navcontainer2}>
		<div className={styles.wrapper2}>
		<Tabs>
            <TabList className={styles.tablist1}>
                <Tab className={styles.tab1}>
                    Overview
                </Tab>
                <Tab className={styles.tab1}>
                    My Details
                </Tab>
            </TabList>
            <TabPanel>
                
            </TabPanel>
            <TabPanel>
                
            </TabPanel>
        </Tabs>
	</div>
	</div>
  )
}
