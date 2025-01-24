import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useState } from "react";
import { userpost } from "@/app/(screens)/upload";
import { FlatList } from "react-native";
export default function HomeCard() {
  const [like, setLike] = useState("heart-outline");

  const toggleLike = () => {
    setLike(like === "heart-outline" ? "heart" : "heart-outline");
  };
  return (
    <View className="flex-1">
      <FlatList
        data={userpost}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          marginTop: 20,
          marginBottom: 20,
          paddingHorizontal: 20, // Add padding around the content
          paddingBottom: 30, // Ensure space at the bottom for scrolling
          rowGap: 10, // Vertical gap between rows
        }}
        renderItem={({ item }) => (
          <>
            {item.upload_text === "" ? (
              ""
            ) : (
              <View className="flex flex-row h-fit rounded-lg p-4 bg-[#313131] mb-5 ">
                <Image
                  className="h-12 w-12 rounded-full"
                  source={require("@/assets/images/explore-profile/iryll.jpg")}
                />
                <View className="flex flex-col flex-1 ml-5">
                  <View className="flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                      <Text className="text-white font-bold">
                        itsReallIryll
                      </Text>

                      {/* Status indicator */}
                      <Text className="pl-2 pr-2">
                        <MaterialCommunityIcons
                          name="notebook"
                          size={15}
                          color={"#878787"}
                        />
                      </Text>

                      {/* Online Status */}
                      <Text className="text-white font-light">15h</Text>
                    </View>

                    {/* Delete */}
                    <View className="delete flex items-center justify-end px-2 rounded">
                      <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={15}
                        color={"#878787"}
                      />
                    </View>
                  </View>

                  {/* Uploaded post */}
                  <Text
                    className="text-white max-w-[60vw] ml-2"
                    numberOfLines={10}
                  >
                    {item.upload_text}
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
                      <SimpleLineIcons
                        name="bubble"
                        size={20}
                        color={"#878787"}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
}
