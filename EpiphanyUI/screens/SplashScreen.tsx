import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Animated } from 'react-native';


const SplashScreen = () => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>Epiphany</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreen;