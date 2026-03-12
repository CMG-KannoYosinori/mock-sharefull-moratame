/**
 * React Native WebViewにメッセージを送信する
 * アプリでない場合は何もしない
 */
function postMessageToReactNative() {
    // React Native WebView判定
    if (!window.ReactNativeWebView || !window.ReactNativeWebView.postMessage) {
        return;
    }
    window.ReactNativeWebView.postMessage('leaveForPayment');
}
