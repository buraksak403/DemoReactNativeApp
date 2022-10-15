import { Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { UserData } from '../../../store/user/models';
import styles from './styles';

type Props = {
    item: UserData
    onClick: (item: UserData) => void
    onDeleteClick: (id: number) => void
}

const ListItem: React.FC<Props> = ({ item, onClick, onDeleteClick }) => {
    const defaultProfileImage = require('../../../assets/default-user-profile.jpeg')

    return (
        <TouchableOpacity style={{ flex: 1 / 2, marginBottom: 20 }} onPress={() => {
            onClick(item)
        }}>
            <Text
                style={styles.deleteButton}
                onPress={() => onDeleteClick(item.id)}>X</Text>
            {item.image
                ? <Image source={{ uri: item.image }} style={{ aspectRatio: 1 }} />
                : <Image style={{}} source={defaultProfileImage} />}
            <View style={styles.nameAgeView} >
                <Text style={{ color: '#FFFFFF' }} >{item.firstName}, {item.age}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem