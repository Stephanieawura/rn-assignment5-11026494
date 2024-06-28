import React from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';

const SettingsScreen = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <SafeAreaView style={isDarkTheme ? styles.safeAreaDark : styles.safeAreaLight}>  
      <View style={isDarkTheme ? styles.containerDark : styles.containerLight}>
        <Text style={[styles.settings, isDarkTheme ? styles.textDark : styles.textLight]}>Settings</Text>
        <View style={styles.settingContainer}>                           
          <Text style={[styles.settingText, isDarkTheme ? styles.textDark : styles.textLight]}>Language</Text>
          <Text style={[styles.arrow, isDarkTheme ? styles.textDark : styles.textLight]}>{'>'}</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={[styles.settingText, isDarkTheme ? styles.textDark : styles.textLight]}>My Profile</Text>
          <Text style={[styles.arrow, isDarkTheme ? styles.textDark : styles.textLight]}>{'>'}</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={[styles.settingText, isDarkTheme ? styles.textDark : styles.textLight]}>Contact Us</Text>
          <Text style={[styles.arrow, isDarkTheme ? styles.textDark : styles.textLight]}>{'>'}</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={[styles.settingText, isDarkTheme ? styles.textDark : styles.textLight]}>Change Password</Text>
          <Text style={[styles.arrow, isDarkTheme ? styles.textDark : styles.textLight]}>{'>'}</Text>
        </View>
        <View style={styles.settingContainer}>
          <Text style={[styles.settingText, isDarkTheme ? styles.textDark : styles.textLight]}>Privacy Policy</Text>
          <Text style={[styles.arrow, isDarkTheme ? styles.textDark : styles.textLight]}>{'>'}</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={[styles.settingText, isDarkTheme ? styles.textDark : styles.textLight]}> Theme</Text>
          <Switch
            value={isDarkTheme}
            onValueChange={() => setIsDarkTheme(!isDarkTheme)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaLight: {
    backgroundColor: '#fff',
    color: '#fff'
  },
  safeAreaDark: {
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
  textLight: {
    color: '#000',
  },
  settings: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 100
  },
  settingText: {
    fontSize: 20
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 0
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 0
  },
  arrow: {
    fontSize: 20
  },
  textDark: {
    color: 'white',
  },
});

export default SettingsScreen;