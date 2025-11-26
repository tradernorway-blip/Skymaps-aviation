import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import data from "../data/aerodromos.json";

export default function AerodromeList({ navigation }) {
  const [aero, setAero] = useState([]);

  useEffect(() => {
    setAero(data.aerodromos);
  }, []);

  return (
    <View style={{ flex: 1, padding: 12, backgroundColor: "#f8fafc" }}>
      <FlatList
        data={aero}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Detail", { aerodrome: item })}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.sub}>{item.provincia} • {item.tipo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 10, elevation: 1 },
  name: { fontWeight: "700", fontSize: 16 },
  sub: { color: "#6b7280", marginTop: 4 }
});
