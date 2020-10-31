import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ShadowView from 'react-native-simple-shadow-view'

class SignIn extends Component {
  render(){
  return (
  <View style={styles.container}>
     <Text style={styles.headerText}>Welcome </Text>
     <Text style={styles.signInText}>Sign-in </Text>
  
  <ShadowView style={styles.cardEmail}>
     <View style={styles.emailContainer}>
     <TouchableOpacity style={styles.btnEmail } >
      <Text style={styles.emailText}>email</Text>
      </TouchableOpacity> 
     </View>
  </ShadowView>

  <ShadowView style={styles.cardPassword}>
     <View style={styles.passwordContainer}>
     <TouchableOpacity style={styles.btnPassword } >
      <Text style={styles.passwordText}>password</Text>
      </TouchableOpacity> 
     </View>
  </ShadowView>

  <ShadowView style={styles.btnSignup}>
      <Text style={styles.signUpText}>Sign-in</Text>
  </ShadowView>

  <View style={styles.actionsCardItem}>
  <ShadowView style={styles.googlePlus}>
      <Text style={styles.star}>
      <Icon name="google-plus" size={22} />
      </Text>
  </ShadowView>

  <ShadowView style={styles.twitter}>
       <Text style={styles.like}>
       <Icon name="twitter" size={24} />
       </Text>
  </ShadowView>

  <ShadowView style={styles.googlePlus}>
       <Text style={styles.dislike}>
       <Icon name="facebook" size={24} />
       </Text>
  </ShadowView>
 </View>
</View>
    )
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'silver'
  },
 
  cardEmail:{
    height: "11%",
    width:'85%',
    shadowColor: 'white',
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowOffset: { width: 4, height: 4 },
    backgroundColor: '#d6d5ea',
    marginTop:28,
    marginHorizontal:29,
   borderRadius:22,
  },

  cardPassword:{
    height: "11%",
    width:'85%',
    shadowColor: 'white',
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowOffset: { width: 4, height: 4 },
    backgroundColor: '#d6d5ea',
    marginTop:38,
    marginHorizontal:29,
    borderRadius:22,
  },

  emailContainer:{
    flex:1,
    flexDirection:'row',
  },

  passwordContainer:{
    flex:1,
    flexDirection:'row',
  },

  btnSignup:{
    width:"40%",
    borderRadius: 30,
    marginTop:43,
    marginHorizontal:120,
    paddingVertical:9,
    shadowColor: 'white',
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowOffset: { width: -4, height: -4 },
    backgroundColor: '#d6d5ea',
  },
  
  btnEmail: {
    width:"89%",
    backgroundColor:"#ff6d80",
    borderRadius: 19,
    marginVertical:10,
    marginHorizontal:18
  },

  emailText: {
    fontSize:22,
    color:'#ffffff',
    textAlign:'center',
    marginVertical:8,
  },

  btnPassword: {
    width:"89%",
    backgroundColor:"#ff6d80",
    borderRadius: 19,
    marginVertical:10,
    marginHorizontal:18
  },

  passwordText: {
    fontSize:22,
    color:'#ffffff',
    textAlign:'center',
    marginVertical:8,
  },
  
  signUpText: {
    fontSize:28,
    color:'black',
    textAlign:'center',
    marginVertical:8,
    fontFamily:'Effra Bold'
  },

  actionsCardItem: {
    width:'80%',
		flexDirection: "row",
    alignItems: "center",
    backgroundColor:'silver',
    marginTop:30,
    marginHorizontal:36
  },

  googlePlus:{
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#d6d5ea',
    marginHorizontal: 90,
    alignItems: "center",
    justifyContent: "center",	  
    shadowColor: 'white',
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowOffset: { width: -3, height: -3 },
  },

  twitter:{
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#d6d5ea',
    marginHorizontal: -80,
    alignItems: "center",
    justifyContent: "center",	  
    shadowColor: 'white',
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowOffset: { width: -3, height: -3 },
  },

	star: {
		color: '#ff6d80'
  },
  
	like: {
		color: '#ff6d80'
  },

  dislike: {
		color: '#ff6d80'
  },

  headerText:{
    fontSize:23, 
    marginHorizontal:40,
    marginTop:80,
    fontWeight:'600'
  },
  
  signInText:{
    fontSize:32, 
    marginHorizontal:40,
    fontFamily:'Effra Bold',
    lineHeight:50
  },
});

export default SignIn;
