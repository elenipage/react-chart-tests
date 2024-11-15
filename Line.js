import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width

export default function Line() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(300, 300, 100, ${opacity})`, // optional
            strokeWidth: 2 // optional
          },
          {
            data: [10, 35, 38, 60, 72, 39],
            color: (opacity = 1) => `rgba(234, 130, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["User", "Follower"] // optional
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
  <Text>Line Graphs - compete with a follower</Text>
  <LineChart
  data={data}
  width={screenWidth}
  height={300}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
</View>
  );
}
