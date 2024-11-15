import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  PieChart,
} from "react-native-chart-kit";
import pieData from './data/pie-data';

export default function Pie() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View style={styles.container}>
  <Text>Pie</Text>
  <PieChart
  data={pieData}
  width={Dimensions.get('window').width}
  height={200}
  chartConfig={chartConfig}
  accessor={"count"}
  backgroundColor={"transparent"}
  paddingLeft={"0"}
  center={[0, 0]}
/>
</View>
  );
}
