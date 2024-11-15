import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
    ContributionGraph,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get('window').width

export default function Streak() {
    const commitsData = [
        { date: "2017-04-02", count: 1 },
        { date: "2017-04-03", count: 2 },
        { date: "2017-04-04", count: 3 },
        { date: "2017-04-05", count: 4 },
        { date: "2017-04-06", count: 5 },
        { date: "2017-04-30", count: 2 },
        { date: "2017-04-19", count: 2 },
        { date: "2017-04-18", count: 3 },
        { date: "2017-04-22", count: 4 },
        { date: "2017-04-31", count: 3 },
        { date: "2017-04-01", count: 3 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-04-05", count: 2 },
        { date: "2017-04-30", count: 4 }
      ];
    
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
  <Text>Recycling Contribution Graph</Text>
  <ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-30")}
  numDays={30}
  width={250}
  height={300}
  chartConfig={chartConfig}
  showOutOfRangeDays={true}
  squareSize={29}
/>
</View>
  );
}
