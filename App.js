import { StatusBar } from "expo-status-bar";
import Layout from "./src/components/Layout";
import { View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: "#a49", flex: 1}}>
      <StatusBar style="auto" />
      <Layout />
    </SafeAreaView>
  );
}
