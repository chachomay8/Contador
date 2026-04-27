import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef } from 'react';
import styles from '../Estilos/EstiloP5';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORES = ['#3b6ac0', '#a04242', '#2e7d32', '#6a1e9a', '#b5a40f'];

export default function Jug5p({ navigation }) {
  const [vidas, setVidas] = useState([40, 40, 40, 40, 40]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  const menuAnim = useRef(new Animated.Value(300)).current;
  const timeoutRefs = useRef([null, null, null, null, null]);
  const intervalRefs = useRef([null, null, null, null, null]);

  const startHold = (action, i) => {
    clearTimeout(timeoutRefs.current[i]);
    clearInterval(intervalRefs.current[i]);
    action();
    timeoutRefs.current[i] = setTimeout(() => {
      intervalRefs.current[i] = setInterval(action, 150);
    }, 400);
  };

  const stopHold = (i) => {
    clearTimeout(timeoutRefs.current[i]);
    clearInterval(intervalRefs.current[i]);
    timeoutRefs.current[i] = null;
    intervalRefs.current[i] = null;
  };

  const cambiarVida = (i, delta) => {
    setVidas(prev => {
      const nuevo = [...prev];
      nuevo[i] = nuevo[i] + delta;
      return nuevo;
    });
  };

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(menuAnim, {
        toValue: 300, duration: 300, useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(menuAnim, {
        toValue: 0, duration: 300, useNativeDriver: true,
      }).start();
    }
  };

  const toggleSeccion = (seccion) => {
    setSeccionAbierta(seccionAbierta === seccion ? null : seccion);
  };

  const renderJugadorLateral = (i, esIzquierda) => (
    <View key={i} style={[
      esIzquierda ? styles.playerBoxL : styles.playerBoxR,
      { backgroundColor: COLORES[i] }
    ]}>
      <Text style={esIzquierda ? styles.txt90 : styles.txt270}>
        {vidas[i]}
      </Text>

      <TouchableOpacity
        style={styles.buttonTop}
        onPressIn={() => startHold(() => cambiarVida(i, esIzquierda ? 1 : -1), i)}
        onPressOut={() => stopHold(i)}
      >
        <Text style={esIzquierda ? styles.symbol90 : styles.symbol270}>
          {esIzquierda ? '+' : '−'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBottom}
        onPressIn={() => startHold(() => cambiarVida(i, esIzquierda ? -1 : 1), i)}
        onPressOut={() => stopHold(i)}
      >
        <Text style={esIzquierda ? styles.symbol90 : styles.symbol270}>
          {esIzquierda ? '−' : '+'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderJugadorAbajo = (i) => (
    <View style={[styles.playerBoxBottom, { backgroundColor: COLORES[i] }]}>
      <Text style={styles.txt}>{vidas[i]}</Text>
      <TouchableOpacity
        style={styles.buttonLeft}
        onPressIn={() => startHold(() => cambiarVida(i, -1), i)}
        onPressOut={() => stopHold(i)}
      >
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonRight}
        onPressIn={() => startHold(() => cambiarVida(i, 1), i)}
        onPressOut={() => stopHold(i)}
      >
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Fila superior — J1 y J2 */}
      <View style={styles.rowTop}>
        {renderJugadorLateral(0, true)}
        {renderJugadorLateral(1, false)}
      </View>

      {/* Fila media — J3 y J4 */}
      <View style={styles.rowTop}>
        {renderJugadorLateral(2, true)}
        {renderJugadorLateral(3, false)}
      </View>

      {/* Botón menú */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>M8</Text>
      </TouchableOpacity>

      {/* J5 — ancho completo abajo */}
      {renderJugadorAbajo(4)}

      {/* Overlay + menú */}
      {menuVisible && (
        <>
          <TouchableOpacity style={styles.overlay} onPress={toggleMenu} activeOpacity={1} />
          <Animated.View style={[styles.menuPanel, { transform: [{ translateX: menuAnim }] }]}>

            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.menuTitle}>⚙️ Opciones</Text>

            {/* Vidas */}
            <TouchableOpacity style={styles.menuItem} onPress={() => toggleSeccion('vidas')}>
              <Text style={styles.menuItemText}>
                {'❤️ Vidas '}{seccionAbierta === 'vidas' ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>
            {seccionAbierta === 'vidas' && (
              <View style={styles.subMenu}>
                {[20, 30, 40].map(num => (
                  <TouchableOpacity key={`vida-${num}`} style={styles.subMenuItem} onPress={() => setVidas([num, num, num, num, num])}>
                    <Text style={styles.subMenuText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Jugadores */}
            <TouchableOpacity style={styles.menuItem} onPress={() => toggleSeccion('jugadores')}>
              <Text style={styles.menuItemText}>
                {'👥 Jugadores '}{seccionAbierta === 'jugadores' ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>
            {seccionAbierta === 'jugadores' && (
              <View style={styles.subMenu}>
                {[2, 3, 4, 5].map(num => (
                  <TouchableOpacity key={`jugador-${num}`} style={styles.subMenuItem}
                    onPress={() => {
                      if (num === 2) navigation.replace('Jug2P');
                      if (num === 3) navigation.replace('Jug3P');
                      if (num === 4) navigation.replace('Jug4P');
                      // 5 ES EL ACTUAL
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