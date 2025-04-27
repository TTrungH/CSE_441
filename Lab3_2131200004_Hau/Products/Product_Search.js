import {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import styles from './Style';
import {Card} from 'react-native-paper';
const Product_Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  let filePath = 'https://dummyjson.com/products';
  const searchProduct = () => {
    if (value != '') {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.searchProduct}>Search Products</Text>
        <TextInput
          placeholder="Enter title"
          onChangeText={setValue}
          value={Text}
        />
        <Button onPress={searchProduct} title="search" />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Card>
                <Card.Title title="Product Detail"/>
                <Card>
                  <Card.Cover src={item.thumbnail} />
                </Card>
                <View>
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
                </View>
              </Card>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Product_Search;
