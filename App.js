import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Gakusei</Text>
                    <Text style={styles.text}>Question Text</Text>
                    <View style={styles.buttons}>
                        <View style={styles.buttView}>
                            <Text style={styles.butt} onPress={(evt) => this.handleReply(1)}>A</Text>
                        </View>
                        <View style={styles.buttView}>
                            <Text style={styles.butt} onPress={(evt) => this.handleReply(2)}>B</Text>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <View style={styles.buttView}>
                            <Text style={styles.butt} onPress={(evt) => this.handleReply(3)}>C</Text>
                        </View>
                        <View style={styles.buttView}>
                            <Text style={styles.butt} onPress={(evt) => this.handleReply(4)}>D</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    handleReply(n) {
        console.log(n);
    }
}

const styles = StyleSheet.create({
    butt: {
        margin: 8,
        color: '#eee',
        fontSize: 36,
    },
    buttView: {
        margin: 8,
        backgroundColor: '#b23',
        flex:1,
    },
    safeContainer: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 72,
        color: '#a00',
        marginLeft: 15,
        marginRight: 15,
    },
    text: {
        color: '#eb1',
    },
    buttons: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        width: null,
    },
});
