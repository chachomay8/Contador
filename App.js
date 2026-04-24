import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jug2p from './Jug2P';
import Jug4p from './Jug4P';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Jug2P"
        screenOptions={{ headerShown: false }}  // ← oculta el header de navegación
      >
        <Stack.Screen name="Jug2P" component={Jug2p} />
        <Stack.Screen name="Jug4P" component={Jug4p} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}