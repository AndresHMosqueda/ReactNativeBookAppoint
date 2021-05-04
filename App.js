import React, { useState } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


const App = () => {
  const [citas, setCitas]= useState([
    {id: "1", paciente: "Hook", propietario: 'Juan', sintomas: "No come"},
    {id: "2", paciente: "Redux", propietario: 'Itzel', sintomas: "No duerme"},
    {id: "3", paciente: "Native", propietario: 'Josue', sintomas: "No canta"},
  ])

  //Eliminar paciente 
  const eliminarPaciente = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de citas</Text>

      <Formulario/>
      <Text style={styles.titulo}> {citas.length > 0 ? 'Administrador tus citas' : 'No hay citas'}</Text>
   
   <FlatList
     data={citas}
     renderItem={ ({item}) => (
     <Cita cita={item} eliminarPaciente={eliminarPaciente}/>
     )
    }
    keyExtractor={ cita => cita.id}
   />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076B",
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },

});

export default App;
