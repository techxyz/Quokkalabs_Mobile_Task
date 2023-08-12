import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  View,
} from 'react-native';
import React from 'react';
import CommonButton from '../../Components/CommonButton';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser, SIgnUp} from '../../store/actions/authActions';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';


const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleLogin = () => {
    const credentials = {
      email,
      password,
      navigation,
    };
    dispatch(LoginUser(credentials));
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  // const handleLogin = () => {
  //   const isEmailValid = validateEmail(email);
  //   const isPasswordValid = validatePassword(password);

  //   setIsEmailValid(isEmailValid);
  //   setIsPasswordValid(isPasswordValid);
  //   if (!isEmailValid) {
  //     Alert.alert('enter valid email');
  //   } else if (!isPasswordValid) {
  //     Alert.alert('enter valid password');
  //   } else if (isEmailValid && isPasswordValid) {
  //     Alert.alert('success');
  //   }
  // };

  const userLogin = () => {
    
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: 'black',
        }}>
        Login
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
        //   keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUP')}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            marginHorizontal: 30,
            color: 'blue',
            textDecorationLine: 'underline',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <CheckBox
          disabled={false}
          
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text> I accept the terms & conditions of the platform</Text>
      </View>
      <View style={{marginTop: 50}}>
        <CommonButton
        toggleCheckBox={toggleCheckBox}
          ButtonTitle={'Login'}
          onPress={() => {
            handleLogin()
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },
  //   button:{

  //   }
});

export default Login;
