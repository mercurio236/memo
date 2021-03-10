import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {DrawerActions} from '@react-navigation/native'




export default function Header({navigation}){
    return(
        <View>
            <TouchableOpacity>
                <Text>Aqui</Text>
            </TouchableOpacity>
        </View>
    )
}