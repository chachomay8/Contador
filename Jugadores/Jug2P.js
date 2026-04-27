import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef } from 'react';
import styles from '../Estilos/EstiloP2';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Jug2p({ navigation }) { 

  const [Vidasini, setVidasini] = useState(30);
  const [vidas, setVidas] = useState(Vidasini);
  const [vidas2, setVidas2] = useState(Vidasini);
  const [menuVisible, setMenuVisible] = useState(false);
  const [seccionAbierta, setSeccionAbierta] = useState(null);
  const [murio, setMurio] = useState(false);
  const [murio2, setMurio2] = useState(false);

  //frase capsiosas cuando la vida llega a 0 y un jugador pierde procurando que sean cortas pero divertidas
  const frases = [
    "🤚¡Cacheteado!",
    "😵¡Heroe caido!",
    "👻¡Espíritu caído!",
    "🪦¡Enterrado!",
    "☠️¡Exterminado!",
    "🏠¡A su casa!",
    "💀¡Adios villano!",
  ];

  if (vidas <= 0) {
    setMurio(true);
    setVidas(frases[Math.floor(Math.random() * frases.length)]);
  }

  if (vidas2 <= 0) {
    setMurio2(true);
    setVidas2(frases[Math.floor(Math.random() * frases.length)]);
  }

  const validacion = (numero) => {
    if(murio) {
      setMurio(false);
      return 1;
    } else {
      return numero + 1;
    }
  };

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
      <View style={styles.box, murio ? { backgroundColor: '#333333' } : { backgroundColor: '#3b6ac0' }}>
        <TouchableOpacity
          disabled={murio}
          style={[styles.buttonLeft]}
          onPressIn={() => startHold(() => setVidas(v => v - 1), timeoutRef1, intervalRef1)}
          onPressOut={() => stopHold(timeoutRef1, intervalRef1)}
        >
          <Text style={styles.symbol}> {murio ? '' : '−'} </Text>
        </TouchableOpacity>

        <Text style={[styles.txt, murio ? { fontSize: 30 } : { fontSize: 82 }]}>{vidas}</Text>

        <TouchableOpacity
          style={styles.buttonRight}
          onPressIn={() => startHold(() => setVidas(validacion), timeoutRef1, intervalRef1)}
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
        <Text style={[styles.txt, murio2 ? { fontSize: 30 } : { fontSize: 82 }]}>{vidas2}</Text>
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
                  <TouchableOpacity key={num} style={styles.subMenuItem} onPress={() => { setVidas(num); setVidas2(num); setVidasini(num); setMurio(false); setMurio2(false); }}>
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
                      // 2 ES EL ACTUAL
                      if (num === 3) navigation.replace('Jug3P');  // ← navega a 3 jugadores
                      if (num === 4) navigation.replace('Jug4P');  // ← navega a 4 jugadores
                      if (num === 5) navigation.replace('Jug5P');  // ← navega a 5 jugadores
                    }}
                  >
                    <Text style={styles.subMenuText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* refrescamos las vidas */}
            <TouchableOpacity style={styles.menuItem} onPress={() => { setVidas(Vidasini); setVidas2(Vidasini); setMurio(false); setMurio2(false); }}>
              <Text style={styles.menuItemText}>🔃 Refrescar</Text>
            </TouchableOpacity>

          </Animated.View>
        </>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
