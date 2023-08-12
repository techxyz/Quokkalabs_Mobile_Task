import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './authTypes';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const SIgnUp = ({email,password,navigation}) => {
    
   
  return dispatch => {
    dispatch(loginRequest());
    auth()
      .createUserWithEmailAndPassword(email,password)
      .then((res) => {
        // console.log(res,'===================>')
        console.log('User account created & signed in!');
        navigation.navigate('DrawerNavigator')
        
       
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
};
export const LoginUser =({email,password, navigation}) => {
    
   
    return dispatch => {
      dispatch(loginRequest());
      auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('success'), navigation.navigate('DrawerNavigator');
      })
      .catch(error => {
        console.log(error);
      });
       
    };
  };
