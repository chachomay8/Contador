import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { useState } from 'react';

/* 
  Este es un proyecto de prueba para aprender a usar React Native.
  EL TEMA DEL PROYECTO SERA UNA APLICACION DE CONTADOR DE VIDAS PARA 2 A 5 JUGADORES PARA JUEGOS DE MESA
*/

export default function App() {
    const [vidas, setVidas] = useState(30);
    const [vidas2, setVidas2] = useState(30);
  
  return (
    <View style={styles.container}>

      {/* Jugador 1 */}
      <View style={styles.box}>
        <View>
          <TouchableOpacity style={styles.buttonLeft} title="-" onPress={() => setVidas(vidas - 1)}>
              <Text style={styles.symbol}>−</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txt}>{vidas}</Text>
        <View>
          <TouchableOpacity style={styles.buttonRight} title="+" onPress={() => setVidas(vidas + 1)}>
              <Text style={styles.symbol}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Jugador 2 */}
      <View style={styles.box2}>
        <View>
          <TouchableOpacity style={styles.buttonLeft} title="-" onPress={() => setVidas2(vidas2 - 1)}>
              <Text style={styles.symbol}>−</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txt}>{vidas2}</Text>
        <View>
          <TouchableOpacity style={styles.buttonRight} title="+" onPress={() => setVidas2(vidas2 + 1)}>
              <Text style={styles.symbol}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    transform: [{ rotate: '180deg' }],
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    height: '49%',
    margin: 5,
    padding: 20,
    backgroundColor: '#3b6ac0',
    borderRadius: 8,
    justifyContent: 'center',
  },
    box2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    height: '49%',
    margin: 5,
    padding: 20,
    backgroundColor: '#a04242',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 5,
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 30,
    paddingRight: 70,
  },
  buttonRight: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    paddingTop: 150,
    paddingBottom: 150,
    paddingLeft: 70,
    paddingRight: 30,
  },
  txt: {     
    textAlign: 'center',
    fontSize: 82,
    fontStyle: 'bold',
    color: '#ffffff',
  },
  symbol: {
    fontSize: 50,
    color: '#ffffff',
    fontStyle: 'bold',
  },
});
