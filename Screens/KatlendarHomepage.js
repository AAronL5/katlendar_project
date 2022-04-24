// import * as React from 'react';
// import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import assets from 'C:/Users/aaron/katlendar_project/assets/katlendarPicture.png';

// const KatlendarHomepage = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#FDB44E'
//  }}> 
//       <Text>Welcome to Katlendar</Text>
//       <Text>Check out our events and calendar from the tab below! </Text>
//     </View>
//   );
// };

// function Events({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: '#FDB44E'}}>
//       <Text>Event Details</Text>
//       <Text>We will have events soon!</Text>
//       <Pressable
//         onPress={() => navigation.navigate('Calendar')}
//         style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
//       >
//       <Text>Go to Calendar</Text>
//       </Pressable>
//     </View>
//   );
// }

// function Calendar({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#FDB44E'}}>
//       <Text>This is where your calendar will be! </Text>
//       <Pressable
//         onPress={() => navigation.navigate('Events')}
//         style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
//       >
//       <Text>Go to Events</Text>
//       </Pressable>
//     </View>
//   );
// }

// function MyAccount({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#FDB44E' }}>
//       <Text>This is where your settings are! </Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//      <NavigationContainer>
//       <Tab.Navigator 
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Home Page') {
//               iconName = focused
//                 ? 'ios-home'
//                 : 'ios-home';
//             } else if (route.name === 'Events') {
//               iconName = focused ? 'ios-list' : 'ios-list';
//             } else if (route.name === 'Calendar'){
//               iconName = focused ? 'ios-calendar' : 'ios-calendar';
//             } else if (route.name === 'My Account') {
//               iconName = focused ? 'ios-people' : 'ios-people';
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'blue',
//         }}>
//         <Tab.Screen name="Home Page" component={KatlendarHomepage}  />
//         <Tab.Screen name="Events" component={Events} />
//         <Tab.Screen name="Calendar" component={Calendar}  />
//         <Tab.Screen name="My Account" component={MyAccount} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// export default App;
