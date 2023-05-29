# Análise Comparativa de Pré-processamentos de Dados e Modelos para o BTG Pactual

## **Introdução:**

A presente análise tem como objetivo realizar uma descrição comparativa entre os diferentes pré-processamentos de dados e modelos aplicados ao projeto de Processamento de Linguagem Natural (PLN) desenvolvido para compreender os sentimentos expressos nos comentários dos clientes do BTG Pactual no Instagram. O projeto visa identificar se os comentários são positivos, negativos ou neutros. Neste texto, serão abordados os pré-processamentos de dados, como a remoção de stop words, tokenização, bag of words e word2vec, bem como os modelos utilizados, como o Naive Bayes e a Rede Neural, com diferentes abordagens.

## **Pré-processamento de Dados:**

Na sprint 2 do projeto, foram realizadas as etapas iniciais de pré-processamento de dados. Isso envolveu a limpeza dos dados, removendo as aspas dos nomes das colunas, interações realizadas pelo autor 'btgpactual', comentários nulos na coluna 'texto' e qualquer interação que não fosse do tipo 'comentário' ou 'resposta'. Além disso, foram aplicadas técnicas de tokenização e remoção de stop words, visando melhorar a qualidade dos dados. Durante a sprint 3, após receber feedback do parceiro e implementar novas etapas do projeto, aprimoramos o pré-processamento dos dados. Realizamos uma remoção adicional de stop words personalizadas, mencionadas pelo cliente. Essas stop words incluíam termos como 'btg', 'pactual', 'btg pactual', 'pq', 'q', 'pra', 'vcs', 'vc', 'i', 'p', 'kkk', 'y', 'of', 'n'. Além disso, tratamos os emojis presentes nos comentários, pois, anteriormente, todos os comentários que continham emojis eram classificados como "neutros". Para solucionar esse problema, categorizamos os emojis atribuindo-lhes nomes, por exemplo, se um emoji representava palmas, o nome "palmas" era atribuído a ele, transformando o emoji em uma palavra. Dessa forma, pudemos categorizar os comentários como positivos, negativos ou neutros com maior precisão e obter resultados mais satisfatórios. Essa melhoria foi especialmente importante considerando que o conjunto de comentários neutros representava 44% da base de dados analisada anteriormente.

## **Bag of Words:**

Uma das técnicas utilizadas foi o "bag of words". Essa abordagem consiste em representar um texto como um conjunto de palavras, desconsiderando sua ordem e contexto. Cada palavra única encontrada nos comentários é considerada como uma feature e a presença ou ausência de cada palavra é utilizada como um indicador do sentimento expresso. Essa representação é adequada para o Naive Bayes, que é um modelo estatístico baseado em probabilidade condicional.
Abaixo pode-se visualizar o gráfico que representa as 10 primeiras palavras contidas no Bag of Words da sprint 2 e, depois dos ajustes, comparando com o resultado obtido na sprint 3:
![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/1f61c8ae-0fba-4b52-9023-5024fe08980d)
![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/d9fdcd72-a1e7-41d8-9f6c-06c9a6ccff3e)

## **Word2Vec:**

Outra técnica empregada foi o word2vec, que é uma técnica de representação de palavras em forma de vetores. O word2vec mapeia as palavras em um espaço vetorial de dimensões reduzidas, em que palavras semanticamente similares são mapeadas para pontos próximos. Essa técnica captura relações semânticas e sintáticas entre as palavras. No projeto, foram utilizados dois tipos de word2vec: o modelo word2vec construído com o corpus do projeto e o word2vec pré-processado CBOW 50 dimensões do site do NILC (http://nilc.icmc.usp.br/nilc/index.php/repositorio-de-word-embeddings-do-nilc).

## **Diferença entre Bag of Words e Word2Vec:**

A principal diferença entre o bag of words e o word2vec está na forma como as palavras são representadas. No bag of words, cada palavra é tratada independentemente e sua ordem e contexto não são considerados. Já o word2vec captura as relações semânticas e sintáticas entre as palavras, mapeando-as em um espaço vetorial.

## **Modelos Utilizados:**

### • Naive Bayes:

O modelo Naive Bayes é um classificador probabilístico baseado no Teorema de Bayes. Ele assume que as features são independentes entre si. O Naive Bayes é um modelo simples e eficiente para classificação de textos, sendo amplamente utilizado em PLN. Ele calcula a probabilidade condicional de cada classe (positivo, negativo ou neutro) dado um conjunto de features (palavras). No projeto, foram utilizados o Naive Bayes com a representação bag of words e com o word2vec.

### • Rede Neural:

A rede neural é um modelo computacional inspirado no funcionamento do cérebro humano. É composta por camadas de neurônios interconectados, que aprendem a partir dos dados e ajustam os pesos das conexões. As redes neurais são capazes de capturar relações complexas nos dados e são amplamente utilizadas em diversas áreas, incluindo PLN. No projeto, também foi aplicada uma rede neural com a representação bag of words.

Para entender mais os modelos e técnicas utilizadas em cada abordagem, acesse a seção Sprint 3 no seguinte link: https://github.com/2023M6T4-Inteli/Projeto4/tree/main/docs

## **Resultados:**

Após a aplicação dos modelos, foram obtidos os seguintes resultados de acurácia:

Naive Bayes com bag of words e label encoding: 57%
Naive Bayes com bag of words e validação cruzada (5 vezes): 74%
Naive Bayes com bag of words e GridSearch com validação cruzada: 74%
Rede Neural com bag of words: 60%
Naive Bayes com word2vec do corpus e label encoding: 59%
Naive Bayes com word2vec pré-treinado do NILC e label encoding: 57%
Rede Neural com word2vec: 39%

O gráfico abaixo representa os dados:
![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/48595cf0-d213-48cc-bc0f-481c2e0fae0c)

## **Conclusão:**

A partir da análise comparativa dos diferentes pré-processamentos de dados e modelos aplicados ao projeto do BTG Pactual, podemos observar que a utilização da técnica de word2vec, tanto com o corpus do projeto quanto com vetores pré-treinados do NILC, não apresentou melhorias significativas em relação ao bag of words em termos de acurácia. O Naive Bayes obteve resultados relativamente consistentes, com acurácias entre 57% e 59%, enquanto a rede neural apresentou uma acurácia inferior, de 39%. No entanto, os melhores resultados foram gerados a partir do Bag of Words com o modelo Naive Bayes, que atingiu uma acurácia de 74% e, mesmo não atingindo uma alta acurácia, a matriz de confusão demonstrou ser assertiva quanto ao objetivo principal: identificar os sentimentos em cada comentário, pois a ocorrência de falsos negativos ou falsos positivos na classificação foi muito pequena.
