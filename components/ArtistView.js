import React from 'react';
import { View } from 'react-native';
import { Text } from '../UI';
import globalStyles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

function ArtistView(props) {
    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <Text>{props.navigation.getParam('artistId')}</Text>
            </ScrollView>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {

//     }
// })

export default ArtistView;
