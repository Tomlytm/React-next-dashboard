import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LeftNavbar from './components/LeftNavbar'
import Content from './components/Contents'
import Details from './components/Details'
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="created by tomilayo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftNavbar />
      <Tabs defaultIndex={0}>
        <TabList className={styles.tablist1}>
          <div className={styles.navcontainer2}>
            <div className={styles.wrapper2}>
              <h5>Dashboard</h5>
              <Tab className={styles.tab1}>
                <h6> <img style={{marginRight: "7px"}} src='navicons/overview.png' />  Overview</h6>
              </Tab>
              <Tab className={styles.tab1}>
              <h6> <img style={{marginRight: "7px"}} src='navicons/mydetails.png' />  My Details</h6>
              </Tab>
            </div>
          </div >
        </TabList>
        <TabPanel>
          <Content />
        </TabPanel>
        <TabPanel>
          <Details />
        </TabPanel>
      </Tabs>

      <br />

    </div >
  )
}
