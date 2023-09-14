import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/loginPage/LoginPage';
import BasePage from './src/pages/basePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Base'
          component={BasePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;