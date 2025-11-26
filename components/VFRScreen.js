import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function VFRScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 12, backgroundColor: "#f8fafc" }}>
      <Text style={styles.title}>Reglas y Procedimientos VFR</Text>

      <Text style={styles.h}>Condiciones mínimas VMC</Text>
      <Text style={styles.p}>• Visibilidad mínima: 5 km (ejemplo)...</Text>
      <Text style={styles.p}>• Distancia de nubes: 1500 m horizontal / 300 m vertical ...</Text>

      <Text style={styles.h}>Espacios Aéreos (resumen)</Text>
      <Text style={styles.p}>• Clase G: espacio no controlado... </Text>
      <Text style={styles.p}>• Clase E: ...</Text>

      <Text style={styles.h}>Circuitos de tráfico</Text>
      <Text style={styles.p}>• Circuito patrón: 1000 ft AGL, ...</Text>

      <Text style={[styles.h, { marginTop: 12 }]}>Documentos</Text>
      <Text style={styles.p}>Próximamente podrás abrir cartas y manuales en PDF desde aquí.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  h: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  p: { color: "#374151", marginTop: 6 }
});
