import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import DayListItem from "./components/core/DayListItem"
export default function App() {
  const days=[...Array(24)].map((val,index)=>index+1)
  return (


    <View style={styles.container}>
     
<FlatList data={days} 
  contentContainerStyle={styles.content}
  numColumns={2}
  columnWrapperStyle={styles.column}
    renderItem={({item})=>(
      <DayListItem day={item}/>
      )}/>




   

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    gap:10
  },
  content:{
    gap:10,
    padding:10,
  },
  column:{
    gap:10,

  }

});
