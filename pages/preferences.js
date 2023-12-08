import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import NavBar from './components/DownBar';

export default function PreferencesUser() {
  const [isWiFiEnabled, setIsWiFiEnabled] = useState(false);

  return (
    <View style={styles.settings_preferences}>
      <View style={styles.box_settings}>
        <View style={styles.setting_boxes}>
          <Text>Nombre a mostrar</Text>
          <TextInput
            style={styles.input_preferences}
            placeholder=""
          />
        </View>
        <View style={styles.setting_boxes}>
          <Text>Solo WiFi?</Text>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              { backgroundColor: isWiFiEnabled ? 'white' : 'gray' },
            ]}
            onPress={() => setIsWiFiEnabled(!isWiFiEnabled)}
          >
            <Text style={styles.toggleButtonText}>
              {isWiFiEnabled ? 'Activado' : 'Desactivado'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn_preferences}>
          <Text style={styles.text_preferences}>GUARDAR</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </View>
  );
}