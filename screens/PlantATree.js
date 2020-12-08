import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';


import db from '../config';
import firebase from 'firebase';



export default class UserRegister extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:'false'
    }
  } 

  render(){
    return(
        <View style={styles.container}>
        <Text
        style={styles.title}
        >VOLUNTEER REGISTRATION</Text>
         <TextInput
          style={styles.loginBox}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
           <TextInput
          style={styles.loginBox}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.loginBox}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
                <TextInput
          style={styles.loginBox}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
         <TextInput
          style={styles.loginBox}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />
        <TextInput
          style={styles.loginBox}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TextInput
          style={styles.loginBox}
          placeholder ={"Confrim Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
          <TouchableOpacity
            style={styles.button}
            onPress={()=>
                Alert.alert("volunteer registered sucessfully")
            }
          >
          <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>Alert.alert("idk wat to do")}
          >
          <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          </View>  
       
    
    )}
}

const styles = StyleSheet.create({
  container:{
   flex:1,
  backgroundColor:"#420642",
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:40,
   fontWeight:'400',
   paddingTop:50,
   paddingRight:10,
   color : 'white',
   textAlign:"center"
 },
 loginBox:{
   width: 300,
   
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : 'white',
   fontSize: 20,
   margin:8,
   paddingLeft:10
 },
 fun:{
  fontSize:15,
  fontWeight:'200',
  
  paddingBottom:10,
  paddingRight:20,
  color : 'white',
  textAlign:'center'
},
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   color:"#0D2036"
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#420642',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"white",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#420642',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#420642',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"white",
   shadowColor: "#f01024",
  
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 20,
   marginBottom:10
 },
 buttonText:{
   color:'#420642',
   fontWeight:'200',
   fontSize:20
 }
})
