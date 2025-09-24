import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Link, router } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await signIn(email.trim(), password);
      router.replace('/(tabs)');
    } catch (e: any) {
      Alert.alert('Login failed', e?.message ?? 'Please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Log in to continue</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Link href="/(auth)/reset" style={styles.link}>
          Forgot password?
        </Link>
      </View>
      <View style={styles.row}>
        <Text style={styles.muted}>No account?</Text>
        <Link href="/(auth)/signup" style={styles.link}>
          Sign up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
    backgroundColor: '#1F2937',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
  },
  button: {
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#FFFFFF', fontFamily: 'Inter-SemiBold', fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 },
  muted: { color: '#9CA3AF', fontFamily: 'Inter-Regular' },
  link: { color: '#22C55E', fontFamily: 'Inter-SemiBold' },
});
