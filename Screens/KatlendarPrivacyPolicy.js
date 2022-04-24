import React, { Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Colors } from '../components/styles';
import { Image } from 'react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width / 2 - 30

const KatlendarPrivacyPolicy = ({ navigation }) => {

    
    return(
        <SafeAreaView style={{flex: 1, paddingHorizontal: 20, backgroundColor: Colors.white}}>
            <ScrollView>
                <View style={style.header}>
                    <View style={{flexDirection: 'row', marginLeft:70}}>
                        <Image source={require('C:/Users/aaron/katlendar_project/assets/bearkatface.png')}style={{width: 50, height: 60, marginRight: 10}}/>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: Colors.orange, marginTop: 17 }}>KATlendar</Text>
                    </View>
                </View>
                {/* Subheader for Privacy Policy title */}
                <View style={style.header}>
                    <Text style={{fontSize: 31, fontWeight: 'bold', color: Colors.black, marginTop: 17, }}>Privacy and Security Policy</Text>
                </View>
                {/* Description of the policy */}
                <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black, marginTop: 5, }}>
                    {"Your privacy and security are important to us! Please read about how we use and collect your data, and what we do to keep you and your data safe.\n "}
                </Text>
                {/* Subheader for Data Collection and Usage */}
                <View style={style.subheader}>
                    <Text style={{fontSize: 31, fontWeight: 'bold', color: Colors.black, marginTop: 1, }}>Data Collection & Usage</Text>
                </View>
                {/* Text for Privacy Policy */}
                <View style={style.subheader}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black, marginTop: 1}}>
                        {"Our applications uses the following personal information from you and for our service: \n \n"}
                        {"Your name, email address, and location data \n \n"}
                        {"This information is only collected to operate our service, and will NOT be sold/shared with any third party. However, we reserve the right to use your data for our own analytical and technical use to imrove the service. \n \n"}
                    </Text>
                </View>
                {/* Subheader for Security */}
                <View style={style.subheader}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: Colors.black, marginTop: 1}}>Security</Text>
                </View>
                {/* Text for Security */}
                <View style={style.subheader}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black, marginTop: 1}}>
                        {"put something"}
                        {"put something"}
                        {"put something"}
                        {"put something"}
                        {"put something"}
                        {"put something"}
                        {"put something"}
                    </Text>
                </View>
                {/* Text for final remarks and last updated */}
                <View style = {style.header}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black, marginTop: 1, }}>
                        {"Put something"}
                    </Text>
                </View>
                <View style={style.subheader}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.black, marginTop: 1}}>
                        {"Put something"}
                    </Text>
                </View>
                {/* Buttons for declining and accepting the policy */}
            </ScrollView>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                {/* No button requires platform specific implementation so left to do nothing */}
                <TouchableOpacity onPress={null}>
                    <View style={style.NoBtn}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.white, marginTop: 1 }}>
                            {"Disagree"}
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* I agree button */}
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <View style={style.YesBtn}>
                        <Text style={{ fontSize: 15, color: Colors.white, fontWeight: 'bold'}}>I Accept</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    )
};


const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subheader: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        backgroundColor: Colors.green,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.orange,
        flex: 1,
    },
    YesBtn: {
        marginLeft: 30,
        marginBottom: 25,
        height: 50,
        width: 150,
        backgroundColor: Colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    NoBtn: {
        marginLeft: 30,
        height: 50,
        width: 150,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 15,
        color: "grey",
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: Colors.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: Colors.green,
    },
    card: {
        height: 225,
        backgroundColor: Colors.orange,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
});


export default KatlendarPrivacyPolicy;