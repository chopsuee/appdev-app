import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default function ReplyCard() {
  const [like, setLike] = useState("heart-outline");

  const toggleLike = () => {
    setLike(like === "heart-outline" ? "heart" : "heart-outline");
  };
  return (
    <View className="parent flex flex-row rounded-lg p-4 bg-[#313131] mb-5">
      <Image
        className="h-12 w-12 rounded-full"
        source={require("@/assets/images/user-profile/user_profile.jpg")}
      />
      <View className="flex flex-col ml-5 flex-1">
        <View className="flex flex-row justify-between">
          <Text className="text-white font-bold">Raaaah</Text>

          {/* Status indicator */}
          <MaterialCommunityIcons name="notebook" size={15} color="#878787" />
          <Text className="text-white font-light">15h</Text>
        </View>

        {/* Uploaded post */}
        <Text className="text-white max-w-[80%] mt-2" numberOfLines={10}>
          Ilaga mo ang kamote Bumuli ka na ng asukal na pula magluluto ng kamite
          cue para tayo ay may food trip mamaya
        </Text>

        {/* Reply box */}
        <View className="flex flex-row mt-4 p-4 bg-[#212121] rounded-lg">
          <Image
            className="h-10 w-10 rounded-full"
            source={require("@/assets/images/explore-profile/iryll.jpg")}
          />
          <View className="flex flex-col ml-3 flex-1">
            <View className="flex flex-row justify-between">
              <Text className="text-white font-bold">itsRealIryll</Text>
              <MaterialCommunityIcons
                name="notebook"
                size={15}
                color="#878787"
              />
              <Text className="text-white font-light">15h</Text>
            </View>

            {/* Reply content */}
            <Text className="text-white mt-2" numberOfLines={10}>
              Sarap niyan
            </Text>

            {/* Like/Comment/Options */}

          </View>
        </View>

        {/* Like/Comment/Options for main post */}
        <View className="flex-row mt-4">
          <TouchableOpacity className="mr-2" onPress={toggleLike}>
            <MaterialCommunityIcons name={like} size={20} color="#878787" />
          </TouchableOpacity>
          <SimpleLineIcons name="bubble" size={20} color="#878787" />
        </View>
      </View>
    </View>
  );
}
