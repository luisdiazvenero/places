import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText} from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

import Title from './components/Title';

import './App.css';

class App extends Component {



  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{"width":"80%","margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>

              <RaisedButton label="Crear cuenta gratuita" secondary={true}/>

              <img className="Header-illustration" src={process.env.PUBLIC_URL + 'images/top-background.png'} height="300"></img>
              </div>

              <div>
                <ul>
                  <Card className="Header-Benefit">
                    <CardText>
                      <div className="row">
                        <div className="Header-Benefit-image" style={{'backgroundColor': redA400}}>
                          <img src={process.env.PUBLIC_URL + '/images/heart.png'}></img>
                        </div>
                        <div className="Header-Benefit-content">
                          <h3>Calificaciones con emociones</h3>
                          <p>Califica tus lugares con experiencias, no con números</p>
                        </div>
                      </div>
                    </CardText>
                  </Card>
                  <Card className="Header-Benefit">
                    <CardText>
                      <div className="row">
                        <div className="Header-Benefit-image" style={{'backgroundColor': lightBlueA400}}>
                          <img src={process.env.PUBLIC_URL + '/images/no-wifi.png'}></img>
                        </div>
                        <div className="Header-Benefit-content">
                          <h3>¿Sin internet? Sin problemas</h3>
                          <p>Places funciona sin internet o en conexiones lentas</p>
                        </div>
                      </div>
                    </CardText>
                  </Card>
                  <Card className="Header-Benefit">
                    <CardText>
                      <div className="row">
                        <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
                          <img src={process.env.PUBLIC_URL + '/images/star.png'}></img>
                        </div>
                        <div className="Header-Benefit-content">
                          <h3>¿Sin internet? Sin problemas</h3>
                          <p>Places funciona sin internet o en conexiones lentas</p>
                        </div>
                      </div>
                    </CardText>
                  </Card>
                </ul>
              </div>
          </div>


        </div>

        <div style={{'backgroundColor': indigo400, 'padding': '50px'}}>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
