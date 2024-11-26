import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import styles from '../components/styles';

export default function CartScreen({ cart }) {
  const [modalVisible, setModalVisible] = useState(false); // Estado para o modal

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Função para finalizar a compra
  const handleCheckout = () => {
    setModalVisible(true); // Exibe o modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={cartStyles.cartItem}>
            <Text style={cartStyles.productName}>{item.name}</Text>
            <Text>Quantidade: {item.quantity}</Text>
            <Text>Preço: R${item.price}</Text>
          </View>
        )}
      />
      <Text style={cartStyles.total}>Total: R${total}</Text>

      {/* Botão para finalizar compra */}
      <TouchableOpacity style={cartStyles.checkoutButton} onPress={handleCheckout}>
        <Text style={cartStyles.checkoutButtonText}>Finalizar Compra</Text>
      </TouchableOpacity>

      {/* Modal para exibir mensagem */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalContent}>
            <Text style={modalStyles.modalText}>Compra concluída!</Text>
            <Text style={modalStyles.modalText}>Volte sempre!</Text>
            <TouchableOpacity
              style={modalStyles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={modalStyles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos específicos para a tela do carrinho
const cartStyles = StyleSheet.create({
  cartItem: {
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
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  checkoutButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// Estilos para o modal
const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo transparente escuro
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 12,
    width: '80%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
