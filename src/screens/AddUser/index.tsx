import { Text, SafeAreaView, Alert, TouchableOpacity, TextInput, ScrollView } from 'react-native'
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

const AddUser: React.FC<Props & ReduxProps> = (props) => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [imageUrl, setImageUrl] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [postalCode, setPostalCode] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [department, setDepartment] = useState<string>("")
    const [name, setCompanyName] = useState<string>("")
    const [title, setCompanyTitle] = useState<string>("")

    const onAddClick = () => {
        if (firstName == ""
            || lastName == ""
            || age == 0
            || address == ""
            || postalCode == ""
            || state == ""
            || city == ""
            || department == ""
            || name == ""
            || title == "") {
            Alert.alert("Please fill all inputs")
            return
        }

        const user: UserData = {
            id: getRandomInt(100, 99999999),
            firstName: firstName,
            lastName: lastName,
            age: age,
            image: imageUrl,
            company: {
                address: {
                    address: address,
                    postalCode: postalCode,
                    state: state,
                    city: city
                },
                department: department,
                name: name,
                title: title
            }
        }

        props.addUser(user)
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <TextInput placeholder='First Name' style={styles.textInput} onChangeText={(text) => setFirstName(text)} />
            <TextInput placeholder='Last Name' style={styles.textInput} onChangeText={(text) => setLastName(text)} />
            <TextInput placeholder='Age' style={styles.textInput} onChangeText={(text) => setAge(parseInt(text))} />
            <TextInput placeholder='Image Url' style={styles.textInput} onChangeText={(text) => setImageUrl(text)} />
            <TextInput placeholder='Address' style={styles.textInput} onChangeText={(text) => setAddress(text)} />
            <TextInput placeholder='PostalCode' style={styles.textInput} onChangeText={(text) => setPostalCode(text)} />
            <TextInput placeholder='State' style={styles.textInput} onChangeText={(text) => setState(text)} />
            <TextInput placeholder='City' style={styles.textInput} onChangeText={(text) => setCity(text)} />
            <TextInput placeholder='Department' style={styles.textInput} onChangeText={(text) => setDepartment(text)} />
            <TextInput placeholder='Name' style={styles.textInput} onChangeText={(text) => setCompanyName(text)} />
            <TextInput placeholder='Title' style={styles.textInput} onChangeText={(text) => setCompanyTitle(text)} />
            <TouchableOpacity
                style={styles.addButton}
                onPress={onAddClick}>
                <Text style={styles.addButtonText}>Add User</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
});
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ addUser }, dispatch);

type ReduxProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddUser);