import styles from "../../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import { CountryDropdown } from 'react-country-region-selector';
import React, { Component,  } from 'react'

export default class Details extends Component {
    state = { country: '', region: '' };
    

    selectCountry(val) {
        this.setState({ country: val });
    }

    render() {
        const { country, region } = this.state;
        
        return (
            <div className={styles.details}>
                <div className={styles.cover}>
                </div>
                <div className={styles.user}>
                    <div className={styles.circle}>
                        <img src='profilephoto.png'></img>
                    </div>
                    <div className={styles.userinfo}>
                        <h2>
                            Tofunmi Sojimi
                        </h2>
                        <p>tofunmi@untitledui.com</p>
                        <div className={styles.userbtn}>
                            <button type="button" className={styles.btn1}>Share</button>
                            <button style={{ marginLeft: "10px" }} type="button" className={styles.btn2}>Profile</button>
                        </div>
                    </div>
                    <div className={styles.personalinfo}>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4>Personal info</h4>
                                <p style={{ marginTop: "-5px", color: "grey" }}>Update your photo and personal details</p>
                            </div>
                            <div className="col-sm-9">

                                <div className="card" style={{ width: "95%" }}>

                                    <div className="card-body">
                                        <br />
                                        <div className='row mb-3'>
                                            <div className="col">
                                                <label for="exampleFormControlInput1" className="form-label">First name</label>
                                                <input value="Damilola" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput1" className="form-label">Last name</label>
                                                <input value="Tomilayo" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                                            <input value="Tomilayojesse@gmail.com" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <br />
                                        <div className="mb-3">
                                            <div className='row'>
                                                <div className='col-sm-2'>

                                                    <img style={{ width: "60px", borderRadius: "100%", height: "55px" }} src="pp.png"></img></div><div className='col-sm-10'>
                                                    <div className={styles.dragdrop}>
                                                        <img src='navicons/import.png'></img>
                                                        <p> <span style={{ color: "#6941C6" }} >Click to upload</span> or drag and drop </p>
                                                        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.detailsbtn}>
                                            <button type="button" className={styles.btn1}>Cancel</button>
                                            <button style={{ marginLeft: "10px" }} type="button" className={styles.btn2}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.portfolio}>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4>Profile</h4>
                                <p style={{ marginTop: "-5px", color: "grey" }}>Update your portfolio and bio</p>
                            </div>
                            <div className="col-sm-9">

                                <div className="card" style={{ width: "95%" }}>

                                    <div className="card-body">
                                        <br />
                                        <div className='row mb-3'>
                                            <h4>Available for projects</h4>
                                            <p style={{ marginTop: "-6px" }}>I'm open and Available for freelance work</p>
                                        </div>
                                        <div className='row mb-3'>
                                            <label for="basic-url" className="form-label">Username</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">untitledui.com/</span>
                                                <input value="Tomilayo" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>

                                            <label for="basic-url" className="form-label">Website</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon3">https://</span>
                                                <input value="www.untitledui.com" type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
                                            <textarea value="i'm a Product Designer based in Nigeria, Lagos. I specialise in web development and brand strategy" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <p style={{ colors: "grey" }}>275 characters left</p>
                                        </div>

                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Country</label>
                                            <br />
                                            <CountryDropdown
                                                value="Nigeria"
                                                type="drop"
                                                className="btn btn-secondary dropdown-toggle"
                                                onChange={(val) => this.selectCountry(val)} />

                                        </div>
                                        <div className={styles.detailsbtn}>
                                            <button type="button" className={styles.btn1}>Cancel</button>
                                            <button style={{ marginLeft: "10px" }} type="button" className={styles.btn2}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
