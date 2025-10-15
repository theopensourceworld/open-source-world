import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
        <Text style={{ color: "#00BFFF", fontSize: 18, fontWeight: "700" }}>
          Creative Eye Studio
        </Text>
        <Ionicons name="mail-outline" color="#fff" size={24} />
      </View>

      {/* Content */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* Left Section */}
        <View style={{ flex: 1, padding: 24 }}>
          <Text style={{ color: "#fff", fontSize: 12, opacity: 0.7 }}>
            ANALYSE YOUR EYE HEALTH IN REAL-TIME
          </Text>

          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "800", marginVertical: 16 }}>
            Your AI-Powered Eye Health Assistant
          </Text>

          <Text style={{ color: "#bbb", fontSize: 14, lineHeight: 22 }}>
            Measure intraocular pressure, detect early signs of glaucoma, 
            and track your vision health — all through our portable device and smart app.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#00BFFF",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginTop: 20,
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Start Scan</Text>
          </TouchableOpacity>
        </View>

        {/* Right Section */}
        <ImageBackground
          source={require("./assets/eye-bg.jpg")}
          style={{ flex: 1, resizeMode: "cover" }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
