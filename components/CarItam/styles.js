import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    width: '100%',
    marginTop: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
    // resize: 'cover',
    position: 'absolute',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;