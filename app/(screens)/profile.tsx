import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="flex-1 flex m-5">
          <ScrollView>
            <View className="Profile flex flex-col border border-white p-2 justify-center">
                <View className="flex flex-row items-center justify-around">
                <Image
                className="w-32 h-32 rounded-full"
                source={require("@/assets/images/user-profile/user_profile.jpg")}
              />

              <View className="flex flex-col items-center">
                <Text>20</Text>
                <Text>Followers</Text>
              </View>

              <View className="flex flex-col items-center">
                <Text>25</Text>
                <Text>Buddies</Text>
              </View>
                </View>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
