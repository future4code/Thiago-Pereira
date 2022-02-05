USE `carver-thiago-daurizio-feitoza-pereira`;

CREATE TABLE Actors (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	salary FLOAT NOT NULL,
	birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

#) 1 - a)
# NOT NULL = este valor não pode ser nulo, "vai ter que escrever algo aqui siiim!".
# DATE = este valor será uma data.
# VARCHAR(X) = este valor é uma string de até X caracteres.
# PRIMARY KEY = este valor é uma chave primária (avá Thiago), em outras palavras é um NOT NULL e um UNIQUE inclusivo em um só.
# (*pokerface da Luana Piovani) "UNIQUE... ooooooi?" = este valor não pode ter outro igual a ele do mesmo tipo... exemplo emails.

# SHOW TABLES 
# SHOW DATABASES

# 1 - b)
# Bom primeira surpresa foi que não posso usar um SHOW se outro ja estiver ativo... mesmo usando o "raiozinho do bem" e depois disso:
# - TABLES: me mostrou as tabelas que tinha, no caso só tenho Actors
# - DATABASES: me mandou meu nome "carver-thiago-daurizio...', e um information_schema que não sei ao certo o que seja...

DESCRIBE Actors;
# 1 - c) 
# Me retornou basicamente minha "tabela" com as normas delas... onde é VARCHAR, FLOAT, onde pode ou não ser NULL, quem é PRIMARY KEY (aqui chamado de PRI) etc etc...

# INSERT INTO Actors (id, name, salary, birth_date, gender)
# VALUES;
#	("001", "Tony Ramos", 400000, "1948-08-25", "male"),
#    ("002", "Glória Pires", 1200000, "1963-08-23", "female"),

# 2 - a)
#    ("002", "Glória Pires", 1200000, "1963-08-23", "female");

#Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
# 2 - b) Ele esta reclamando que ja tem uma "Primary Key" usando o "002" como id.


INSERT INTO Actors (id, name, salary)
VALUES
	("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
#Error Code: 1136. Column count doesn't match value count at row 1
# 2 - c) Os valores passado no () do INTO não bate com os que passei no () do VALUES, um tem 3 outro 4.


INSERT INTO Actors (id, salary, birth_date, gender)
VALUES
	("004", 400000, "1949-04-18", "male");    
#Error Code: 1364. Field 'name' doesn't have a default value
# 2 - d) Não estou passando o valor name que eu defini que a tabela queria, ele esta nulo e eu declarei como NOT NULL.

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES
	("005", "Juliana Paes", 719333.33, 1979-03-26, "female");
#Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
# 2 - e) Olha brito... sinceramente... eu não sei, "teoricamente" esta tudo certo desta vez, oxxi... :yuzo-pensativo:

INSERT INTO Actors (id, name, salary, birth_date, gender)
	VALUES
#	("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
	("004", "Antônio Fagundes",400000,"1949-04-18", "male"),
    ("005", "Juliana Paes",719333.33,"1979-03-26", "female")
    ;
# Nossa eu realmente to tentando entender pq ele não quis aceitar a primeira Juliana linha ~57. :ahhhhhh:
    

SELECT * FROM Actors;

SELECT id, salary from Actors;

SELECT id, name from Actors WHERE gender = "male";


# 3 - a) 
SELECT id, name, salary, birth_date, gender from Actors WHERE gender = "female";

# 3 - b)
SELECT salary from Actors WHERE name = "Tony Ramos";

# 3 - c)
SELECT id, name, salary, birth_date, gender from Actors WHERE gender = invalid;
# Error Code: 1054. Unknown column 'invalid' in 'where clause'
# SE eu entendi bem, não tem "invalid" no genders, estão sendo declados atores e atrizes apenas com male ou female.

# 3 - d)
SELECT id, name, salary, birth_date, gender from Actors WHERE salary < 500000;

# 3 - e)
SELECT id, name from Actors WHERE id = "002";
#Error Code: 1054. Unknown column 'nome' in 'field list'
#ali colocaram nome no Notion, e declaramos lá em cima como "name"

SELECT * FROM Actors
	WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#4 - a) Ele primeiro comapara se o nome tem a string A ou J, logo após tal "filtro" ele faz a comparação se os nomes com A ou J que passaram tem um salário maios que 300000 (er... 300mil... e eu aqui... quero só 10reais, para aproveitar a promoção do Ragazzo... #dor)

#4 - b)
SELECT * FROM Actors
	WHERE name NOT LIKE "A%" AND salary > 350000;
    
#4 - c)
SELECT * FROM Actors
	WHERE name LIKE "%g%" OR name LIKE "%G%";
    
#4 - d)
SELECT * FROM Actors
	WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name Like "%a%" OR name Like "%A%") AND salary BETWEEN 350000 AND 900000;
    
#==================================================

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	synopsis TEXT NOT NULL,
	release_date DATE NOT NULL,
	rating INT NOT NULL
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
	VALUES
		("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7), 
		("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012/12/27", 10), 
		("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8), 
		("004", "Minha Mãe É uma Peça", "Hermínia Amaral (Paulo Gustavo) é uma dona de casa de meia idade, divorciada do marido (Herson Capri) que a trocou por uma mulher mais jovem, Soraya (Ingrid Guimarães). Hiperativa, não larga o pé de seus filhos Marcelina (Mariana Xavier) e Juliano (Rodrigo Pandolfo), sem dar-se conta de que já estão bem grandinhos. Um dia, após descobrir que consideram-na uma chata, resolve sair de casa sem avisar para ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabiam que ela havia ido visitar a querida tia Zélia (Suely Franco), para desabafar sobre as suas tristezas do presente e recordar os bons tempos do passado.", " 2013/07/21", 10);

# 6 - a)        
SELECT id, title, rating FROM Movies WHERE id = 004;

# 6 - b)  
SELECT * FROM Movies WHERE title LIKE "Doce de mãe";

# 6 - c)  
SELECT * FROM Movies WHERE rating > 6;
        
#7 - a)
SELECT * FROM Movies WHERE title LIKE "%Vida%" OR title LIKE "%vida%";

#7 - b)
SELECT * FROM Movies WHERE title LIKE "%mãe%" OR synopsis LIKE "%culinária%";

#7 - c)
SELECT * FROM Movies WHERE release_date < "2022/01/31";

#7 - d)
SELECT * FROM Movies WHERE release_date < "2022/01/31" AND (title LIKE "%flor%" OR rating < 7);