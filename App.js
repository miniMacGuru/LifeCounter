import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterGrid  from './screens/CounterGrid';
import * as ScreenOrientation from 'expo-screen-orientation';
import { OrientationLock } from 'expo-screen-orientation';

export default function App() {
  (async () => { await ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE); })();

  return (
    <View style={styles.container}>
      <CounterGrid />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" hidden={true} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
