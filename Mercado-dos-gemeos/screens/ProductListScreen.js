

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando o ícone
import styles from '../components/styles';

// Lista de produtos simulados
const PRODUCTS = [
      { id: '1', name: 'Maçã', price: 10, description: 'Maçã da Monica dentuça' },
      { id: '2', name: 'Banana', price: 20, description: 'Banana da terra' },
      { id: '3', name: 'Pera', price: 30, description: 'Pera autraliana' },
    ];

export default function ProductListScreen({ navigation, addToCart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mercado Aberto</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={productStyles.productItem}>
            <Text style={productStyles.productName}>{item.name}</Text>
            <Text style={productStyles.productPrice}>${item.price}</Text>
            <Text>{item.description}</Text>
            {/* Botão para adicionar ao carrinho */}
            <TouchableOpacity
              style={productStyles.addButton}
              onPress={() => addToCart(item)}
            >
              <Text style={productStyles.addButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* Botão para abrir o carrinho */}
      <TouchableOpacity
        style={productStyles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Icon name="shopping-cart" size={20} color="#fff" />
        <Text style={productStyles.cartButtonText}>Abrir Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos específicos para os produtos
const productStyles = StyleSheet.create({
  productItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#007bff',
  },
  addButton: {
    marginTop: 8,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333', // Cor mais escura
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
