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
import {SIgnUp} from '../../store/actions/authActions';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const SignUP = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  const handleLogin = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setIsEmailValid(isEmailValid);
    setIsPasswordValid(isPasswordValid);
    if (!isEmailValid) {
      Alert.alert('enter valid email');
    } else if (!isPasswordValid) {
      Alert.alert('enter valid password');
    } else if (isEmailValid && isPasswordValid) {
     
      const credentials = {
        email,
        password,
        navigation,
        validatePassword,
        validateEmail,
      };
      dispatch(SIgnUp(credentials));
    }
  };
  // const createUser = () => {
  //   // handleLogin()
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       Alert.alert('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         Alert.alert('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         Alert.alert('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: 'black',
        }}>
        Sign UP
      </Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter you name"
      /> */}
      <TextInput
        style={styles.input}
        onChangeText={txt => setEmail(txt)}
        value={email}
        placeholder="Enter you email"
      />
      <TextInput
        style={styles.input}
        onChangeText={txt => setPassword(txt)}
        value={password}
        placeholder="Enter your password"
        // keyboardType="numeric"
      />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.heading}>Sign In</Text>
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
      <CommonButton
        ButtonTitle={'Sign Up'}
        onPress={() => {
         
          handleLogin();
        }}
        toggleCheckBox={toggleCheckBox}
      />
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
  button: {
    width: 400,
    height: 50,
    backgroundColor: 'red',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: 'blue',
    textDecorationLine: 'underline',
    marginHorizontal: 30,
  },
});

export default SignUP;
