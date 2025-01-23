import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import exploreData from "@/assets/data/exploredata";

export default function ExpoloreScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#171717]">
        <View className="flex-row items-center border-b-2 border-gray-500 mx-2 py-2 mb-5">
          <Icon name="search" size={20} color="#888" />
          <TextInput
            placeholder="Look for someone?"
            placeholderTextColor="#878787"
            className=" mx-2 pt-5 text-white"
          ></TextInput>
        </View>

        <View className="flex-1">
          <FlatList
            data={exploreData}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={{
              gap: 20, // Horizontal gap between columns
            }}
            contentContainerStyle={{
              marginBottom: 20,
              paddingHorizontal: 20, // Add padding around the content
              paddingBottom: 30, // Ensure space at the bottom for scrolling
              rowGap: 35, // Vertical gap between rows
            }}
            renderItem={({ item }) => (
              <View className="h-72 w-[45%] relative">
                <TouchableOpacity>
                  <Image
                    source={item.image}
                    className="w-full h-full rounded-lg"
                  />
                  {/* Adjust the text container to the lower part */}
                  <View className="absolute bottom-0 left-0 w-full bg-black/50  rounded-b-lg px-3 py-2">
                    <Text className="text-white text-lg font-bold">
                      {item.name || "Unknown"},   {item.age|| "Unknown"}
                    </Text>
                    <Text >{item.desc}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
