# O objetivo desse código é receber os dados e retornar o modelo
from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import word_tokenize
import pickle
import pandas as pd
import numpy as np


# Abrindo o dicionário de dados que foram feitos o BoW
with open('dict_bow.pkl', 'rb') as dict_bow:
    dictionary_custom = pickle.load(dict_bow)

# Abrindo o modelo 
with open('modelo_naive_bayes.pkl', 'rb') as model_nb:
    model = pickle.load(model_nb)

# Definindo novas váriaveis para carregar o modelo e dict
dict_bow = dictionary_custom
model_bow = model

def vetorizar_frase(frase, dictionary):
    vectorizer = CountVectorizer(vocabulary=dictionary)
    frase_vetorizada = vectorizer.transform([frase])
    return frase_vetorizada

# Dicionários de emoji 
emoji_dict = {
    '😀': 'feliz ',
    '😂': 'risos ',
    '😔': 'triste ',
    '👏': 'palmas ',
    '🥰': 'amável ',
    '💙': 'coração azul ',
    '🙏🏼': 'orando ',
    '✨': 'brilhando ',
    '🤮': 'nojo ',
    '🚀': 'foguete ',
    '👿': 'diabo ',
    '🤢': 'nojo ',
    '🔥': 'fogo ',
    '😡': 'fúria ',
    '😠': 'raiva ',
    '🤣': 'rindo ',
    '😃': 'feliz ',
    '😎': 'curtindo ',
    '😊': 'feliz ',
    '🤩': 'maravilhado ',
    '😋': 'delicioso ',
    '😆': 'risada ',
    '😌': 'calmo ',
    '🤔': 'pensativo ',
    '😷': 'máscara ',
    '🤣': 'muitoRiso ',
    '🥺': 'carinhoso ',
    '👍': 'positivo ',
    '🤯': 'menteExplodida ',
    '😅': 'alívio ',
    '🥰': 'carinhaComCoração ',
    '😓': 'suor ',
    '😑': 'tédio',
    '🤫': 'silêncio',
    '🤝': 'apertoDeMãos',
    '😊': 'sorriso',
    '😍': 'apaixonado',
    '😭': 'choro ',
    '🤗': 'abraço ',
    '🎉': 'festa ',
    '😎': 'descolado ',
    '😱': 'surpresa ',
    '😴': 'sono ',
    '🙌': 'celebração ',
    '🤔': 'pensativo ',
    '😘': 'beijo ',
    '🥳': 'festeiro ',
    '🙄': 'revirarOsOlhos ',
    '😌': 'alívio ',
    '🤫': 'segredo ',
    '😇': 'inocente ',
    '😂': 'muitoEngraçado ',
    '🤔': 'pensando ',
    '😴': 'sono ',
    '🤪': 'loucura ',
    '😢': 'decepcionadoAliviado ',
    '😬': 'nervoso ',
    '😌': 'alívio',
    '😔': 'triste ',
    '😞': 'desapontado ',
    '😢': 'choro ',
    '😭': 'chorando ',
    '😡': 'raiva ',
    '🤯': 'mente explodida ',
    '😳': 'surpreso ',
    '😱': 'gritando ',
    '😨': 'assustado ',
    '😴': 'sono ',
    '🥱': 'bocejando ',
    '🤢': 'enjoado ',
    '🤮': 'vomitando ',
    '🤧': 'espirro ',
    '🤒': 'doente ',
    '🤕': 'machucado ',
    '🤑': 'dinheiro ',
}

# Função que converte todos os emojis 
def emoji_to_word(text):
    for emoji_code, emoji_word in emoji_dict.items():
        text = text.replace(emoji_code, emoji_word)
    return text

# Função que tokeniza o texto 
def tokenize_text(text):
    # Converter palavras da frase para minúsculas
    text = text.lower() 
    # Tokenizar o texto em palavras
    tokens = word_tokenize(text) 
    # Remover stopwords das palavras tokenizadas
    stop_words = ['@', 'banco', 'btg', 'brg', 'pactual', 'btgpactual','pq', 'q', 'pra', 'vcs', 'vc', 'i', 'p', 'kkk', 'y', 'of', 'n', 'a', 'à', 'as', 'o', 'os', 'e', 'aos', 'do', 'das', 'dos', 'das', 'de', 'deles', 'dela', 'deles', 'delas', 'para', 'que', 'em', 'algo', 'algum', 'alguma', 'alguns', 'algumas', 'aqui', 'aquele', 'aquela', 'aqueles', 'aquelas', 'aqui', 'aquilo', 'cá', 'com', 'como', 'cada', 'coisa', 'daquele', 'daquela', 'daquilo', 'daqueles', 'daquelas', 'desse', 'deste', 'dessa', 'desses', 'destes', 'destas', 'ele', 'eles', 'ela', 'elas', 'eu', 'nos', 'nós', 'vocês', 'voces', 'enquanto', 'era',  'está', 'estamos', 'estão', 'estar', 'estará', 'estive', 'estivemos', 'estiver', 'estivera', 'estiveram', 'estivéramos', 'estiverem', 'estivermos', 'estivesse','estivessem', 'estivéssemos', 'estiveste', 'estivestes', 'estou',  'fará', 'farta', 'farto', 'fez', 'fim', 'foi', 'fomos', 'for', 'fora', 'foram', 'fôramos', 'forem', 'formos', 'fosse', 'fossem', 'fôssemos','foste', 'fostes', 'fui', 'fôssemos', 'há', 'houve', 'hoje', 'isso', 'isto', 'já', 'lá', 'lhe', 'lhes', 'lo', 'logo',  'mas', 'me', 'mesma', 'mesmas', 'mesmo', 'mesmos', 'meu', 'meus',  'minha', 'minhas', 'na', 'no', 'nas', 'nos', 'naquela', 'naquelas', 'naquele', 'naqueles', 'nem', 'nessa', 'nessas', 'nesse', 'nesses', 'nesta', 'nestas', 'neste', 'nestes', 'ninguém', 'nosso', 'nossa', 'nossos', 'nossas', 'num', 'numa', 'outra', 'outras', 'outro', 'outros', 'pela', 'pelo', 'perante', 'pois', 'ponto', 'pontos', 'por', 'porém', 'porque', 'porquê', 'própria', 'próprio', 'próprias', 'próprios', 'qual', 'quando', 'quanto', 'quantos', 'quantas', 'quê', 'quem', 'quer', 'quereis', 'querem', 'queremas', 'quis', 'quisemos', 'quiser', 'quisera', 'quiseram','quiséramos', 'quiserem', 'quisermos', 'quisésseis', 'quiséssemos', 'quiseste', 'quisestes', 'quiseste','quisestes', 'quizer', 'quizeram', 'quizerem', 'quizermos', 'quizesse', 'quizessem', 'quizéssemos', 'são', 'se', 'seja', 'sejam', 'sejamos', 'sem', 'sendo', 'ser', 'será', 'serão', 'será', 'seriam', 'seríamos','serias', 'seríeis', 'sete', 'seu', 'seus', 'sob', 'sobre', 'sois', 'só','somos', 'sou', 'sua', 'suas', 'tal', 'talvez', 'também', 'te', 'tem', 'têm', 'temos', 'tendes', 'tenha', 'tenham', 'tenhamos', 'tenho', 'tens', 'ter', 'terá', 'terão','terá', 'teriam', 'teríamos', 'terias', 'teríeis', 'teu', 'teus', 'teve', 'tivemos', 'tiver', 'tivera','tiveram', 'tivéramos', 'tiverem', 'tivermos', 'tivesse', 'tivessem', 'tivéssemos', 'tiveste', 'tivestes','tiveste', 'tivestes', 'um', 'uma', 'umas', 'uns']
    # Retorna a lista de comentários sem as palavras setadas para serem removidas
    tokens = [token for token in tokens if token not in stop_words if not token.startswith('@') and token.isalpha()]
    # Retorna o resultado da frase tokenizada, sem stopWords
    return tokens


# Carregar o modelo
with open('modelo_naive_bayes.pkl', 'rb') as file:
    modelo_carregado = pickle.load(file)

#pipeline de pré processamento:
def pipeline(entrada):
    entrada_emoji = emoji_to_word(entrada)
    print(entrada_emoji,'emoji')
    texto_processado = tokenize_text(entrada_emoji)
    print(texto_processado,'tokenizacao')
    vetor = vetorizar_frase(' '.join(texto_processado), dict_bow)
    print(vetor,'vetorizacao')
    predicao = modelo_carregado.predict(vetor)
    print(predicao,'prediction')
    return predicao

def main():

    # Recebe o input do usuario 
    x = ("triste porque o banco reduziu meu crédito 😠😠😠😠")
    entrada1 = 'Melhor desempenho dentre todas as carteiras do mercado financeiro! Vamos para cima!!!🚀📊'
    entrada2 = 'não tem mais a opção atendimento via chat no app, só via email 🤔 preciso de ajuda'

    # Output geral 
    feeling_of_text = pipeline(entrada1)


    # Print the result
    print(feeling_of_text)


if __name__ == "__main__":
    main()


# Quando retornar 
# 0 negativo
# 1 neutro 
# 2 positivo 