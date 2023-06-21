#IMPORTAÇÃO DAS BIBLIOTECAS
from flask import Flask, jsonify, request, send_from_directory
import pickle
import nltk
import re
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import CountVectorizer
import ast
import numpy as np
import json
from collections import Counter
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from flask_cors import CORS

#DICIONÁRIO DE EMOJIS
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

#FUNÇÃO DE TRANSFORMAÇÃO DE EMOJI PARA PALAVRA
def emoji_to_word(textos):
    textos_processados = []
    for texto in textos:
        palavras = texto.split()
        texto_processado = []
        for palavra in palavras:
            if palavra in emoji_dict:
                texto_processado.append(emoji_dict[palavra])
            else:
                texto_processado.append(palavra)
        texto_processado = ' '.join(texto_processado)
        textos_processados.append(texto_processado)
    
    return textos_processados

#FUNÇÃO DE PRÉ PROCESSAMENTO DE TEXTO (TOKENIZAÇÃO, REMOÇÃO DE STOP WORDS E ALFANUMÉRICOS)
def processarTexto(textos):
    textos_processados = []
    for texto in textos:
        texto = texto.lower()
        tokens = word_tokenize(texto)
        stop_words = [
            '@', 'banco', 'btg', 'brg', 'pactual', 'btgpactual', 'pq', 'q', 'pra', 'vcs', 'vc', 'i', 'p', 'kkk', 'y', 'of',
            'n', 'a', 'à', 'as', 'o', 'os', 'e', 'aos', 'do', 'das', 'dos', 'das', 'de', 'deles', 'dela', 'deles', 'delas',
            'para', 'que', 'em', 'algo', 'algum', 'alguma', 'alguns', 'algumas', 'aqui', 'aquele', 'aquela', 'aqueles',
            'aquelas', 'aqui', 'aquilo', 'cá', 'com', 'como', 'cada', 'coisa', 'daquele', 'daquela', 'daquilo', 'daqueles',
            'daquelas', 'desse', 'deste', 'dessa', 'desses', 'destes', 'destas', 'ele', 'eles', 'ela', 'elas', 'eu', 'nos',
            'nós', 'vocês', 'voces', 'enquanto', 'era', 'está', 'estamos', 'estão', 'estar', 'estará', 'estive', 'estivemos',
            'estiver', 'estivera', 'estiveram', 'estivéramos', 'estiverem', 'estivermos', 'estivesse', 'estivessem',
            'estivéssemos', 'estiveste', 'estivestes', 'estou', 'fará', 'farta', 'farto', 'fez', 'fim', 'foi', 'fomos',
            'for', 'fora', 'foram', 'fôramos', 'forem', 'formos', 'fosse', 'fossem', 'fôssemos', 'foste', 'fostes', 'fui',
            'fôssemos', 'há', 'houve', 'hoje', 'isso', 'isto', 'já', 'lá', 'lhe', 'lhes', 'lo', 'logo', 'mas', 'me', 'mesma',
            'mesmas', 'mesmo', 'mesmos', 'meu', 'meus', 'minha', 'minhas', 'na', 'no', 'nas', 'nos', 'naquela', 'naquelas',
            'naquele', 'naqueles', 'nem', 'nessa', 'nessas', 'nesse', 'nesses', 'nesta', 'nestas', 'neste', 'nestes',
            'ninguém', 'nosso', 'nossa', 'nossos', 'nossas', 'num', 'numa', 'outra', 'outras', 'outro', 'outros', 'pela',
            'pelo', 'perante', 'pois', 'ponto', 'pontos', 'por', 'porém', 'porque', 'porquê', 'própria', 'próprio',
            'próprias', 'próprios', 'qual', 'quando', 'quanto', 'quantos', 'quantas', 'quê', 'quem', 'quer', 'quereis',
            'querem', 'queremas', 'quis', 'quisemos', 'quiser', 'quisera', 'quiseram', 'quiséramos', 'quiserem',
            'quisermos', 'quisésseis', 'quiséssemos', 'quiseste', 'quisestes', 'quiseste', 'quisestes', 'quizer',
            'quizeram', 'quizerem', 'quizermos', 'quizesse', 'quizessem', 'quizéssemos', 'são', 'se', 'seja', 'sejam',
            'sejamos', 'sem', 'sendo', 'ser', 'será', 'serão', 'será', 'seriam', 'seríamos', 'serias', 'seríeis', 'sete',
            'seu', 'seus', 'sob', 'sobre', 'sois', 'só', 'somos', 'sou', 'sua', 'suas', 'tal', 'talvez', 'também', 'te',
            'tem', 'têm', 'temos', 'tendes', 'tenha', 'tenham', 'tenhamos', 'tenho', 'tens', 'ter', 'terá', 'terão',
            'terá', 'teriam', 'teríamos', 'terias', 'teríeis', 'teu', 'teus', 'teve', 'tivemos', 'tiver', 'tivera',
            'tiveram', 'tivéramos', 'tiverem', 'tivermos', 'tivesse', 'tivessem', 'tivéssemos', 'tiveste', 'tivestes',
            'tiveste', 'tivestes', 'um', 'uma', 'umas', 'uns'
        ]
        tokens = [
            token for token in tokens if token not in stop_words and not token.startswith('@') and token.isalpha()
        ]
        textos_processados.append(tokens)
    return textos_processados

#VETORIZAÇAÕ DE FRASES UTILIZANDO DICIONÁRIO PRODUZIDO NO BAG OF WORDS
def vetorizar_frases(frases, dictionary):
    frases = [' '.join(tokens) for tokens in frases]
    vectorizer = CountVectorizer()
    vectorizer.set_params(vocabulary=dictionary)
    frases_vetorizadas = vectorizer.fit_transform(frases)
    return frases_vetorizadas

#CARREGAMENTO DO MODELO
with open('modelo_naive_bayes.pkl', 'rb') as file:
    modelo_carregado = pickle.load(file)

#CARREGAMENTO DO DICIONÁRIO
with open('dictionary.pkl', 'rb') as file:
    dictionary2 = pickle.load(file)

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

# Rota para servir os arquivos estáticos da pasta "imagens"
@app.route('/imagens/<path:filename>', methods=['GET'])
def servir_imagem(filename):
    print(filename)
    return send_from_directory('imagens', filename)

#CLASSIFICAÇÃO DE COMENTÁRIO
def classificar():
    dados = request.json
    # Aplique a função emoji_to_word() aos dados do web scraping
    textos_entrada = dados["dados"]
    authors_entrada = dados["authors"]
    textos_processados = emoji_to_word(textos_entrada)
    textos_processados = processarTexto(textos_processados)
    frases_vetorizadas = vetorizar_frases(textos_processados, dictionary2)
    frases_vetorizadas = frases_vetorizadas.toarray()  # Converter para matriz densa
    predicoes = modelo_carregado.predict(frases_vetorizadas)

    # Mapear valores numéricos para palavras correspondentes
    mapeamento_classes = {0: "negativo", 1: "neutro", 2: "positivo"}
    predicoes_palavras = [mapeamento_classes[predicao] for predicao in predicoes]

    res = []
    for index in range(len(predicoes_palavras)):
        res.append({
            'author': authors_entrada[index],
            'comment': textos_entrada[index],
            'predicao': predicoes_palavras[index]
        })
    

    return res

#PROPORÇÃO DOS SENTIMENTOS PELO TOTAL DE COMENTÁRIOS
def proporcoes():
    dados = request.json["dados"]
    
    # Aplicar as transformações necessárias na entrada
    entrada_processada = emoji_to_word(dados)
    texto_processado = processarTexto(entrada_processada)
    frases_vetorizadas = vetorizar_frases(texto_processado, dictionary2)
    frases_vetorizadas = frases_vetorizadas.toarray()
    
    # Realizar a classificação usando o modelo carregado
    predicoes = modelo_carregado.predict(frases_vetorizadas)
    
    # Contar a ocorrência de cada classificação
    proporcoes = dict(Counter(predicoes))
    
    # Converter as chaves do dicionário para o tipo int
    proporcoes = {int(classe): count for classe, count in proporcoes.items()}
    
    # Calcular as proporções em porcentagem
    total = len(predicoes)
    proporcoes_percentual = {classe: (count/total) * 100 for classe, count in proporcoes.items()}
    
    return proporcoes_percentual

#NUVEM DE PALAVRAS
def nuvem_palavras():
    dados = request.json["dados"]

    # Aplicar a função emoji_to_word aos dados
    dados_processados = emoji_to_word(dados)

    # Aplicar a função processarTexto aos dados
    dados_processados = processarTexto(dados_processados)

    # Unir todos os textos em uma única lista de palavras
    palavras = [palavra for texto in dados_processados for palavra in texto]

    # Remover stopwords das palavras
    stop_words = set(stopwords.words('portuguese'))
    palavras_filtradas = [palavra for palavra in palavras if palavra.lower() not in stop_words]

    
    # Unir todos os textos em uma única string
    texto_completo = ' '.join(palavras_filtradas)

    # Criar a nuvem de palavras
    wordcloud = WordCloud(width=800, height=400, background_color='white').generate(texto_completo)

    # Plotar a nuvem de palavras
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.tight_layout()

    # Salvar a imagem da nuvem de palavras em um arquivo
    imagem_nuvem = 'imagens/nuvem_palavras.png'
    plt.savefig(imagem_nuvem)

    # Retornar o nome do arquivo da imagem
    return "http://localhost:5000/" + imagem_nuvem


#TOP 10 PALAVRAS
nltk.download('punkt')
nltk.download('stopwords')

def top_palavras():
    dados = request.json["dados"]
    # print(dados)

    # Aplicar a função emoji_to_word aos dados
    dados_processados = emoji_to_word(dados)

    # Aplicar a função processarTexto aos dados
    dados_processados = processarTexto(dados_processados)

    # Unir todos os textos em uma única lista de palavras
    palavras = [palavra for texto in dados_processados for palavra in texto]
    print(palavras)

    # Remover stopwords das palavras
    stop_words = set(stopwords.words('portuguese'))
    palavras_filtradas = [palavra for palavra in palavras if palavra.lower() not in stop_words]

    # Contar a ocorrência das palavras
    contagem_palavras = Counter(palavras_filtradas)

    # Obter as top 10 palavras mais frequentes
    top_palavras = contagem_palavras.most_common(10)

    print(top_palavras)

    # Retornar as top 10 palavras em formato JSON
    return  top_palavras

#TOP PERFIS
def top_profiles():
    dados = request.json
    authors = dados["authors"]
    author_count = {}

    for author in authors:
        if author in author_count:
            author_count[author] += 1
        else:
            author_count[author] = 1

    top_authors = sorted(author_count, key=author_count.get, reverse=True)[:10]

    return top_authors

#CORRELAÇÕES DE PALAVRAS
def maiores_correlacoes():
    dados = request.json["dados"]

    # Aplicar a função emoji_to_word aos dados
    dados_processados = emoji_to_word(dados)

    # Aplicar a função processarTexto aos dados
    dados_processados = processarTexto(dados_processados)

    # Unir todos os textos em uma única lista de palavras
    palavras = [palavra for texto in dados_processados for palavra in texto if palavra != 'não']

    # Contar a frequência das palavras
    contagem_palavras = {}
    for palavra in palavras:
        if palavra in contagem_palavras:
            contagem_palavras[palavra] += 1
        else:
            contagem_palavras[palavra] = 1

    # Encontrar as palavras que mais aparecem na entrada
    palavras_mais_frequentes = sorted(contagem_palavras.items(), key=lambda x: x[1], reverse=True)[:20]

    # Criar um dicionário para armazenar as correlações das palavras mais frequentes
    maiores_correlacoes = {}

    # Encontrar as duas palavras que mais aparecem junto a cada palavra mais frequente
    for palavra, _ in palavras_mais_frequentes:
        palavras_relacionadas = [palavra]
        palavras_relacionadas.extend(
            sorted([p for p in palavras if p != palavra and p in contagem_palavras],
                   key=lambda p: contagem_palavras[p],
                   reverse=True)[:2]
        )
        maiores_correlacoes[palavra] = palavras_relacionadas

    # Retornar as maiores correlações em formato JSON
    return maiores_correlacoes

@app.route('/post-analysis', methods=['POST'])
def post_analysis():
    classificacao = classificar()
    proportions = proporcoes()
    print(proportions)
    top_words = top_palavras()
    biggest_cor = maiores_correlacoes()
    words_cloud = nuvem_palavras()
    profiles = top_profiles()
    return jsonify({
        'classificacao': classificacao,
        'proportions': proportions,
        'top_words': top_words,
        'biggest_cor': biggest_cor,
        'words_cloud': words_cloud,
        'top_profiles': profiles
    })


if __name__ == '__main__':
    app.run(debug=True)