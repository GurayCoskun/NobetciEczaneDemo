import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import ReadData from './ReadData'
import cities from '../../data/cities.json'
import DropDownPicker from 'react-native-dropdown-picker';


class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Ankara',
      isLoading:true,
      dropdownData:[],
      
    };
  }
  componentDidMount(){
    var tempDataArray = [];
    for(var i=0;i<81;i++){
      tempDataArray.push(
        cities.result[i]
      );
    }
    this.setState({
      dropdownData: tempDataArray
    });
  }
  handlerClick=(selection,row)=>{
    this.setState({selected: data[selection][row]});
  }

  render() {
    return (
      <View style={styles.Main}>
          <DropDownPicker
              items={this.state.dropdownData}
              containerStyle={{height: 40}}
              style={{flex: 1}}
              placeholder='Ankara'
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              onChangeItem={item => this.setState({
                selected: item.value
              })}
          >          
          </DropDownPicker>  
         <ReadData
          sehir={this.state.selected}
         />
    </View>  
    );
  }
}
const styles =StyleSheet.create({
  Main:{
    zIndex: 10,
    flex:1,
  },
  DropDownStyle:{
    flex:1,
    backgroundColor: '#fafafa',
  }
});
export default NavBarForm;
