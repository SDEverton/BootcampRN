import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // for use with USB
  // const tron = Reactotron.configure({ host: '192.168.1.1' })
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
