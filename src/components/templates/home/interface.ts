import {ICryptoList} from '@/components/organisms/crypto-list/interface';
import React, {ReactNode} from 'react';

export interface IHomeTemplateProps {
  children: ReactNode;
  username: string;
  isFirstTime: boolean;
  onHideWelcomeDialog?: () => void;
}
export interface IHomeTemplateChildren {
  CrytpoList: React.FC<ICryptoList>;
}
