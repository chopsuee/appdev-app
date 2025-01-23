import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Following from "./following";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
const TopTab = createMaterialTopTabNavigator();

function TopTabScreen() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#171717", height: 50 }, // Tab bar background
        tabBarIndicatorStyle: { backgroundColor: "#ffffff", height: 3 }, // Underline style
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" }, // Label styles
        tabBarActiveTintColor: "#ffffff", // Active tab label color
        tabBarInactiveTintColor: "#878787", // Inactive tab label color
      }}
    >
      <TopTab.Screen name="For You" component={ForYou} />
      <TopTab.Screen name="Buddy" component={Following} />
    </TopTab.Navigator>
  );
}

function ForYou() {
  const [like, setLike] = useState("heart-outline");

  const toggleLike = () => {
    setLike(like === "heart-outline" ? "heart" : "heart-outline");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717] ">
        <ScrollView className="flex h-full p-5">
          <View className="flex flex-row h-fit rounded-lg p-4 bg-[#313131] mb-5">
            <Image
              className="h-12 w-12 rounded-full"
              source={require("@/assets/images/user-profile/user_profile.jpg")}
            />
            <View className="flex flex-col ml-5">
              <View className="flex flex-row ">
<<<<<<< HEAD
                <Text className=" text-white font-bold">Christian Louie</Text>
=======
                <Text className=" text-white font-bold">Kenneth Hular </Text>
>>>>>>> bc77428bb46a520af69b8b0d2f31fb1f99255d11

                {/* Status indicator */}
                <Text className="pl-2 pr-2">
                  <MaterialCommunityIcons
<<<<<<< HEAD
                    name="notebook"
=======
                    name="image-multiple-outline"
>>>>>>> bc77428bb46a520af69b8b0d2f31fb1f99255d11
                    size={15}
                    color={"#878787"}
                  />
                </Text>

                {/* Online Status */}
                <Text className=" text-white font-light">15h</Text>
              </View>

              {/* Uploaded post */}
              <Text className="text-white max-w-[60vw] ml-2" numberOfLines={10}>
                Sinigang Mix. Paminta, luya Bawang ,sibuyas Kamatis , suka
                OWWRIGHT OWWRIGHT Chippy , tattoos Bangus , Tilapia Chichip ,
                Boy Bawang Tochitos , Fita OWWRIIGHT OWWRIIGHT
              </Text>

              {/* Like/Comment/Whatever */}
              <View className="flex-row mt-4">
                <TouchableOpacity className="mr-2" onPress={toggleLike}>
                  <MaterialCommunityIcons
                    name={like}
                    size={20}
                    color={"#878787"}
                  />
                </TouchableOpacity>

                <Text>
                  <SimpleLineIcons name="bubble" size={20} color={"#878787"} />
                </Text>
              </View>
            </View>
          </View>
<<<<<<< HEAD

          
=======
>>>>>>> bc77428bb46a520af69b8b0d2f31fb1f99255d11
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Stack = createStackNavigator();

export default function IndexLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent", // Transparent background for stack header
          elevation: 0, // Remove Android shadow
          shadowOpacity: 0, // Remove iOS shadow
        },
      }}
    >
      <Stack.Screen name="Index" component={TopTabScreen} />
    </Stack.Navigator>
  );
}
