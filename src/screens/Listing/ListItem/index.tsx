import { Text, SafeAreaView, Button, TouchableOpacity, Image, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { UserData } from '../../../store/user/models';


type Props = {
    item: UserData
    onClick: (item: UserData) => void
    onDeleteClick: (id: number) => void
}

const ListItem: React.FC<Props> = ({ item, onClick, onDeleteClick }) => {
    return (
        <TouchableOpacity style={{ flex: 1, marginBottom: 20 }} onPress={() => {
            onClick(item)
        }}>
            <Text style={{ fontSize: 20, position: 'absolute', top: 30, right: 30, zIndex: 100 }} onPress={() => {
                onDeleteClick(item.id)
            }} >X</Text>
            <Image source={{ uri: item.image }} style={{ aspectRatio: 1 }} />
            <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10, backgroundColor: '#000000', padding: 6, borderRadius: 6 }} >
                <Text style={{ color: '#FFFFFF' }} >{item.firstName}, {item.age}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem