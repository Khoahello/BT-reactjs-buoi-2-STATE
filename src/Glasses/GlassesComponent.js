import React, { Component } from 'react'
import { glassesArr } from './data'

export default class GlassesComponent extends Component {
  renderListGlasses = () => {
    return glassesArr.map((item) => {
        let {url, id} = item
        return (
            <div className='col-md-2' onClick={() => {
              this.handleChangeGlasses(`${id}`)
            }}>
                <img src={url} alt="" style={{ width: "80%", border: "0.5px solid black", marginTop: "10px", cursor: "pointer"}} />
            </div>
        )
    })
  }

  state = {
    glassesId: "",
    name: "",
    desc: ""
  }
  handleChangeGlasses = (glassesId) => {
    this.setState({glassesId: glassesId})
    this.setState({name: glassesArr[glassesId - 1].name})
    this.setState({desc: glassesArr[glassesId - 1].desc})
  }
  render() {
    let imgPath=`./glassesImage/v${this.state.glassesId}.png`
    return (
      <div className="" style={{height:"600px", backgroundImage: "url(./glassesImage/background.jpg)", backgroundSize: "cover"}}>
        <><header className='text-white' style={{ width: "100%", height: "50px", background: "gray", display: "fix", opacity: "0.8" }}>
          <h3 style={{ textAlign: "center", top: "50%", paddingTop: "10px", opacity: "1" }}>TRY GLASSES APP ONLINE</h3>
        </header>
        <section className='mt-5'>
          <div className="row" style={{marginLeft: "300px"}}>
            <div className="col-md-5">
              <div className="card text-white" style={{width: "50%"}}>
                <img className="card-img" src="./glassesImage/model.jpg" alt="Card image"/>
                <div className="card-img-overlay">
                  <img src={imgPath} alt="" style={{width: "65%", marginTop: "40px", opacity: "0.5"}}/>
                </div>
                <div className="card-img-overlay text-left h-100 d-flex flex-column justify-content-end" style={{padding: "0"}}>
                  <h6 className="card-title" style={{color: "blue", marginBottom: "0px", background: "orange", opacity: "0.5"}}>{this.state.name}</h6>
                  <p className="card-text" style={{fontSize: "12px", background: "orange", opacity: "0.5"}}>{this.state.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card text-white" style={{width: "50%"}}>
                <img className="card-img" src="./glassesImage/model.jpg" alt="Card image"/>
                <div className="card-img-overlay text-left h-100 d-flex flex-column justify-content-end" style={{padding: "0"}}>
                </div>
              </div>
            </div>
          </div>
        </section></>

        <section style={{padding: "0 250px 0 250px", marginTop: "50px"}}>
          <div style={{background: "white", padding: "10px"}}>
            <div className="row">
            {this.renderListGlasses()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
