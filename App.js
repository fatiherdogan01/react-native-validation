import React, { Component } from 'react';
import { View, StyleSheet ,TextInput,Alert} from 'react-native';
export default class App extends Component {
   constructor(props){
		 super(props)
		 this.state={
			 in1:'',in2:'',in3:''
		 }
	 }
 i0100=(input)=>{
		let value=/^0*(?:([0-9]|[1-8][0-9]|9[0-9]|100))$/
		return value.test(input)
	   }
	   _onBlur(v){
	     if(this.i0100(v)){
	       this.setState({in1:v})
	     }
	     else{
	     this.setState({in1:''}) 
			 Alert.alert('Invalid Value !!')
	    	}
	   }
	    intdec=(input)=>{
		let value=/^0*(?:\d*\.)?\d+$/
		return value.test(input)
	   }
	   _onBlur2(v){
	     if(this.intdec(v)){
	       this.setState({in2:v})
	     }
	     else{
	       this.setState({in2:''}) 
			 Alert.alert('Invalid Value !!')
		}
	   }
	      email=(input)=>{
	let value=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return value.test(input)
	   }
	   _onBlur3(v){
	     if(this.email(v)){
	       this.setState({in3:v})
	     }
	     else{
	       this.setState({in3:''}) 
			 Alert.alert('Invalid Value !!')
		}
	   }
  render() {
    return (
      <View style={styles.container}>
       <TextInput 
    onChangeText={(v)=>this.setState({in1:v})}	
		onBlur={()=>this._onBlur(this.state.in1)}
		placeholder='Enter value (0-100)'
		keyboardType='numeric'
		style={{width:180,height:40}}
		maxLength = {3}
		value={this.state.in1}
		/>
		  <TextInput
		onChangeText={(v)=>this.setState({in2:v})}
		onBlur={()=>this._onBlur2(this.state.in2)}
		placeholder='Only integer & decimal'
		keyboardType='numeric'
		style={{width:180,height:40}}
	  value={this.state.in2}
		/>
		 <TextInput
		onChangeText={(v)=>this.setState({in3:v})}
		onBlur={()=>this._onBlur3(this.state.in3)}
		placeholder='Enter email-address'
		keyboardType='email-address'
		style={{width:180,height:40}}
	  value={this.state.in3}
		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
