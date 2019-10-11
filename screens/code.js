import React, { useState } from "react";
import { WebView } from 'react-native-webview'
import { ActivityIndicator, View } from "react-native";
import server from '../server.js'
export default function App() {
    const [loadStatus, setLoadStatus] = useState(false)
    return (<>
        {loadStatus ? (
            <ActivityIndicator
                style={{
                    alignSelf: 'center',
                    size: 'large'
                }}
            />) : null}

        <WebView
            source={{ uri: server }}
            style={{ marginTop: 20 }}
            onLoadStart={() => setLoadStatus(true)}
            onLoadEnd={() => setLoadStatus(false)}
        />
    </>
    );
}
