import ProfileTemplate from '@/components/templates/profile/Profile';
import useUserStore from '@/state/user';
import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TNavigationRoutes} from '@/interfaces/types/navigation';

function ProfileScreen(): React.JSX.Element {
  const {reset} = useUserStore();
  const navigation = useNavigation<TNavigationRoutes>();
  return (
    <View style={{flex: 1}}>
      <ProfileTemplate
        onSubmit={() => {
          reset();
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}

export default ProfileScreen;
