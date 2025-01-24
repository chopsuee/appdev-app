import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import IndexLayout, { ForYou } from ".";
import UploadScreen from "./upload";
import { View } from "react-native";
import ExpoloreScreen from "./explore";
import NotificationScreen from "./notification";
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { Platform } from "react-native";
import ProfileScreen from "./profile";

function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#171717" }, // Dark background for bottom tab bar
        tabBarLabelStyle: { color: "#ffffff" }, // White text for labels
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={IndexLayout} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: { display: "none" }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> // Home icon
          ),
        }}
      />

      <BottomTab.Screen
        name="Explore"
        component={ExpoloreScreen} // Showing the TopTabScreen component here
        options={{
          headerShown: true,
          headerStyle: {
            paddingTop: 0,
            height: 60,
            backgroundColor: "#313131",
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerTitleStyle: {
            fontSize: 18,
            color: "#ffffff",
            top: -10
          },
      
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Create Post"
        component={UploadScreen} // Showing the TopTabScreen component here
        options={{
          headerShown: true,
          headerStyle: {
            paddingTop: 0,
            height: 60,
            backgroundColor: "#313131",
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerTitleStyle: {
            fontSize: 18,
            color: "#ffffff",
            top: -10
          },
      
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />

<BottomTab.Screen
  name="Notification"
  component={NotificationScreen}
  options={{
    headerShown: true,
    headerStyle: {
      paddingTop: 0,
      height: 60,
      backgroundColor: "#313131",
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitleStyle: {
      fontSize: 18,
      color: "#ffffff",
      top: -10
    },

    tabBarLabelStyle: { display: "none" },
    tabBarIcon: ({ color, size }) => (
      <Icon name="bell" color={color} size={size} />
    ),
  }}
/>

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen} // Showing the TopTabScreen component here
        options={{
          tabBarLabelStyle: {
            display: "none",
          }, // Hide label for the icon
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} /> // Home icon
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function TabLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent", // Transparent background for stack header
          elevation: 0, // Remove Android shadow
          shadowOpacity: 0, // Remove iOS shadow
        },
        headerTintColor: "transparent", // Hide any back icon or text
      }}
    >
      <Stack.Screen name="Root" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}
