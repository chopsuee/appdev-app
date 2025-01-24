import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { notif } from "@/assets/data/notif";

export default function NotificationScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="flex-1 ">
          <FlatList
          className=""
            data={notif}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="border-b-2 border-b-neutral-800 p-5 flex-row">
                <Text className="text-white font-medium">{item.name} </Text>
                <Text className="text-white ">{item.update}.</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
