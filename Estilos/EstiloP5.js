import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },

  rowTop: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },

  playerBoxL: {
    flex: 1,
    flexDirection: 'column',
  },
  playerBoxR: {
    flex: 1,
    flexDirection: 'column',
  },
  playerBoxBottom: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  buttonTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  txt: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 62,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  txt90: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 62,
    fontWeight: 'bold',
    color: '#ffffff',
    transform: [{ rotate: '90deg' }],
  },
  txt270: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 62,
    fontWeight: 'bold',
    color: '#ffffff',
    transform: [{ rotate: '270deg' }],
  },

  symbol: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  symbol90: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 'bold',
    transform: [{ rotate: '90deg' }],
  },
  symbol270: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 'bold',
    transform: [{ rotate: '270deg' }],
  },

  menuButton: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: '#5f1b1b',
    borderRadius: 20,
    zIndex: 10,
    alignSelf: 'center',
  },
  menuButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 99,
  },
  menuPanel: {
    position: 'absolute',
    top: 0, bottom: 0, right: 0,
    width: '65%',
    backgroundColor: '#1e1e1e',
    padding: 25,
    paddingTop: 60,
    zIndex: 100,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  closeButton: { alignSelf: 'flex-end', marginBottom: 20 },
  closeButtonText: { color: '#ffffff', fontSize: 22 },
  menuTitle: { color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { backgroundColor: '#3a3a3a', padding: 14, borderRadius: 8, marginBottom: 12 },
  menuItemText: { color: '#ffffff', fontSize: 15 },
  subMenu: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 8 },
  subMenuItem: { backgroundColor: '#555555', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  subMenuText: { color: '#ffffff', fontSize: 15, fontWeight: 'bold' },
});

export default styles;