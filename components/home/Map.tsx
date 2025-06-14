import { useAssets } from 'expo-asset';
import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { useWindowDimensions } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

type MapProps = {
    onInitialized: (zoomToGeoJSONFunc: () => void) => void;
    onMapPress: (coordinates: [number, number]) => void;
};

export type MapRef = {
    zoomToGeoJSON: () => void;
};

const Map = React.forwardRef<MapRef, MapProps>((props, ref) => {
    const { onInitialized, onMapPress } = props;

    const [assets] = useAssets([require('../../assets/map.html')]);
    const [htmlString, setHtmlString] = useState<string>();

    const dimensions = useWindowDimensions();

    const webViewInternalRef = useRef<WebView | null>(null);

    const zoomToGeoJSON = () => {
        webViewInternalRef.current?.injectJavaScript('window.zoomToGeoJSON(); true');
    };

    useImperativeHandle(ref, () => ({
        zoomToGeoJSON: zoomToGeoJSON,
    }));

    useEffect(() => {
        if (assets) {
            fetch(assets[0].localUri || '')
                .then((res) => res.text())
                .then((html) => {
                    setHtmlString(html);
                    onInitialized(zoomToGeoJSON);
                });
        }
    }, [assets, onInitialized]);

    const messageHandler = (e: WebViewMessageEvent) => {
        const coords = JSON.parse(e.nativeEvent.data) as [number, number];
        onMapPress(coords);
    };

    if (!htmlString) {
        return <></>;
    }

    return (
        <WebView
            ref={webViewInternalRef}
            injectedJavaScript=''
            source={{
                html: htmlString,
            }}
            javaScriptEnabled
            style={{
                width: dimensions.width,
                height: dimensions.height,
            }}
            scrollEnabled={false}
            overScrollMode='never'
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scalesPageToFit={false}
            containerStyle={{ flex: 1 }}
            onMessage={messageHandler}
        />
    );
});

export default Map;