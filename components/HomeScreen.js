import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skymaps Aviation</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Aerodromes")}>
          <Text style={styles.cardIcon}>🛩️</Text>
          <Text style={styles.cardTitle}>Aeródromos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("VFR")}>
          <Text style={styles.cardIcon}>📘</Text>
          <Text style={styles.cardTitle}>Reglas y Procedimientos VFR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.note}>Demo inicial — LEIG, Gurb, Bellvei</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", backgroundColor: "#f3f4f6" },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 20 },
  grid: { width: "100%", flexDirection: "row", justifyContent: "space-between" },
  card: { width: "48%", backgroundColor: "#fff", padding: 18, borderRadius: 12, alignItems: "center", elevation: 2 },
  cardIcon: { fontSize: 36 },
  cardTitle: { marginTop: 10, fontSize: 16, fontWeight: "600" },
  note: { marginTop: 20, color: "#6b7280" }
});
