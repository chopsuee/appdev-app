import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeCard from "@/components/material/HomeCard";
import ReplyCard from "@/components/material/ReplyCard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Feeds() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="flex-1 flex m-5">
            <View className="Profile flex flex-col p-2 justify-center">
              <View className="flex flex-row items-center justify-around">
                <View className="flex flex-col ">
                  <Image
                    className="w-32 h-32 rounded-full"
                    source={require("@/assets/images/explore-profile/iryll.jpg")}
                  />
                  <Text className="mt-5 text-white text-lg text-center">
                    Iryll Mahn
                  </Text>
                  <Text className=" text-white font-light text-center">
                    @itsRealIryll
                  </Text>
                </View>

                <View className="flex flex-col items-center">
                  <Text>20</Text>
                  <Text>Followers</Text>
                </View>

                <View className="flex flex-col items-center">
                  <Text>25</Text>
                  <Text>Buddies</Text>
                </View>
              </View>

              <View></View>
            </View>

            {/* Add the BodyLayout inside the ScrollView here */}
            <BodyLayout />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export function Home() {
    return (
<SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-[#171717]">
           <HomeCard/>
    </SafeAreaView>
</SafeAreaProvider>
    );
  }

export function Replies() {
  return (
<SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-[#171717]">
           <ScrollView className="p-5">
           <ReplyCard/>
            </ScrollView> 
    </SafeAreaView>
</SafeAreaProvider>
  );
}

export function Bump() {
  return (
    <View className="flex-1 bg-[#171717] items-center justify-center">
       <MaterialCommunityIcons name="heart-broken" size={20} color="#878787" />
      <Text>No Bumps so Far</Text>
    </View>
  );
}



const Stack = createMaterialTopTabNavigator();
export function BodyLayout() {
  return (
    <Stack.Navigator 
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: "#171717", 
          height: 50,
          elevation: 0, // Remove Android shadow
          shadowOpacity: 0, // Remove iOS shadow
        },
        tabBarIndicatorStyle: { 
          backgroundColor: "#ffffff", 
          height: 3,
          width: '33%', // Fixed width for indicator
          marginHorizontal: 'auto', // Center the indicator
        },
        tabBarLabelStyle: { 
          fontSize: 14, 
          fontWeight: "bold",
          textTransform: 'none', // Prevent uppercase transformation
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#878787",
        tabBarIndicatorContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Replies" component={Replies} />
      <Stack.Screen name="Bump" component={Bump} />
    </Stack.Navigator>
  );
}
