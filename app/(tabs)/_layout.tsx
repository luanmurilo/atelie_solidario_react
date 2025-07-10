import * as Linking from 'expo-linking';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const openWhatsApp = () => {
    const whatsappNumber = '5511999999999'; // Substitua pelo número desejado
    const url = `whatsapp://send?phone=${whatsappNumber}&text=Olá! Gostaria de saber mais.`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          alert('WhatsApp não está instalado');
        }
      })
      .catch((err) => {
        console.error('Erro ao abrir o WhatsApp:', err);
      });
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={(e) => {
                e.preventDefault();
                props.onPress?.(e);
                router.push('/projetos'); // força navegação limpa
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projeto_selecionado"
        options={{
          title: 'Projeto',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="projeto.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="whatsapp"
        options={{
          title: 'Contato',
          tabBarIcon: ({ color }) => (
            <Icon name="whatsapp" size={28} color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={(e) => {
                e.preventDefault();
                const whatsappNumber = '5511999999999';
                const url = `whatsapp://send?phone=${whatsappNumber}&text=Olá! Gostaria de saber mais.`;

                Linking.canOpenURL(url).then((supported) => {
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    alert('WhatsApp não está instalado');
                  }
                });
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
