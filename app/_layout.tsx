// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext"; // Import provider

export default function RootLayout() {
  return (
    // Bungkus semua dengan AuthProvider
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </AuthProvider>
  );
}
