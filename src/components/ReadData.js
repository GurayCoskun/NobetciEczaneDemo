import React, { Component } from 'react';
import { View,  ActivityIndicator, FlatList,  StyleSheet , SafeAreaView} from 'react-native';
import MainForm from './MainForm'
import axios from 'axios'
class ReadData extends Component {
  state={
    isLoading:true,
    dataSource:[],
  }
  readingData(sehir){
    axios.get('https://api.collectapi.com/health/dutyPharmacy?ilce?&il='+sehir,{
      headers : {
        'content-type': "application/json",
        'authorization': "apikey 0QcKg03Uv6qLU5wcKMsobC:4Buq57LMeKaHA0Feef5bTs"
        }
    }).then(res => (res.data.result))
    .then(res =>{
      this.setState({
        isLoading:false,
        dataSource:res
      });
    }).catch(function (error) {
      console.log(error)
    });
  }

  componentWillReceiveProps(nProps){
    this.readingData(nProps.sehir);
  }

  renderContactsItem=(  {item,index})=>{
    return(
      <MainForm
      names={item.name}
      dist={item.dist}
      address={item.address}
      phone={item.phone}
      loc={item.loc}
      />
    )
  }
  componentDidMount(){
    this.readingData(this.props.sehir);
};

  render() {
    const {sehir}=this.props;
    if(this.state.isLoading){
      return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="small" color="#0000ff" />
        </View>
      );
    }
    return (
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderContactsItem}
          keyExtractor={(item,index)=>index.toString()}
        >
        </FlatList>
    );
  }
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default ReadData;
