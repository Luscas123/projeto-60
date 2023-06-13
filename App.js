import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './Config';

export default class App extends Component {
  constructor(){
      super();
      this.state = {teamsRank:[],};
    }

  showRanks = ()=>{
    var teamRef = db.ref("times/");
    var teams = [];
    teamRef.on("value", (data)=>{
     var teamsList = data.val()
     console.log(teamsList)
     for (var t in teamList){
       if (teamsList[t]["isPressed"]===true){
         teamsList[t]["name"]= t
         teams.push(teamsList[t])
       }
     }
     teams.sort(function(t1,t2){
       return t1.time - t2.time
     })
     this.setState ({
       teamsRank: teams
     })
    })
    
  }
    componentDidMount(){
      this.showRanks()
    }
  render() {
    return (
      <View style={{flex:1}}>
      <View>{this.state.teamsRank.map((t)=>(
        <View> <Text>{t.name}</Text></View>
      ))}</View>
      </View>
    );
  }
}
