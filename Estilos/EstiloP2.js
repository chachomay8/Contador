import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    transform: [{ rotate: '180deg' }],
    flexDirection: 'row',
    alignItems: 'center',   
    width: '97%',
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#3b6ac0',
    borderRadius: 8,
    justifyContent: 'center',
  },
  box2: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '97%',
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#a04242',
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonLeft: {
    flex: 1,              // ocupa todo el espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingRight: 30,
  },
  buttonRight: {
    flex: 1,              // ocupa todo el espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch', 
    paddingLeft: 30,
  },
  txt: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  symbol: {
    fontSize: 60,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  menuButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#5f1b1b',
    borderRadius: 20,
    zIndex: 10,
  },
  menuButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 99,
  },
  menuPanel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
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
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 22,
  },
  menuTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#3a3a3a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  menuItemText: {
    color: '#ffffff',
    fontSize: 15,
  },
    subMenu: {
    flexDirection: 'row',      // opciones en fila horizontal
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 8,
  },
  subMenuItem: {
    backgroundColor: '#555555',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  subMenuText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;