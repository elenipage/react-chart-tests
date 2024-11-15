import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ProgressChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width

export default function Progress() {
    const data = {
        labels: ["Metals", "Plastic", "Paper"], // optional
        data: [0.4, 0.6, 0.8]
      };
    
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
    backgroundGradientFromOpacity: 30,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 10) => `rgba(56, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View style={styles.container}>
  <Text>Progress (set targets?) </Text>
  <ProgressChart
  data={data}
  width={screenWidth}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
</View>
  );
}
