import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

type Props = {
  tarefas: Tarefa[];
  onConcluirTarefa: (id: number) => void;
  onRemoverTarefa: (id: number) => void;
};



export const ListaTarefas = ({
  tarefas,
  onConcluirTarefa,
  onRemoverTarefa,
}: Props) => {
  return (
    <View style={styles.container}>
      {tarefas.map((tarefa) => (
        <View key={tarefa.id} style={styles.tarefa}>
          <TouchableOpacity
            style={styles.tarefaTitulo}
            onPress={() => onConcluirTarefa(tarefa.id)}
          >
            <Text
              style={[
                styles.tarefaTitulo,
                tarefa.concluida && styles.tarefaConcluida,
              ]}
            >
              {tarefa.titulo}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tarefaBotao}
            onPress={() => onRemoverTarefa(tarefa.id)}
          >
            <Text style={styles.tarefaBotaoTexto}><Icon name="trash" size={24} color="black" /></Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    justifyContent:"center",
  },
  tarefa: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  tarefaTitulo: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  tarefaBotao: {
    backgroundColor: "lightgray",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  tarefaBotaoTexto: {
    color: "#31CF67",
    
  },
  tarefaConcluida: {
    textDecorationLine: "line-through",
  },
});
