import {ScrollView, Text, TextInput, View, Button, Alert} from 'react-native';
import {useState} from 'react';
import styles from './Style';
const Product_Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add successful');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.addProduct}>Add a Product</Text>
      <ScrollView>
        <Text style={styles.addTitle}>Title</Text>
        <TextInput
          placeholder="Enter title"
          onChangeText={setTitle}
          value={Text}
        />
        <Text style={styles.addTitle}>Description</Text>
        <TextInput
          placeholder="Enter Description"
          onChangeText={setDescription}
          value={Text}
        />
        <Text style={styles.addTitle}>Price</Text>
        <TextInput
          placeholder="Enter Price"
          onChangeText={setPrice}
          value={Number}
          keyboardType="numeric"
        />
        <Text style={styles.addTitle}>Discount Percentage</Text>
        <TextInput
          placeholder="Enter Percentage"
          onChangeText={setDiscountPercentage}
          value={Number}
          keyboardType="numeric"
        />
        <Text style={styles.addTitle}>Rating</Text>
        <TextInput
          placeholder="Enter Rating"
          onChangeText={setRating}
          value={Number}
          keyboardType="numeric"
        />
        <Text style={styles.addTitle}>Stock</Text>
        <TextInput
          placeholder="Enter Stock"
          onChangeText={setStock}
          value={Number}
          keyboardType="numeric"
        />
        <Text style={styles.addTitle}>Brand</Text>
        <TextInput
          placeholder="Enter Brand"
          onChangeText={setBrand}
          value={Text}
        />
        <Text style={styles.addTitle}>Category</Text>
        <TextInput
          placeholder="Enter Category"
          onChangeText={setCategory}
          value={Text}
        />
        <Text style={styles.addTitle}>Images</Text>
        <TextInput
          placeholder="Enter Images URL(s)"
          onChangeText={setImages}
          value={Text}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </ScrollView>
    </View>
  );
};
export default Product_Add;
