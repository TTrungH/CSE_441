import React, { useState, useEffect }  from 'react';
import ProductList from './Products/Products';
import Product_Add from './Products/Product_Add';
import ProductDetail from './Products/Product_Detail';
import ProductSearch from './Products/Product_Search';
import { BottomNavigation  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

 const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ProductList', title: 'Products', focusedIcon: "abacus" },
    { key: 'Product_Add', title: 'Add', focusedIcon: "account" },
    { key: 'Product_Search', title: 'Search', focusedIcon: 'store-search' },
    { key: 'Product_Detail', title: 'Detail', focusedIcon: 'details' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    Product_Search: ProductSearch,
    Product_Detail: ProductDetail,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
    
  );
};
export default App;