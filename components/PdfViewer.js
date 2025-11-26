import React from "react";
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function PdfViewer({ uri }) {
  // use Google Docs viewer as fallback for mobile webview if required
  const webUri = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(uri)}`;
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: webUri }} startInLoadingState renderLoading={() => <ActivityIndicator size="large" />} />
    </View>
  );
}
