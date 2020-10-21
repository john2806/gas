import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class DashboardSreen extends React.Component {
 
   doLogout() {
       AsyncStorage.removeItem("token")
       .then(
           res => {
            this.props.navigation.navigate('Auth')
           }
       )
   }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.dashboardScreen}>
              <Text style={styles.userText}>Hey User</Text>
              <TouchableOpacity 
               activeOpacity ={0.8}
              onPressOut  = {() => this.doLogout()}
              style={styles.logoutBtn}>
                  <Text style={styles.logoutText}>Log Out</Text>
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
    userText : {
        fontSize : 30,
        fontWeight : "bold" ,
        marginBottom: 10
    },
    dashboardScreen : {
        textAlign : "center"
    },
    logoutBtn : {
        backgroundColor : "red",
        paddingVertical : 10,
        width : 100,
        alignSelf : "center"
    },
    logoutText : {
        color : "white",
        textAlign : "center",
        fontWeight : "bold"
    }
})