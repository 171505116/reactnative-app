import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity
  } from 'react-native';

function HomePage(){

    return(
        <View>
            <Text> Home Page </Text>
            <Button>skip to detailPage</Button>
        </View>
    )
}

export default HomePage;