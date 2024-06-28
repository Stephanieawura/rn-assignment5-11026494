import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ isDarkTheme }) => {
  return (
    <SafeAreaView style={isDarkTheme ? styles.safeAreaDark : styles.safeAreaLight}>
      <ScrollView style={isDarkTheme ? styles.containerDark : styles.containerLight}>
        <View style={styles.header}>
          <Image source={require('../assets/profile.png')} style={styles.profilePic} />
          <View style={styles.headerText}>
            <Text style={[{ color: '#bfbfbf', fontSize: 24 }, isDarkTheme ? styles.textDark : styles.textLight]}>Welcome back,</Text>
            <Text style={[{ fontWeight: 'bold' }, isDarkTheme ? styles.textDark : styles.textLight]}>Eric Atsu</Text>
          </View>
          <Icon name="search" size={24} color={isDarkTheme ? 'white' : 'black'} />
        </View>
        <View>
          <Image style={styles.card} source={require('../assets/Card.png')} />
        </View>
        <View style={styles.actions}>
          {renderActionButton('send', 'Sent', isDarkTheme)}
          {renderActionButton('arrow-down', 'Receive', isDarkTheme)}
          {renderActionButton('dollar', 'Loan', isDarkTheme)}
          {renderActionButton('arrow-up', 'Topup', isDarkTheme)}
        </View>
        <View style={styles.transactions}>
          <Text style={isDarkTheme ? styles.textDark : styles.textLight}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.sellAll}>Sell All</Text>
          </TouchableOpacity>
        </View>
        {renderTransactionItem('apple', 'Apple Store', 'Entertainment', '- $5.99', isDarkTheme)}
        {renderTransactionItem('spotify', 'Spotify', 'Music', '- $12.99', isDarkTheme, '#33cc33')}
        {renderTransactionItem('money', 'Money Transfer', 'Transaction', '$300', isDarkTheme, '#4d79ff', true)}
        {renderTransactionItem('shopping-cart', 'Grocery', 'Transaction', '- $88', isDarkTheme, '#ff4d4d')}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderActionButton = (iconName, label, isDarkTheme) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={[styles.iconContainer, isDarkTheme && styles.iconContainerDark]}>
      <Icon name={iconName} size={25} color={isDarkTheme ? 'white' : 'black'} />
    </View>
    <Text style={isDarkTheme ? styles.textDark : styles.textLight}>{label}</Text>
  </TouchableOpacity>
);

const renderTransactionItem = (iconName, title, category, amount, isDarkTheme, iconColor = 'black', isPositive = false) => (
  <View style={styles.transactionItem}>
    <View style={[styles.iconContainer, isDarkTheme && styles.iconContainerDark]}>
      <Icon name={iconName} size={28} color={iconColor} />
    </View>
    <View style={styles.transactionDetails}>
      <Text style={isDarkTheme ? styles.textDark : styles.textLight}>{title}</Text>
      <Text style={styles.transactionCategory}>{category}</Text>
    </View>
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: isPositive ? '#4d79ff' : (isDarkTheme ? 'white' : 'black') }}>
      {amount}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  safeAreaLight: {
    backgroundColor: '#fff',
    color: '#000'
  },
  safeAreaDark: {
    flex: 1,
    backgroundColor: '#000033',
  },
  containerLight: {
    backgroundColor: '#fff',
    padding: 20,
  },
  containerDark: {
    backgroundColor: '#000033',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  textLight: {
    fontSize: 16,
    color: '#000',
  },
  textDark: {
    fontSize: 16,
    color: 'white',
  },
  card: {
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 40,
    padding: 10,
  },
  iconContainerDark: {
    backgroundColor: '#001f4d',
  },
  transactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sellAll: {
    color: '#4d79ff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 5,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    color: 'gray',
  },
});

export default HomeScreen;