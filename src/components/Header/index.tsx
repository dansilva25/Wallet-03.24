import { View, Image, TouchableOpacity, Linking, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


import Line from "@/components/Line";
import { styles } from "./styles";


export default function Header() {

    const navigator = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>

                <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/d44ns/') }}>
                    <Image style={styles.logo} source={require('../../assets/images/white.png')}></Image>
                </TouchableOpacity>

                <Pressable onPress={() => navigator.navigate('Profile')}>
                    <Image style={styles.avatar} source={require('../../assets/images/perfil.jpg')}></Image>
                </Pressable>
            </View>
            <Line></Line>
        </View>
    )
}



