module.exports = {
  env:{
    apiKey: process.env.API_KEY1,
    apiKey2: process.env.API_KEY2,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiKey: process.env.API_KEY1,
    apiKey2: process.env.API_KEY2,// Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.API_KEY1,
    apiKey2: process.env.API_KEY2,
  },
}

