import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flatListColumnWrapperStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    addUserButton: {
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: 10, height: 50, width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    addUserButtonText: { color: '#FFFFFF', fontSize: 20, textAlign: 'center' }
})

export default styles