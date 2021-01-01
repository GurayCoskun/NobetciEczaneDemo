import React, { Component } from 'react';
import { View,StyleSheet,Image,Text,TouchableOpacity, Platform,Alert,Linking } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

class MainForm extends Component {
          
  render() {
    const {names,dist,address,phone,loc}=this.props;
    return (
      <TouchableOpacity onPress={()=>{
        Alert.alert(
          names+' Eczanesi Adresi',
          address,
          [ { text: 'İptal'},
            {
              text: 'Haritalarda Gör!',
              onPress: () => {
                const url = Platform.select({
                  ios: `maps:0,0?q=${loc}`,
                  android: `geo:0,0?q=${loc}`,
                })
                Linking.openURL(url)
              }
            }
          ],
          { cancelable: false }
        );
      }}>

        <View style={styles.EczaneContainer}>
            <Image source={require('../images/indir.png')}
              style={styles.ImageHolder}
            />
            <View style={styles.InformationEczane}>
                <View style={styles.ContainerIcon}>
                  <Icon3 name="building" size={15} color={'#000'}></Icon3>
                  <Icon2 name="place" size={15} color={'#000'}></Icon2>
                  <Icon2 name="phone" size={15} color={'#000'}></Icon2>
                </View>
                <View style={styles.ContainerInfo}>
                  <Text >{this.props.names} Eczanesi</Text>
                  <Text >{this.props.dist}</Text>
                  <Text >{this.props.phone}</Text>
                </View>
            </View>        
        </View>
      </TouchableOpacity>
    );
  }
}

const styles =StyleSheet.create({
  EczaneContainer:{
      flex:1,
      flexDirection:'row',
      borderWidth:2,
      borderColor:'#f3f3f3',
      marginHorizontal:10
  },
  ImageHolder:{
    maxWidth:75,height:75,
  },
  InformationEczane:{
    flex:1,
    flexDirection:'row',
  },
  ContainerIcon:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  ContainerInfo:{
    justifyContent:'center',
    marginHorizontal:3
  }
  
});
export default MainForm;
