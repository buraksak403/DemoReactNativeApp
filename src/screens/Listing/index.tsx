import { Text, SafeAreaView, Button, Alert, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { userService, UserData } from '../../network/manager';
import ListItem from './ListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Listing'>;

const Listing: React.FC<Props> = (props) => {
  const [users, setUsers] = useState<UserData[]>()

  useEffect(() => {
    const refresh = async (): Promise<void> => {
      try {
        const data = await userService.getDummyUsers();
        setUsers(data)
      } catch (error) {
        Alert.alert('Error occured');
      }
    };
    refresh();
  }, []);

  const onItemClick = (item: UserData) => {
    props.navigation.navigate('Detail', { item })
  }

  return (
    <SafeAreaView style={{}}>
      <FlatList
        data={users}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}
        renderItem={({ item }) => <ListItem item={item} onClick={onItemClick} />}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  )
}

export default Listing