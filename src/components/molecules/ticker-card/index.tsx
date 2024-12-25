import * as React from 'react';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {ITickerCardProps} from './interface';

const TickerCard = ({info}: ITickerCardProps) => (
  <Card.Title
    title={info.symbol}
    subtitle={info.name}
    left={props => <Avatar.Icon {...props} icon="folder" />}
    right={props => (
      <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
    )}
  />
);

export default TickerCard;
