import { View,Text, TouchableOpacity } from "react-native";
import styles from './styles';
import NavBar from "./components/DownBar";
import { useNavigation } from "@react-navigation/native";

export default function AboutUs(){
    const navigation=useNavigation()
        
      return(
        <View style={styles.about_us}>
           <View>
            </View>
            <View style={styles.main_about}>
                <Text style={styles.text_about}>Calculadora de Propinas V 0.1</Text>
                <TouchableOpacity style={styles.btn_preferences}
                onPress={()=> navigation.navigate('Settings')}
                >
                    <Text style={styles.text_preferences}>PREFERENCIAS</Text>
                </TouchableOpacity>
            </View>
            <NavBar/>
        </View>
    )
}