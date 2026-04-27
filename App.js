import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jug2p from './Jugadores/Jug2P';
import Jug3p from './Jugadores/Jug3P';
import Jug4p from './Jugadores/Jug4P';
import Jug5p from './Jugadores/Jug5P';

  //aprendere react native para un mejor entendimiento del lenguiaje con mi pimer proyecto de una app de contodadores de vida para juegos de mesa

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Jug2P"
        screenOptions={{ headerShown: false }}  // ← oculta el header de navegación
      >
        <Stack.Screen name="Jug2P" component={Jug2p} />
        <Stack.Screen name="Jug3P" component={Jug3p} />
        <Stack.Screen name="Jug4P" component={Jug4p} />
        <Stack.Screen name="Jug5P" component={Jug5p} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}