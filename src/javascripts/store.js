const store = {
  version: '[AIV]{version}[/AIV]',
  plugins: {
    chat: {
      url: 'https://cdn.jsdelivr.net/gh/markeaze/markeaze-js-chat-client@latest/dist/mkz-chat-client.js',
      settings: {}
    },
    chatAttachment: {
      url: 'https://cdn.jsdelivr.net/gh/markeaze/markeaze-js-chat-client@latest/dist/mkz-chat-client-attachment.js',
      enabled: true
    }
  },
  trackerName: 'markeaze-js',
  debugMode: false,
  trackEnabled: true,
  appKey: undefined,
  visitor: {},
  uid: undefined,
  assets: null,
  cookieUid: '_mkz_dvc_uid',
  region: null,
  trackerEndpoint: null,
  trackerUrl: null,
  chatEndpoint: null,
  chatUrl: null,
  airbrakeProject: 229028,
  airbrakeApiKey: '3927498a0d17867a76acf5aa97eba72d',
  webFormPreview: null
}

export default store

export const commit = (key, value) => {
  store[key] = value
}