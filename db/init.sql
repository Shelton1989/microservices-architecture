CREATE TABLE public.requests(
    id serial PRIMARY KEY, 
    first_name VARCHAR (50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL, 
    message VARCHAR (200), 
    email VARCHAR (50) NOT NULL, 
    location VARCHAR (100) NOT NULL,
    created_at TIMESTAMP NOT NULL
);