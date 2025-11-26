import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import PdfViewer from "./PdfViewer";
import data from "../data/aerodromos.json";

export default function AerodromeDetail({ route }) {
  const { aerodrome } = route.params;
  const [selectedPdf, setSelectedPdf] = useState(null);

  // raw.githubusercontent URL base for files placed in repo under assets/pdfs/
  const rawBase = `https://raw.githubusercontent.com/tradernorway-blip/Skymaps-aviation/main/assets/pdfs/`;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8fafc" }}>
      <View style={{ padding: 12 }}>
        <Text style={styles.title}>{aerodrome.nombre}</Text>
        <Text style={styles.sub}>{aerodrome.provincia} • {aerodrome.tipo}</Text>
        <Text style={{ marginTop: 8 }}>Coordenadas: {aerodrome.lat}, {aerodrome.lon}</Text>
        <Text>Elevación: {aerodrome.elev_ft} ft</Text>

        <View style={{ height: 220, marginTop: 12, borderRadius: 8, overflow: "hidden" }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{ latitude: aerodrome.lat, longitude: aerodrome.lon, latitudeDelta: 0.05, longitudeDelta: 0.05 }}
          >
            <Marker coordinate={{ latitude: aerodrome.lat, longitude: aerodrome.lon }} />
          </MapView>
        </View>

        <Text style={{ marginTop: 12, fontWeight: "700" }}>Documentos</Text>
        {aerodrome.pdfs && aerodrome.pdfs.map((p, idx) => (
          <View key={idx} style={{ marginTop: 8 }}>
            <Button title={`Abrir: ${p}`} onPress={() => setSelectedPdf(rawBase + p)} />
          </View>
        ))}

        {selectedPdf && <View style={{ height: 500, marginTop: 12 }}><PdfViewer uri={selectedPdf} /></View>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "700" },
  sub: { color: "#6b7280", marginTop: 6 }
});
