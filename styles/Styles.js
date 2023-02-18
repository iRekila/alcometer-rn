import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkContainer: {
        backgroundColor: '#333',
    },
    text: {
        color: '#333',
        fontSize: 18,
    },
    darkText: {
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#f69edf',
        borderRadius: 10,
        padding: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    genderText: {
        fontSize: 18,
        marginLeft: 10,
        color: '#f69edf',
    },
    button: {
        backgroundColor: '#f69edf',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
    },
    result: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20,
    },
});

export default styles;