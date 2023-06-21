# Descrição técnica sobre as etapas de pré-processamento de texto para análise de sentimentos em comentários de clientes do BTG Pactual no Instagram.

## **Introdução:**

O pré-processamento de texto é uma etapa fundamental na análise de dados textuais, especialmente quando se trata de comentários de clientes em mídias sociais, visto que se tratam de dados não estruturados. Neste contexto, o BTG Pactual é um banco que tem uma forte presença no Instagram em seu perfil (@btgpactual),qw em que interage com seus clientes e seguidores por meio de postagens e comentários. Com isso, torna-se cada vez mais importante compreender o que eles pensam e sentem sobre a empresa e, poetanto, a análise de sentimentos é uma técnica útil para essa finalidade.

Para realizar a análise de sentimentos, é necessário primeiro pré-processar o corpus, ou seja, aplicar uma série de técnicas que permitam transformar os comentários em um formato que possa ser analisado de maneira mais eficiente. Entre as técnicas de pré-processamento mais comuns estão a limpeza, tokenização, remoção de stop words e a criação de um bag of words.

Com essas técnicas, é possível criar um modelo capaz de identificar o sentimento expresso pelos clientes em seus comentários, seja ele positivo, negativo ou neutro. Essa análise pode ser muito útil para o BTG Pactual, pois permite identificar tendênciasn de mercado a serem aplicadas pela área de Produto, entender as campanhas que tiveram melhor adoção pelo público na área de Marketing e problemas que possam estar afetando a satisfação dos clientes, permitindo assim que a empresa tome medidas para melhorar sua imagem e seu relacionamento com seu público.

## **Métodos Utilizados no Pré-processamento:**

### • Limpeza

O primeiro passo do pré-processamento de texto é a limpeza dos dados. Para isso, aplicamos uma série de técnicas para remover informações desnecessárias dos comentários coletados. Inicialmente, realizamos a remoção dos comentários feitos pela própria conta do BTG Pactual, visto que eles não representam a opinião de clientes, objetivo do projeto, e podem enviesar os resultados da análise.

Além disso, eliminamos os comentários nulos, ou seja, aqueles que não possuem texto. Também deixamos apenas as interações do tipo comentário e resposta, visto que haviam marcações em publicações de terceiros do perfil do BTG Pactual, para filtrarmos nossa base apenas com informações relevantes para a análise de sentimentos.

Por fim, realizamos a remoção das aspas duplas que estavam presentes nos nomes das colunas, transformando-as de "texto" para texto, por exemplo, para que o dataset esteja em um formato uniforme. Dessa forma, garantimos que o corpus esteja devidamente limpo e pronto para ser processado pelas próximas etapas do pré-processamento.

### • Tokenização e Remoção de Stop Words

Após fazer a limpeza do dataset, aplicamos os métodos de tokenização e remoção de stop words. A tokenização é o processo de dividir um texto em unidades significativas, chamadas tokens. Esses tokens são geralmente palavras ou pontuações que podem ajudar a compreender a estrutura e o significado do texto. O processo de tokenização envolve a divisão do texto em palavras individuais, removendo espaços em branco e pontuações desnecessárias.

Na implementação feita pelo grupo, utilizamos o método "word_tokenize" do módulo "nltk.tokenize" para tokenizar as palavras. Esse método divide as frases em palavras e organiza cada comentário em uma lista de palavras.

A remoção de stop words é outro método importante de pré-processamento de texto que envolve a eliminação de palavras comuns e sem significado semântico ao objetivo do projeto, análise de sentimentos, que ocorrem com frequência em um texto, como "a", "de", "para", "e", etc. Essas palavras geralmente não fornecem informações importantes para a análise do texto e podem ser removidas para melhorar a qualidade dos dados.

Na implementação desenvolvida, foi utilizado o conjunto de stop words disponibilizado pelo módulo "nltk.corpus" para remover palavras comuns da língua portuguesa. Além disso, foi adicionada uma regra para excluir palavras que começam com o caractere "@" e, assim, eliminar os nomes de usuários do Instagram que não influenciam nos sentimentos dos clientes do BTG Pactual. Com essa abordagem, foi possível refinar o pré-processamento e obter um corpus mais adequado para análise de sentimento.

### • Bag of Words

Depois de aplicarmos as funções de tokenização e remoção de stop words, chegamos à última etapa proposta para o pré-processamento, que é a técnica do Bag of Words (BoW). O método bag of words é uma técnica de pré-processamento de texto utilizada para representar um corpus como uma coleção de palavras ou termos, ignorando a ordem das palavras e a estrutura gramatical do texto. O objetivo é extrair um vocabulário do dataset disponibilizado, transformar o corpus em um vetor de palavras e suas respectivas frequências, para que possa ser facilmente manipulado por algoritmos de aprendizado de máquina.

Em nossa aplicação, implementamos uma função denominada "bag_of_words". Essa função utiliza a técnica de BoW para extrair a frequência de cada palavra presente na coluna "Frases_sem_stop_words" do conjunto de dados. Essa coluna contém os comentários dos clientes do BTG Pactual, que foram previamente processados com tokenização e remoção de stop words. A contagem é realizada utilizando a função "bow_dataframe". O resultado da aplicação do método BoW é uma tabela em que cada linha representa uma palavra ou termo do corpus, e as colunas contêm informações sobre a frequência da palavra em cada texto do corpus. Essa tabela pode ser usada como entrada para algoritmos de aprendizado de máquina que buscam identificar padrões ou tendências no uso de palavras em um conjunto de textos.

## **Resultados:**

A seguir, apresentaremos os resultados obtidos dos pré-processamentos e algumas análises de dados, ilustrando-os com gráficos.

### • Gráfico que representa a porcentagem de comentários feitos pelo BTG Pactual e todos os outros usuários do Instagram:

Para garantir a precisão da nossa análise sobre a percepção dos clientes do BTG Pactual no Instagram, foi realizada uma etapa inicial de limpeza dos dados. Nessa etapa, removemos os comentários feitos pelo próprio @btgpactual, que correspondiam a 1,3% do total de comentários do dataset. Se tais comentários fossem incluídos na análise, os resultados poderiam estar enviesados e não refletiriam adequadamente a opinião dos clientes reais do banco. Para visualizar essa informação, apresentamos abaixo um gráfico que representa a porcentagem de comentários feitos pelo BTG Pactual e pelos demais usuários do Instagram:

![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/d8ee2da6-c263-4f72-9965-afc250aa76ab)

### • Resultado da função "describe" da primeira base de dados:

A função .describe() é uma função do pandas que fornece estatísticas descritivas sobre o nosso dataset. Ela retorna um resumo estatístico que inclui informações como contagem, média, desvio padrão, valor mínimo, valor máximo e quartis (25%, 50% e 75%) para cada coluna numérica da base de dados. Abaixo a imagem dos resultados obtidos sobre a primeira base de dados:

<img width="716" alt="image" src="https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/8cc31815-341d-404c-8fbb-342e5c3fdfe3">

### • Gráfico do resultado de cada etapa do pré-processamento:

Ao recebermos a base de dados da equipe do BTG Pactual, verificamos que a coluna "texto", que contém os comentários postados na página oficial do banco no Instagram, possuía um total de 522.820 palavras. No entanto, após a realização das etapas de pré-processamento, esse número foi reduzido.
A limpeza inicial, que consistiu principalmente na remoção dos comentários do próprio BTG Pactual, reduziu o número para 96.218, demonstrando que a maioria dos comentários eram feitos pela própria instituição e que essa etapa nos ajudou a filtrar as interações que realmente importam para nossa análise.
A tokenização, por si só, não alterou o número de palavras, mas a remoção dos stop words foi responsável por uma segunda diminuição, reduzindo de 96.218 para 42.283 palavras.
Por fim, com a etapa de bag of words, onde cada palavra foi apresentada apenas uma vez e acompanhada de sua frequência, chegamos à última parte da redução, caindo de 42.283 para 7.597 palavras, que foram utilizadas em diferentes frequências.

Para ilustrar essas mudanças, apresentamos abaixo um gráfico que acompanha o processo de pré-processamento.

![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/a9693799-f5eb-48cf-a32f-3adc3e177ffa)

### • Gráfico que compara a quantidade de linhas e colunas entre a primeira e a última base de dados:

Abaixo temos o gráfico que mostra a comparação entre a quantidade de linhas e colunas na base inicial e na base final, após todas as etapas de pré-processamento.

![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/19c1ad36-ddba-42e0-8abc-3705b15b496d)

### • Gráfico da quantidade de comentários positivos, negativos e neutros:

Na base de dados recebida, uma das colunas apresenta os sentimentos dos comentários. Foi criado um gráfico para ilustrar a distribuição desses sentimentos entre positivo, negativo e neutro. No entanto, é importante destacar que todos os comentários que contêm emojis, independentemente dos emojis utilizados, são classificados como neutros. Isso significa que, embora o gráfico mostre com precisão a distribuição dos sentimentos na base de dados, ele não reflete necessariamente o sentimento real dos usuários, já que os emojis não foram tratados.

![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/97c30a43-0c48-46b5-8cbb-c5e1d489140f)

### • Pipeline do Pré-processamento:

A imagem abaixo apresenta um exemplo de como o pipeline de pré-processamento é realizado, etapa fundamental no processamento de dados para garantir que as informações estejam em um formato adequado para serem utilizadas em nossos modelos e análises. Esse pipeline é composto por diversas etapas, desde a coleta e armazenamento dos dados até a aplicação de técnicas de limpeza, transformação e vetorização. No exemplo apresentado, o pipeline envolve a transformação do texto para minúsculo, a remoção de stop words, a tokenização e a vetorização por meio do método bag of words. Cada etapa desempenha um papel importante na preparação dos dados para uso posterior, e o pipeline como um todo é uma parte crítica do nosso processo de análise de dados.

![image](https://github.com/2023M6T4-Inteli/Projeto4/assets/68927480/2ab8d35e-4d4c-4412-aa16-243e9d30ebaf)

### • As 20 palavras que mais se repetem nos comentários:

A seguir, apresentamos as 20 palavras mais frequentes, respectivamente, após o pré-processamento dos dados:

'banco', 'btg', 'pra', 'limite', 'conta', 'cartão', 'melhor', 'agora', 'sempre', 'fazer', 'vai', 'dinheiro', 'ter', 'vcs', 'obrigado', 'flu', 'tudo', 'nunca', 'sobre' e 'todos'.

### Identificando colunas relevantes para análise de sentimento em uma base de dados do BTG Pactual:

**De acordo com nossas hipóteses, existem colunas que podem não estar relacionadas à verificação do sentimento dos clientes do BTG Pactual por meio dos comentários. São elas:**

- ID: Esta informação é sobre a ordem dos comentários no dataset e não tem relação com os sentimentos dos clientes.
- Autor: Esta informação é sobre o autor da publicação e não está diretamente relacionada aos sentimentos dos clientes.
- Tipo de Interação: Informação que diz respeito sobre a interação do usuário no post (comentário ou resposta) e não está diretamente relacionada aos sentimentos dos clientes.
- Link do post: Este é o link da publicação que se refere ao comentário do cliente e não se relaciona com o sentimento dele.
- Processado: Informação não diretamente relacionada aos sentimentos dos clientes.
- Contém Hyperlink: Relacionada à 'anomalia' e 'probabilidade de anomalia', representa um link de golpe.
- Probabilidade de anomalia: Informação não diretamente relacionada aos sentimentos dos clientes, visto que representa a probabilidade de aplicação de um golpe, como phishing, no comentário.

**Por outro lado, há colunas que têm relação direta com o resultado da análise de sentimento dos clientes:**

- Texto: Esta coluna é fundamental para avaliarmos a satisfação dos clientes em relação aos produtos e serviços do BTG Pactual. Através da análise das palavras-chave extraídas dos textos nessa coluna, podemos identificar os sentimentos expressos pelos clientes em relação ao banco.
- Data da Publicação: A data pode ser útil para detectar tendências temporais e mudanças na percepção do cliente ao longo do tempo.
- Sentimento: Esta coluna é muito importante, pois é onde está registrado o sentimento do cliente em relação ao produto ou serviço, segundo o dataset do banco.

## **Conclusão:**

Em resumo, a análise de sentimentos em comentários de clientes do BTG Pactual no Instagram é realizada após o pré-processamento de texto, que envolve a limpeza dos dados, a tokenização e a remoção de stop words, bem como a técnica de bag of words. A limpeza do dataset remove informações desnecessárias e garante a uniformidade do corpus, enquanto a tokenização e remoção de stop words são aplicadas para melhorar a qualidade dos dados, eliminando palavras comuns e sem significado, bem como os nomes de usuários do Instagram. Por fim, a técnica de bag of words é utilizada para representar o corpus como uma coleção de palavras e suas respectivas frequências, permitindo que seja facilmente manipulado por algoritmos de aprendizado de máquina. Em suma, essa análise de sentimentos pode ser útil para identificar tendências e problemas que afetam a satisfação dos clientes do BTG Pactual, possibilitando medidas para melhorar sua imagem e relacionamento com seu público.
