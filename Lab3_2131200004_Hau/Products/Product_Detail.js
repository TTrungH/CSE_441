import {useState, useEffect, View, FlatList} from 'react';
import {Card} from 'react-native-paper';
import styles from './Style';

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/2';
  useEffect(() => {
    fetch(filePath)
      .then(Response => {
        if (!Response.ok) {
          throw new Error('Network response was not ok');
        }
        return Response.json();
      })
      .then(d => {
        setData(d);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Card>
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
export default ProductDetail;
