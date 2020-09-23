import { Alert } from "react-native";
export const notificationAlert = (title, content) => {
    Alert.alert(
        title || 'Thông báo',
        content || 'Sản phẩm của Headway',
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
    );
}