import {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Style';

const Products = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';
  useEffect(() => {
    fetch(filePath)
      .then(Response => {
        if (!Response.ok) {
          throw new Error('Network response was not ok');
        }
        return Response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.product}>
              <Image style={styles.Logo} src={item.thumbnail} />
              <View style={styles.detail}>
                <Text style={styles.title}>Title: {item.title}</Text>
                <Text>Description: {item.description}</Text>
                <Text>Price: {item.price}</Text>
                <Text style={styles.discount}>
                  Discount: {item.discountPercentage}
                </Text>
                <Text>Rating: {item.rating}</Text>
                <Text>Stock: {item.stock}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Category: {item.category}</Text>
                <View style={styles.buttons}>
                  <Button  title="Detail" />
                  <Button  title="Add" />
                  <Button  title="Delete"  />
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Products;
