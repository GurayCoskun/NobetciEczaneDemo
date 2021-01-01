import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import NavBarForm from './src/components/NavBarForm'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex: 1}}>
            <NavBarForm/>
        </View>
      </SafeAreaView>
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
export default App;
