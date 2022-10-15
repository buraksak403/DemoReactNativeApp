import { Text, SafeAreaView, Button, Image } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../../../App'
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const Detail: React.FC<Props> = (props) => {
    const { firstName, lastName, age, image, company } = props.route.params.item
    const { address, department, title, name } = company

    return (
        <SafeAreaView style={styles.containerView}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.infoText} >First Name: {firstName}</Text>
            <Text style={styles.infoText} >Last Name: {lastName}</Text>
            <Text style={styles.infoText} >Age: {age}</Text>
            <Text style={styles.infoText} >Address: {address.address}</Text>
            <Text style={styles.infoText} >postalCode: {address.postalCode}</Text>
            <Text style={styles.infoText} >state: {address.state}</Text>
            <Text style={styles.infoText} >department: {department}</Text>
            <Text style={styles.infoText} >title: {title}</Text>
            <Text style={styles.infoText} >name: {name}</Text>
        </SafeAreaView>
    )
}

export default Detail