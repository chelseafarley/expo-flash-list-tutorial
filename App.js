import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import MyListItem from './MyListItem';

const data = [
  { name: "John Smith" },
  { name: "Jane Doe" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
  { name: "M" },
  { name: "N" },
  { name: "O" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlashList 
        data={data}
        renderItem={({ item }) => <MyListItem item={item} />}
        estimatedItemSize={30}
        ListEmptyComponent={() => <Text>List is empty :(</Text>}
        ListFooterComponent={() => <Text>This is my footer</Text>}
        ListHeaderComponent={() => <Text>This is my header!</Text>}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
