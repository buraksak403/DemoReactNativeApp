import { Text, SafeAreaView, Button, Alert, FlatList, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootStackParamList } from '../../../App';
import { userService } from '../../network/manager';
import ListItem from './ListItem';
import { UserData } from '../../store/user/models';
import { AppState } from '../../store';
import { addUser, deleteUser, setUsers } from '../../store/user/actions';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Listing'>;

const Listing: React.FC<Props & ReduxProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const data = await userService.getDummyUsers();
        props.setUsers(data)
        setLoading(false)
      } catch (error) {
        Alert.alert('Error occured');
        setLoading(false)
      }
    };
    fetchUsers();
  }, []);

  const onItemClick = (item: UserData) => {
    props.navigation.navigate('Detail', { item })
  }

  return (
    <SafeAreaView>
      {loading ? <ActivityIndicator /> :
        <View>
          <FlatList
            data={props.user.users}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 100 }}
            columnWrapperStyle={styles.flatListColumnWrapperStyle}
            renderItem={({ item }) =>
              <ListItem
                item={item}
                onClick={onItemClick}
                onDeleteClick={(id) => props.deleteUser(id)}
              />}
            keyExtractor={(item) => String(item.id)}
          />
          <TouchableOpacity
            style={styles.addUserButton}
            onPress={() => props.navigation.navigate('AddUser')}>
            <Text style={styles.addUserButtonText} >Add User</Text>
          </TouchableOpacity>
        </View>}
    </SafeAreaView>
  )
}

const mapStateToProps = (state: AppState) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addUser, deleteUser, setUsers }, dispatch);

type ReduxProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing);