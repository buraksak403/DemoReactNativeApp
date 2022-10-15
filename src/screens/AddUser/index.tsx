import { Text, SafeAreaView, Alert, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootStackParamList } from '../../../App';
import { UserData } from '../../store/user/models';
import { AppState } from '../../store';
import { addUser } from '../../store/user/actions';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AddUser'>;

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const AddUser: React.FC<Props & AppProps> = (props) => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [imageUrl, setImageUrl] = useState<string>("")

    const onAddClick = () => {
        if (firstName == "" || lastName == "" || age == 0) {
            Alert.alert("Please fill all inputs")
            return
        }

        const user: UserData = {
            id: getRandomInt(100, 100000),
            firstName: firstName,
            lastName: lastName,
            age: age,
            image: imageUrl,
            // these fields also can be added to UI
            company: {
                address: {
                    address: "",
                    postalCode: "",
                    state: "",
                    city: ""
                },
                department: "",
                name: "",
                title: ""
            }
        }

        props.addUser(user)
        props.navigation.goBack()
    }

    return (
        <SafeAreaView style={{}}>
            <TextInput placeholder='First Name' style={styles.textInput} onChangeText={(text) => setFirstName(text)} />
            <TextInput placeholder='Last Name' style={styles.textInput} onChangeText={(text) => setLastName(text)} />
            <TextInput placeholder='Age' style={styles.textInput} onChangeText={(text) => setAge(parseInt(text))} />
            <TextInput placeholder='Image Url' style={styles.textInput} onChangeText={(text) => setImageUrl(text)} />
            <TouchableOpacity
                style={styles.addButton}
                onPress={onAddClick}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, textAlign: 'center' }} >Add User</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
});
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ addUser }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddUser);