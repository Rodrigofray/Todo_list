import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


type AdicionarTarefaProps = {
  tarefas: string[];
  onAdicionarTarefa: (titulo: string) => void;
};

export const AdicionarTarefa = ({
  tarefas,
  onAdicionarTarefa,
}: AdicionarTarefaProps) => {
  const [titulo, setTitulo] = useState("");

  const handleAdicionarTarefa = () => {
    const tituloTrimmed = titulo.trim().toLowerCase();
    if (tituloTrimmed && !tarefas.includes(tituloTrimmed)) {
      onAdicionarTarefa(tituloTrimmed);
      setTitulo("");
    }
  };

  return (
    <View style={styles.adicionarTarefaContainer}>
      <TextInput
        style={styles.adicionarTarefaInput}
        placeholder="Digite o título da tarefa"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TouchableOpacity
        style={styles.adicionarTarefaBotao}
        onPress={handleAdicionarTarefa}
      >
        <Text style={styles.adicionarTarefaBotaoTexto}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  adicionarTarefaContainer: {
    width: '100%',
    backgroundColor:"#4F4F4F",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  adicionarTarefaInput: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    height: 56,
    borderRadius: 4,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    borderColor:"white",
  },
  adicionarTarefaBotao: {
    backgroundColor: "#32cd32",
    padding: 8,
    borderRadius: 4,
  },
  adicionarTarefaBotaoTexto: {
    color: "white",
    fontWeight: "bold",
  },
});
