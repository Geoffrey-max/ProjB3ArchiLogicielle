DROP   TABLE  IF EXISTS geneworld.obstacles;
DROP   TABLE  IF EXISTS geneworld.historique;
DROP   TABLE  IF EXISTS geneworld.users;
DROP   TABLE  IF EXISTS geneworld.vagues;

CREATE SCHEMA IF NOT EXISTS geneWorld;
																										
CREATE TABLE IF NOT EXISTS geneworld.obstacles
(
    id SERIAL PRIMARY KEY,
	MAPNAME VARCHAR(255),
    TRAVERSABLE BOOLEAN NOT NULL,
    EFFECT VARCHAR(255),
    NOM VARCHAR(255),
	TYPE VARCHAR(255) NOT NULL,
	POSITIONX INT NOT NULL,
	POSITIONY INT NOT NULL,
	WIDTH INT NOT NULL,
	HEIGHT INT NOT NULL
);

INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (1, 'dungeons', false, null, 'wall', 'invisible', 0, 0, 43, 270);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)	
	VALUES (2, 'dungeons', false, null, 'wall', 'invisible', 0, 0, 480, 43);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (3, 'dungeons', false, null, 'wall', 'invisible', 460, 0, 43, 270);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (4, 'dungeons', false, null, 'wall', 'invisible', 0, 250, 480, 43);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (5, 'dungeons', true, 'slow', 'grille', 'invisible', 200, 110, 100, 70);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (6, 'prairie', false, null, 'wall', 'invisible', 0, 0, 22, 270);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)	
	VALUES (7, 'prairie', false, null, 'wall', 'invisible', 0, 260, 480, 20);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (8, 'prairie', false, null, 'wall', 'invisible', 0, 0, 480, 50);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (9, 'prairie', false, null, 'wall', 'invisible', 460, 0, 22, 270);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (13, 'prairie', false, null, 'wall', 'invisible', 190, 0, 85, 76);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (10, 'prairie', false, null, 'tree', 'invisible', 61, 55, 50, 40);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (11, 'prairie', false, null, 'tree', 'invisible', 290, 184, 40, 40);	
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (12, 'prairie', true, 'slow', 'marre', 'invisible', 180, 105, 110, 80);		
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (14, 'ocean', true, null, 'water', 'invisible', 0, 208,480,80);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)	
	VALUES (15, 'ocean', false, null, 'wall', 'invisible', 0, 0, 28, 175);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (16, 'ocean', false, null, 'wall', 'invisible', 268, 0, 50, 120);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (17, 'ocean', false, null, 'wall', 'invisible', 300, 75, 85, 40);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (18, 'ocean', false, null, 'wall', 'invisible', 430, 0, 80, 76);
INSERT INTO geneworld.obstacles(id, mapname, traversable, effect, nom, type, positionx, positiony, width, height)
	VALUES (19, 'ocean', false, null, 'wall', 'invisible', 448, 124, 50, 50);
	
SELECT * FROM geneworld.obstacles;

																								
CREATE TABLE IF NOT EXISTS geneworld.vagues 
  ( 
     id      SERIAL PRIMARY KEY, 
     nbr     INT NOT NULL, 
     mini    INT NOT NULL, 
     maxi    INT NOT NULL, 
     life    INT NOT NULL, 
     vitesse FLOAT NOT NULL, 
     autre   VARCHAR(255) 
  ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (1, 
             30, 
             60, 
             1, 
             1 ); 
INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (5, 
             30, 
             60, 
             1, 
             1 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (2, 
             10, 
             15, 
             4, 
             1 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (2, 
             120, 
             130, 
             8, 
             1 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (4, 
             30, 
             60, 
             4, 
             1 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (1, 
             30, 
             60, 
             1, 
             2 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (5, 
             30, 
             60, 
             3, 
             1 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (6, 
             30, 
             60, 
             3, 
             1 ); 

INSERT INTO geneworld.vagues 
            (nbr, 
             mini, 
             maxi, 
             life, 
             vitesse) 
VALUES      (20, 
             30, 
             60, 
             3, 
             3 ); 

SELECT * 
FROM   geneworld.vagues; 
CREATE TABLE IF NOT EXISTS geneworld.historique (
	id SERIAL PRIMARY KEY,
	score FLOAT NOT NULL,
	datepassage DATE NOT NULL,
	id_joueurs VARCHAR(255)
);


INSERT INTO geneworld.historique (score, 
							 datepassage, 
							 id_joueurs
							 )
VALUES (1542,
		now(),
		1
	   );
SELECT * FROM geneworld.historique;
