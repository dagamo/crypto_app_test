import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {useTheme} from 'react-native-paper';

const SkeletonPurpleBoxLoader = () => {
  const theme = useTheme();
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={220}
      viewBox="0 0 400 220"
      backgroundColor={theme.colors.primary} // Morado claro para simular el fondo
      foregroundColor="#c4b5fd" // Tono más claro para animación
    >
      {/* Recuadro morado completo */}
      <Rect x="0" y="0" rx="8" ry="8" width="400" height="220" />
    </ContentLoader>
  );
};

export default SkeletonPurpleBoxLoader;
