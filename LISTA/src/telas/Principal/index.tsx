import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { AdicionarTarefa } from "../../componentes/AdicionarTarefa";
import { ListaTarefas } from "../../componentes/ListaTarefas";

export function Home() {
  const [text, setText] = useState("Texto Simples");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");



  async function onPress() {
    console.log("Func Funcionando");

    const response = await axios.get("http:// 192.168.120.14:3333/");

    const result = response.data.find((item: { id: string; }) => {
      return item.id == text;
    });

   

    
  }

  async function onPost() {
    await axios
      .post("http:// 192.168.120.14:3333/", {
        name: nome,
       
      })
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  } 
}

type TarefaState = {
  id: number;
  titulo: string;
  concluida: boolean;
};

export const Principal = () => {
  const [tarefas, setTarefas] = useState<TarefaState[]>([]);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: TarefaState = {
      id: Date.now(),
      titulo,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const concluirTarefa = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, concluida: !tarefa.concluida };
        } else {
          return tarefa;
        }
      })
    );
  };

  const removerTarefa = (id: number) => {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  };

  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <View style={styles.container}>
     <Text style={styles.titulo}>Lista de Tarefas</Text>
      <AdicionarTarefa
        tarefas={tarefas.map((tarefa) => tarefa.titulo)}
        onAdicionarTarefa={adicionarTarefa}
      />
       

      <Text style={styles.titulo2}>Tarefas:</Text>
      <ListaTarefas
        tarefas={tarefas.filter((tarefa) => !tarefa.concluida)}
        onConcluirTarefa={concluirTarefa}
        onRemoverTarefa={removerTarefa}
      />
      
      <Text style={styles.titulo2}>Tarefas Prontas:</Text>
      <ListaTarefas
        tarefas={tarefas.filter((tarefa) => tarefa.concluida)}
        onConcluirTarefa={concluirTarefa}
        onRemoverTarefa={removerTarefa}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    paddingTop: 40,
   
    marginTop:5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 8,
    marginHorizontal: 16,
   textAlign:"center"
   
  }, titulo2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 8,
    marginHorizontal: 16,
  
   
  },
  tarefasConcluidas: {
    fontSize: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  adicionarTarefaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  adicionarTarefaInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
});