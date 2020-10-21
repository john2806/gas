import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class loginSreen extends React.Component {
 
    state = {
        username:"",
        password: "" ,
        loading: false
    }

    onChangeHandle(state, value) {
        this.setState({
            [state] : value
        })
    }

    doLogin () {

        const {username, password} = this.state;
        if(username && password) {
            const req = {
            
                "email": username,
                "password": password            
        }
        this.setState({
            loading :true
        })
        axios.post("https://reqres.in/api/login", req)
        .then(
            res => {
                this.setState({
                    loading :true
                })
                // console.warn(res.data.token);
                AsyncStorage.setItem("token", res.data.token)
                .then(
                    res => {
                        this.props.navigation.navigate('App');
                        alert("Login Successful!!!");
                    }
                );
               
            },
            err => {
                this.setState({
                    loading :true
                })
                alert("Username or password is wrong");
            }
        )
        } else {
            alert("Enter username & password");
        }
       
    }
  render() {
      const {username, password, loading} = this.state;
    return (
      <View style={styles.container}>
        <View
            style={styles.formWrapper}
        >
            <Text style={styles.welcomeText}>Welcom back user</Text>
            <View 
                style={styles.formRow}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder = "Enter Username"
                    placeholderTextColor="#333"
                    value = {username}
                    onChangeText={(value) => this.onChangeHandle('username', value)}
                />
            </View>
            <View 
                style={styles.formRow}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder = "Enter Password"
                    placeholderTextColor="#333"
                    secureTextEntry={true}
                    value = {password}
                    onChangeText={(value) => this.onChangeHandle('password', value)}
                />
            </View>
            <TouchableOpacity 
                activeOpacity ={0.8}
                style={{...styles.signinBtn,
                        backgroundColor : loading ? "pink" :  "blue"
                    }} 
            onPressOut  = {() => this.doLogin()}
            disabled={loading}
                >
                <Text style={styles.signinTxt}>{loading ? "Loading...": "SIGN IN"}</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    container : {
        height : "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        width : "80%"
    }, 
    formRow: {
        marginBottom: 10 
    },
    textInput : {
        backgroundColor : "#ddd",
        height: 40,
        paddingHorizontal : 10,
        color: "#333"
    },
    welcomeText : {
        textAlign: "center",
        marginBottom : 30,
        fontSize : 24,
        fontWeight: "bold"
    },
    signinBtn: {
        paddingVertical : 10
    },
    signinTxt :{
        textAlign : "center",
        color : "#fff",
        fontSize : 18,
        fontWeight : "bold"
    }
})