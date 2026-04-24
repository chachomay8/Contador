import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef } from 'react';
import styles from './EstiloP2';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Jug2p({ navigation }) {  // ← cambia App por Jug2p y agrega navigation

  const [vidas, setVidas] = useState(30);
  const [vidas2, setVidas2] = useState(30);
  const [menuVisible, setMenuVisible] = useState(false);
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  const menuAnim = useRef(new Animated.Value(300)).current;
  const timeoutRef1 = useRef(null);
  const intervalRef1 = useRef(null);
  const timeoutRef2 = useRef(null);
  const intervalRef2 = useRef(null);

  const startHold = (action, timeoutRef, intervalRef) => {
    action();
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(action, 150);
    }, 400);
  };

  const stopHold = (timeoutRef, intervalRef) => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleSeccion = (seccion) => {
    setSeccionAbierta(seccionAbierta === seccion ? null : seccion);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Jugador 1 */}
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPressIn={() => startHold(() => setVidas(v => v - 1), timeoutRef1, intervalRef1)}
          onPressOut={() => stopHold(timeoutRef1, intervalRef1)}
        >
          <Text style={styles.symbol}>−</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>{vidas}</Text>
        <TouchableOpacity
          style={styles.buttonRight}
          onPressIn={() => startHold(() => setVidas(v => v + 1), timeoutRef1, intervalRef1)}
          onPressOut={() => stopHold(timeoutRef1, intervalRef1)}
        >
          <Text style={styles.symbol}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Botón toggle del menú */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>M8</Text>
      </TouchableOpacity>

      {/* Jugador 2 */}
      <View style={styles.box2}>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPressIn={() => startHold(() => setVidas2(v => v - 1), timeoutRef2, intervalRef2)}
          onPressOut={() => stopHold(timeoutRef2, intervalRef2)}
        >
          <Text style={styles.symbol}>−</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>{vidas2}</Text>
        <TouchableOpacity
          style={styles.buttonRight}
          onPressIn={() => startHold(() => setVidas2(v => v + 1), timeoutRef2, intervalRef2)}
          onPressOut={() => stopHold(timeoutRef2, intervalRef2)}
        >
          <Text style={styles.symbol}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Overlay + menú lateral */}
      {menuVisible && (
        <>
          <TouchableOpacity
            style={styles.overlay}
            onPress={toggleMenu}
            activeOpacity={1}
          />
          <Animated.View style={[styles.menuPanel, { transform: [{ translateX: menuAnim }] }]}>

            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.menuTitle}>⚙️ Opciones</Text>

            {/* Sección Vidas */}
            <TouchableOpacity style={styles.menuItem} onPress={() => toggleSeccion('vidas')}>
              <Text style={styles.menuItemText}>❤️ Vidas {seccionAbierta === 'vidas' ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {seccionAbierta === 'vidas' && (
              <View style={styles.subMenu}>
                {[20, 30, 40].map(num => (
                  <TouchableOpacity key={num} style={styles.subMenuItem} onPress={() => { setVidas(num); setVidas2(num); }}>
                    <Text style={styles.subMenuText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Sección Jugadores */}
            <TouchableOpacity style={styles.menuItem} onPress={() => toggleSeccion('jugadores')}>
              <Text style={styles.menuItemText}>👥 Jugadores {seccionAbierta === 'jugadores' ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {seccionAbierta === 'jugadores' && (
              <View style={styles.subMenu}>
                {[2, 3, 4, 5].map(num => (
                  <TouchableOpacity key={num} style={styles.subMenuItem}
                    onPress={() => {
                      if (num === 4) navigation.navigate('Jug4P');  // ← navega a 4 jugadores
                    }}
                  >
                    <Text style={styles.subMenuText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

          </Animated.View>
        </>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
