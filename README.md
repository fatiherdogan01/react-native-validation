# react-native-validation

```JS
i0100=(input)=>{
	let value=/^0*(?:([0-9]|[1-8][0-9]|9[0-9]|100))$/
	return value.test(input)
	   }
 ```
     
 ```JS
 _onBlur(v){
	     if(this.i0100(v)){
	     this.setState({in1:v})
	     }
	     else{
	     this.setState({in1:''})
			 Alert.alert('Invalid Value !!')
	    	}
	   }
  ```
  ```JS
    <TextInput 
    onChangeText={(v)=>this.setState({in1:v})}	
		onBlur={()=>this._onBlur(this.state.in1)}
		placeholder='Enter value (0-100)'
		keyboardType='numeric'
		style={{width:180,height:40}}
		maxLength = {3}
		value={this.state.in1}
		/>
  ```
### Outputs
<img src="https://github.com/fatiherdogan01/react-native-validation/blob/master/assets/validation.gif" width="300" height="400">
