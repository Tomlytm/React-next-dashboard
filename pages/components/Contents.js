import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import Header from '../components/Header'
import Img from 'next/image'
import "react-datepicker/dist/react-datepicker.css";

import { List, Image, Statistic } from 'semantic-ui-react'
export default function Contents() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <Header />
            <div className={styles.contentcontainer}>
                <div className="row">
                    <div className="col">
                        <div style={{width: "100%"}} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Customers</h5>

                                <Statistic>
                                    <Statistic.Value className={styles.statistic}>2,420</Statistic.Value>
                                    <Img alt="pic" width={100} height={50} className={styles.line1} src='/Line(1).png' />
                                </Statistic>
                                <div className={styles.stats}>
                                    <p>40%</p>
                                    <div className={styles.lastmonth}> <p>VS </p> <p style={{ marginTop: "-15px" }}>Last Month</p></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div style={{width: "100%"}} className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Members</h5>
                                <Statistic>
                                    <Statistic.Value className={styles.statistic}>1,210</Statistic.Value>
                                    <Img alt="pic" width={50} height={50} className={styles.line1} src='/Line(2).png'/>
                                </Statistic>
                                <div className={styles.stats}>
                                    <p style={{color:"#F04438"}}>10%</p>
                                    <div className={styles.lastmonth}> <p>VS </p> <p style={{ marginTop: "-15px" }}>Last Month</p></div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div style={{width: "100%"}} className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Active now</h5>
                                <Statistic>
                                    <Statistic.Value className={styles.statistic}>312</Statistic.Value>
                                    <Img alt="pic" width={100} height={50} className={styles.line1} src='/Line(1).png'/>
                                </Statistic>
                                <div className={styles.stats}>
                                    <p>20%</p>
                                    <div className={styles.lastmonth}> <p>VS </p> <p style={{ marginTop: "-15px" }}>Last Month</p></div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <br />
            <div className={styles.contentcontainer2}>
                <div class="ui icon input">
                    <i aria-hidden="true" className="search icon"></i>
                    <input type="text" placeholder="Search for trades" />
                </div>
                <div>
                    <div className={styles.calender}>
                    <button className={styles.range}> <span><Img alt="pic" width={20} height={15} style={{width: "15px", marginTop: "-4px"}} src="/navicons/calender.png"/> Jan 6, 2022 - Jan 13, 2022</span> </button>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className={styles.contentcontainer3}>
                <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className='card'>
                    <div className='card-body'>
                        <table className="table">

                            <thead>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="col"> Trade</th>
                                    <th scope="col">Order amount</th>
                                    <th className={styles.hide} scope="col">Delivery data</th>
                                    <th className={styles.hide} scope="col">Status</th>
                                    <th className={styles.hide} scope="col">Executed by</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="row">TSLA BUY</th>
                                    <td>$30,021.23</td>
                                    <td className={styles.hide}>Jan 13, 2022</td>
                                    <td className={styles.hide}><b style={{ backgroundColor: "#f4f4f4", padding: "5px", borderRadius: "10px"}}>•Processing</b> </td>
                                    <td className={styles.hide}>
                                        <List>
                                            <List.Item>
                                                <Image alt="pic" avatar src='Avatar(2).png' />
                                                <List.Content>
                                                    <List.Header >Olivia Rhye</List.Header>
                                                    <List.Description>
                                                        Olivia@untitedui.com{' '}

                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </td>
                                    <td className={styles.hide}> <b style={{color:"#6941C6"}} ><a>View.</a> </b></td>
                                </tr>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="row">MTCH SELL</th>
                                    <td>$10,045.00</td>
                                    <td className={styles.hide}>Jan 13, 2022</td>
                                    <td className={styles.hide}><b style={{ backgroundColor: "#ECFDF3", padding: "5px", borderRadius: "10px", color:"#027A48"}}>•Success</b></td>
                                    <td className={styles.hide}>
                                        <List>
                                            <List.Item>
                                                <Image alt="pic" avatar src='Avatar(1).png' />
                                                <List.Content>
                                                    <List.Header>Phoenix Baker</List.Header>
                                                    <List.Description>
                                                        Phoenix@untitedui.com{' '}

                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </td>
                                    <td className={styles.hide}> <b style={{color:"#6941C6"}} ><a>View.</a> </b></td>
                                </tr>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="row">DDOG BUY</th>
                                    <td>$40,132.16</td>
                                    <td className={styles.hide}>Jan 13, 2022</td>
                                    <td className={styles.hide}><b style={{ backgroundColor: "#ECFDF3", padding: "5px", borderRadius: "10px", color:"#027A48"}}>•Success</b> </td>
                                    <td className={styles.hide}>
                                        <List>
                                            <List.Item>
                                                <Image alt="pic" avatar src='Avatar(1).png' />
                                                <List.Content>
                                                    <List.Header>Lana Steiner</List.Header>
                                                    <List.Description>
                                                        lana@untitedui.com{' '}

                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </td>
                                    <td className={styles.hide}> <b style={{color:"#6941C6"}} ><a>View.</a> </b></td>
                                </tr>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="row">ARKG BUY</th>
                                    <td>$22,665.12</td>
                                    <td className={styles.hide}>Jan 13, 2022</td>
                                    <td className={styles.hide}><b style={{ backgroundColor: "#FEF3F2as", padding: "5px", borderRadius: "10px", color: "#B42318"}}>•Declined</b> </td>
                                    <td className={styles.hide}>
                                        <List>
                                            <List.Item>
                                                <Image alt="pic" avatar src='Avatar(1).png' />
                                                <List.Content>
                                                    <List.Header>Demi Wikinson</List.Header>
                                                    <List.Description>
                                                        demi@untitedui.com{' '}

                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </td>
                                    <td className={styles.hide}> <b style={{color:"#6941C6"}} ><a>View.</a> </b></td>
                                </tr>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="row">SQ BUY</th>
                                    <td>$18,221.30</td>
                                    <td className={styles.hide}>Jan 12, 2022</td>
                                    <td className={styles.hide}><b style={{ backgroundColor: "#ECFDF3", padding: "5px", borderRadius: "10px", color:"#027A48"}}>•Success</b></td>
                                    <td className={styles.hide}>
                                        <List>
                                            <List.Item>
                                                <Image alt="pic" avatar src='Avatar(1).png' />
                                                <List.Content>
                                                    <List.Header >Candice Wu</List.Header>
                                                    <List.Description>
                                                        candice@untitedui.com{' '}

                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </td>
                                    <td className={styles.hide}> <b style={{color:"#6941C6"}} ><a>View.</a> </b></td>
                                </tr>
                                <tr>
                                    <th><input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" /></th>
                                    <th scope="row">MSTR SELL</th>
                                    <td>$24,118.18</td>
                                    <td className={styles.hide}>Jan 12, 2022</td>
                                    <td className={styles.hide}><b style={{ backgroundColor: "#ECFDF3", padding: "5px", borderRadius: "10px", color:"#027A48"}}>•Success</b> </td>
                                    <td className={styles.hide}>
                                        <List>
                                            <List.Item>
                                                <Image alt="pic" avatar src='Avatar.png' />
                                                <List.Content>
                                                    <List.Header >Natali Craig</List.Header>
                                                    <List.Description>
                                                        natali@untitedui.com{' '}

                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </td>
                                    <td className={styles.hide}> <b style={{color:"#6941C6"}} ><a>View.</a> </b></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={styles.previous}><Img alt="pic" width={20} height={10} style={{width:"10px"}}  src="/navicons/prev.png"/> Previous</button>
                        <button className={styles.next}>Next <Img alt="pic" width={20} height={10} style={{width:"10px"}} src="/navicons/next.png"/></button>
                    </div>
                </div>
            </div>

        </div>

    )
}
