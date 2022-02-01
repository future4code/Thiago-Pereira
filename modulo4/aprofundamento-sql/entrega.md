SELECT * FROM Actors;
SELECT id, name, salary, birth_date, gender FROM Actors;

DESCRIBE Actors;

-- 1 a) Ira remover a coluna de salary

-- 1 b) Ira alterar o regra de gender para um outra string de do máximo 6 digitos, além de mudar o nome da coluna de "gender' para "sex"

-- 1 c) irá alterar a regra de gender para poder ser uma string de 255 digitos.

-- 1 d) 
ALTER TABLE Actors CHANGE gender gender VARCHAR(100);


-- 2 a)
UPDATE Actors SET birth_date = "1929-10-09" WHERE id = "003";

-- 2 b)
UPDATE Actors SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actors SET name = "Juliana Paes" WHERE id = "005";
-- 2 b) se não puder ser usando id
UPDATE Actors SET name = "JULIANA PAES" WHERE name LIKE "%juliana paes";
UPDATE Actors SET name = "Juliana Paes" WHERE name LIKE "%juliana paes";

-- 2 c)
UPDATE Actors SET name = "Adriana Esteves", salary = "500000", birth_date = "1950/05/05", gender = "female" WHERE id = "005";

-- 2 d)
UPDATE Actors SET name = "JULIANA PAES" WHERE id = "006";
-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- basicamente se não tem id 006 para editar, não achara nada na condicional/pesquisa para editar, então não editará nada.

-- 3 a)
## DELETE FROM Actors WHERE name = "Fernanda Montenegro";

-- 3 b)
## DELETE FROM Actors WHERE gender = "male" AND salary > 1000000;
-- Nota: eu não tenho ator com salário maior de 1kk para apagar. Mas o código deu positivo só não alterou nada pq não tenho a condicional para tal.


-- 4 a)
SELECT MAX(salary) FROM Actors;

-- 4 b)
SELECT MIN(salary) FROM Actors WHERE gender = "female";

-- 4 c)
SELECT COUNT(*) FROM Actors WHERE gender = "female";

-- 4 d)
SELECT SUM(salary) FROM Actors;


-- 5 a)
## "SELECT COUNT(*), gender FROM Actor GROUP BY gender"
-- Se for esta acima, eu não entendi direito esta tour de "Group By" não.

-- 5 b)
SELECT id, name FROM Actors WHERE gender = "male" ORDER BY name DESC;
SELECT id, name FROM Actors ORDER BY name DESC;
-- Nota: não entendo ao certo de é só os atores "male" ou o termo foi se referindo a atores e atriz no total em ordem alfabética... então fiz os dois exemplos.

-- 5 c)
SELECT * FROM Actors ORDER BY salary ASC;

-- 5 d) 
SELECT * FROM Actors ORDER BY salary DESC LIMIT 3;

-- 5 e)
SELECT AVG(salary), gender FROM Actors GROUP BY gender;
-- Nota: confesso que esta aqui eu colei, sabia que eu deveria usar Group By pela lógica mas como mencionei acima não entendi direito com usar esta tour direito não.



## ===================================================================
SELECT * FROM Movies;
SELECT id, title, synopsis, release_date, rating, playing_limit_date FROM Movies;
DESCRIBE Movies;

-- 6 a)
ALTER TABLE Movies ADD playing_limit_date DATE;

-- 6 b)
ALTER TABLE Movies CHANGE rating rating FLOAT;

-- 6 c)
UPDATE Movies SET playing_limit_date = "2022-01-30" WHERE id = "001";

-- 6 d)
DELETE FROM Movies WHERE id = "002";

INSERT INTO Movies (id, title, synopsis, release_date, rating, playing_limit_date)
VALUES
	("002", "Filme", "Filte Texto", "1949-04-18", "6.5", "2000-02-20");   
-- Nota: Eu consegui criar, depois de excluir o de id 002 normal...