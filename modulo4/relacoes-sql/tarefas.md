-- 1 a)
-- É uma relação entre duas tabelas
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);


-- 1 b)
INSERT INTO Rating (id, comment, rate, movie_id) VALUES 
	("001", "Muito bom!", 7, "004");
    
SELECT * FROM Rating;

-- 1 c)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES 
	("002", "Muito bom!", 7, "008");
## Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-thiago-daurizio-feitoza-pereira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Não tem como eu criar uma referência com algo que não existe...

-- 1 d) 
## ALTER TABLE Movies DROP COLUMN rating;

SELECT * FROM Movies;

-- 1 e)
## DELETE FROM Movies WHERE id = "004";
## Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-thiago-daurizio-feitoza-pereira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Eu não posso deletar ou alterar algo que esta sendo relacionado...


CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actors(id)
);

SELECT * FROM MovieCast;
-- 2 a)
-- Se eu entendi bem a tour ela vai relacionar um ID de actor TAL com um ID de movie TAL, similar ao exemplo de quem comprou tal produto que o Mateus passou na aula.alter

-- 2 b) 
INSERT INTO MovieCast(movie_id, actor_id) VALUES
	("004", "001"), 
	("003", "001"), 
	("002", "001"), 
	("003", "001"), 
	("004", "004"), 
	("005", "001"); 
    
    SELECT * FROM Actors;
    
-- não sei pq fica retornando isso:
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-thiago-daurizio-feitoza-pereira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
-- 3 a)
-- AO que entendi é basicamente o WHERE do JOIN

-- 3 b)
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
-- não entendi pq funcionou só com letras... exemplo "r" ou "m" :yuzo-pensativo: