
import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    SafeAreaView,
    View,
    Button
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export const ChatScreen = () => {
    const [text, setText] = useState<string>('');

    return (
        <SafeAreaView style={styles.container}>
            <ExpoStatusBar style="light" />
            <View style={styles.inputTextContainer}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(value) => {
                        setText(value);
                    }}
                    value={text}
                    placeholder="メッセージを入力してください"
                    placeholderTextColor="#777"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                />
                <Button title="send" onPress={() => {}} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputTextContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#999',
        height: 32,
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10
    }
});