import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from '../firebase'

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

//formik
import { Formik } from "formik";

import {StyledContainer, 
        InnerContainer, 
        PageLogo, PageTitle, 
        SubTitle, StyledFormArea, 
        LeftIcon, StyledInputLabel, 
        StyledTextInput, RightIcon, 
        Colors, StyledButton, 
        MsgBox, ButtonText,
        ExtraText, ExtraView, 
        TextLink, TextLinkContent, Line } from './../components/styles';

import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import {View} from 'react-native';


const{brand, darkLight} = Colors;

const KatlendarSignup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSignUp = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.messsage))
    }

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageTitle>Katlendar</PageTitle>
                <SubTitle>Account Sign Up</SubTitle>

                <Formik
                    initialValues={{ email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput
                            icon = "person"
                            placeholder="First Name"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('Fname')}
                            onBlur={handleBlur('email')}
                            value={values.firstName}
                            keyboardType="email-address"
                        />

                        <MyTextInput
                            icon = "person"
                            placeholder="Last Name"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('Lname')}
                            onBlur={handleBlur('email')}
                            value={values.lastName}
                            keyboardType="email-address"
                        />

                            <MyTextInput
                            icon = "mail"
                            placeholder="Student Email Address"
                            placeholderTextColor={darkLight}
                            onChangeText={text => setEmail(text)}
                            onBlur={handleBlur('email')}
                            value={email}
                            keyboardType="email-address"
                        />

                            <MyTextInput
                            icon = "lock"
                            placeholder="Password"
                            placeholderTextColor={darkLight}
                            onChangeText={text => setPassword(text)}
                            onBlur={handleBlur('password')}
                            value={password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />                  
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress = {handleSignUp}>
                            <ButtonText>Sign Up</ButtonText>    
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkContent>  Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};


const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name ={icon} size={25} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} /> 
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={25} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default KatlendarSignup;