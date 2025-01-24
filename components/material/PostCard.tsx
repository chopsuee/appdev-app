import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { FlatList } from 'react-native'
import exploreData from '@/assets/data/exploredata'
import { useState } from 'react'

export default function PostCard() {
      const [like, setLike] = useState("heart-outline");
    
      const toggleLike = () => {
        setLike(like === "heart-outline" ? "heart" : "heart-outline");
      };
  return (
    <View className="flex-1">
        <FlatList
        data={exploreData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
            marginBottom: 20,
            paddingHorizontal: 20, // Add padding around the content
            paddingBottom: 30, // Ensure space at the bottom for scrolling
            rowGap: 20, // Vertical gap between rows
        }}
        renderItem={({item}) =>(
            <View className="flex flex-row h-fit rounded-lg p-4 bg-[#313131] mb-5">
            <Image
              className="h-12 w-12 rounded-full"
              source={item.image}
            />
            <View className="flex flex-col ml-5">
              <View className="flex flex-row ">
                <Text className=" text-white font-bold">{item.name}</Text>

                {/* Status indicator */}
                <Text className="pl-2 pr-2">
                  <MaterialCommunityIcons
                    name={item.icon}
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
        )}
        />

    </View>
  )
}

