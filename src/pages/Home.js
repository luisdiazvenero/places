import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


import {indigo400} from 'material-ui/styles/colors';

import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import data from '../request/places';

export default class Home extends React.Component{

  places(){
    return data.places.map((place,index)=>{
      return(
        <PlaceCard place={place} index={index}></PlaceCard>
      )
    })
  }

  render(){
    return(
      <section>
        <div className="Header-background">
          <div style={{"width":"80%","margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>

              <RaisedButton label="Crear cuenta gratuita" secondary={true}/>

              <img className="Header-illustration" src={process.env.PUBLIC_URL + 'images/top-background.png'} height="300"></img>
              </div>

              <div>
                <Benefits/>
              </div>
          </div>


        </div>

        <div style={{'backgroundColor': indigo400, 'padding': '50px', color: 'white'}}>
          <h3 style={{'fontSize': '24px'}}>Sitios Populares</h3>
          <div className="row">{this.places()}</div>

        </div>
      </section>
    )
  }
}
