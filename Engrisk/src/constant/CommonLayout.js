import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from './DeviceInfo';
import { scaleModerate, scaleVertical, scale } from './Scale';

export const layouts = StyleSheet.create({
    centerCol: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    centerRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})