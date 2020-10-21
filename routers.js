
 import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 import LoginSreen from './screens/loginSreen';
 import DashboardSreen from './screens/dashboardScreen';
 import AuthLoadingSreen from './screens/authLoadingScreen';

 

 const BeforeSignin = createStackNavigator({
     Login : {
         screen: LoginSreen
     }     
 }, {
     headerMode : "none",
     initialRouteName : "Login"
 })

 
 const AfterSignin = createStackNavigator({
    Dashboard : {
        screen: DashboardSreen
    }    
}, {
    headerMode : "none",
    initialRouteName : "Dashboard"
})

const AppNavigator = createStackNavigator({
    Auth : BeforeSignin,
    App : AfterSignin,
    AuthLoadingSreen : AuthLoadingSreen
},{
    headerMode : "none",
    initialRouteName : "Auth"
})

export default createAppContainer(AppNavigator);