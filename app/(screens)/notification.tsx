import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { notif } from "@/assets/data/notif";
import exploreData from "@/assets/data/exploredata";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function NotificationScreen() {
    const mergeData = [...notif, ...exploreData ]
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="flex-1 ">
          <FlatList
          className=""
            data={notif}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="border-b-2 border-b-neutral-800 p-5 ">
                <TouchableOpacity className="flex-row items-center">
              <Image
                className="h-11 w-11 rounded-full mr-5"
                source={item.image}
              />
                <Text className="text-white font-medium">{item.username} </Text>
                <Text className="text-white ">{item.update}.</Text>
                <MaterialCommunityIcons
                style={styles.IconPadding}
                    name={item.icon}
                    size={20}
                    color={"#878787"}
                  />
                </TouchableOpacity>

              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  IconPadding: {
    paddingLeft: 8,
  },
});