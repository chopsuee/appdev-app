import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useState } from "react";

export default function HomeCard() {
  const [like, setLike] = useState("heart-outline");

  const toggleLike = () => {
    setLike(like === "heart-outline" ? "heart" : "heart-outline");
  };
  return (
    <View className="flex flex-row h-fit rounded-lg p-4 bg-[#313131] mb-5">
      <Image
        className="h-12 w-12 rounded-full"
        source={require("@/assets/images/explore-profile/iryll.jpg")}
      />
      <View className="flex flex-col ml-5">
        <View className="flex flex-row ">
          <Text className=" text-white font-bold">itsRealIryll</Text>

          {/* Status indicator */}
          <Text className="pl-2 pr-2">
            <MaterialCommunityIcons
              name="notebook"
              size={15}
              color={"#878787"}
            />
          </Text>

          {/* Online Status */}
          <Text className=" text-white font-light">15h</Text>
        </View>

        {/* Uploaded post */}
        <Text className="text-white max-w-[60vw] ml-2 mt-2" numberOfLines={10}>
          Ilaga mo ang kamote Bumuli ka na ng asukal na pula magluluto ng kamite
          cue para tayo ay may food trip mamaya
        </Text>

        {/* Like/Comment/Whatever */}
        <View className="flex-row mt-4">
          <TouchableOpacity className="mr-2" onPress={toggleLike}>
            <MaterialCommunityIcons name={like} size={20} color={"#878787"} />
          </TouchableOpacity>

          <Text>
            <SimpleLineIcons name="bubble" size={20} color={"#878787"} />
          </Text>
        </View>
      </View>
    </View>
  );
}
