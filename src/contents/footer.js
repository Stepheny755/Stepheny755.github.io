import React from 'react'

class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={`navbar ${this.props.theme}`}>
        <p>&#169; 2020 Stephen Yang </p>
        <div>
        <a className="img_credit" href="https://icons8.com/icon/FXtThR_AHlbf/fog">Fog icon</a>
        <a className="img_credit" href="https://icons8.com/icon/4H0_OmTw4YkP/haze">Haze icon</a>
        <p>by icons8</p>
        </div>
      </div>
    );
  }
}

export default Footer
