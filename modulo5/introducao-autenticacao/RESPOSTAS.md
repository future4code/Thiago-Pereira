## 1 a)
Eu acho string mais seguras que number pois não mais diversas e tem muitas formas de "customizar", como maiúscula ou minúscula, caracteres especiais, entre muitos outros. Ja números... são só... números.

## 1 b)
Criado em src/Utilities/idGeneractor.ts

## 2 a)
Esta criando uma connection e inserindo um usuário na tabela "userTableName"

## 2 b)
CREATE TABLE aula_UserLogin (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

## 2 c)
Eu tinha feito isso, mas depois notei que o signup é uma versão melhor do código que estava ali no Notion e substitui.


## 3 a)
Para ser a "chave" do seu token

## 3 b)
criado em src/Utilities/tokenGeneractor.ts

## 4 a, b, c)
Criado em src/API/userSignup.ts

