import { useSession } from '@/auth/ctx';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from './Themed';

export function HeaderContextMenu() {
  const [visible, setVisible] = useState(false);
  const { signOut } = useSession();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onItemPress = (item: string) => {
    console.log('Selected', item);
    closeMenu();
  };

  const color = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <>
      <Pressable
        android_ripple={{ color: 'rgba(0,0,0,0.2)', borderless: true }}
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.8 }
        ]}
        onPress={openMenu}
      >
        <Text style={[styles.icon, { color }]}>⋮</Text>
      </Pressable>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <Pressable style={styles.overlay} onPress={closeMenu}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => onItemPress('Item 1')}>
              <Text style={styles.menuText}>Account Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={signOut}>
              <Text style={styles.menuText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    lineHeight: 32,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 50, // adjust to header height
    paddingRight: 16,
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingVertical: 8,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
  },
});
