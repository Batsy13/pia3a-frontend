import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          router.replace('/(tabs)/home'); 
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao checar login:', error);
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <LinearGradient
        colors={['#BE1636', '#2B1838']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <ActivityIndicator size="large" color="#FFF" />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#BE1636', '#2B1838']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.title}>Bem-vindo!</Text>
      <View style={styles.buttonContainer}>
        <>
          <TouchableOpacity
            onPress={() => router.navigate("/login")} 
            style={styles.buttonTransparent}
          >
            <Text style={styles.buttonTextTransparent}>Login</Text>
          </TouchableOpacity>
        </>
        <>
          <TouchableOpacity style={styles.buttonWhite} onPress={() => router.navigate("/register")}>
              <Text style={styles.buttonTextWhite}>Registro</Text>
          </TouchableOpacity>
        </>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    marginBottom: 52,
  },
  buttonContainer: {
    gap: 59,
    width: '100%',
  },
  buttonWhite: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 80,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 80,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonTextWhite: {
    color: '#BE1636',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Raleway',
  },
  buttonTextTransparent: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Raleway',
  },
});