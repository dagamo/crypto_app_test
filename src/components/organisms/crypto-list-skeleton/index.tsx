import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {View, StyleSheet} from 'react-native';

const CryptoSkeletonList = () => {
  return (
    <View style={styles.container}>
      {[...Array(10)].map((_, index) => (
        <View
          key={`crypto-skeleton-${index}`}
          style={{marginBottom: 10, backgroundColor: '#FFF'}}>
          <ContentLoader
            speed={2}
            width="100%"
            height={80}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <Circle cx="40" cy="40" r="30" />
            <Rect x="80" y="20" rx="4" ry="4" width="100" height="16" />
            <Rect x="80" y="45" rx="4" ry="4" width="60" height="12" />
            <Rect x="300" y="25" rx="4" ry="4" width="80" height="16" />
            <Rect x="300" y="50" rx="4" ry="4" width="50" height="12" />
          </ContentLoader>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default CryptoSkeletonList;
