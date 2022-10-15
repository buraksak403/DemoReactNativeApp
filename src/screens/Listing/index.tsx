import { Text, SafeAreaView, Button, Alert, FlatList, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { userService } from '../../network/manager';
import ListItem from './ListItem';
import { UserData } from '../../store/user/models';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import { addUser, deleteUser, setUsers } from '../../store/user/actions';

type Props = NativeStackScreenProps<RootStackParamList, 'Listing'>;

const Listing: React.FC<Props & AppProps> = (props) => {
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const data = await userService.getDummyUsers();
        props.setUsers(data)
      } catch (error) {
        Alert.alert('Error occured');
      }
    };
    fetchUsers();
  }, []);

  const onItemClick = (item: UserData) => {
    props.navigation.navigate('Detail', { item })
  }

  return (
    <SafeAreaView style={{}}>
      <FlatList
        data={props.user.users}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-evenly',
        }}
        renderItem={({ item }) =>
          <ListItem
            item={item}
            onClick={onItemClick}
            onDeleteClick={(id) => props.deleteUser(id)}
          />}
        keyExtractor={(item) => String(item.id)}
      />
      <TouchableOpacity style={{
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: 10, height: 50, width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
      }} >
        <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }} >Add User</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const mapStateToProps = (state: AppState) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addUser, deleteUser, setUsers }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing);