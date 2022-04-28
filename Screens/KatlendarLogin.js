import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from '../firebase'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

//react navigation
import { useNavigation } from "@react-navigation/native";

//formik
import { Formik } from "formik";

import {
    StyledContainer,
    InnerContainer,
    PageLogo, PageTitle,
    SubTitle, StyledFormArea,
    LeftIcon, StyledInputLabel,
    StyledTextInput, RightIcon,
    Colors, StyledButton,
    MsgBox, ButtonText,
    ExtraText, ExtraView,
    TextLink, TextLinkContent, Line
} from './../components/styles';

import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { View } from 'react-native';


const { brand, darkLight, green, white } = Colors;

const KatlendarLogin = ({ navigate }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })

        return unsubscribe
    }, [])


    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in With:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./assets/bearkatface.png')} />
                <PageTitle>KATlendar</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
                        <MyTextInput
                            icon="mail"
                            placeholder="Email Address"
                            placeholderTextColor={darkLight}
                            onChangeText={text => setEmail(text)}
                            onBlur={handleBlur('email')}
                            value={email}
                            keyboardType="email-address"
                        />

                        <MyTextInput
                            icon="lock"
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
                        <StyledButton onPress={handleLogin}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent>  Sign Up</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={25} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={25} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default KatlendarLogin;

