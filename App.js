import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Eggs'},
    {id: Math.random(), text: 'Bread'},
    {id: Math.random(), text: 'Juice'},
  ]);

  return (
    <View style={styles.container}>
      <Header></Header>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default App;
