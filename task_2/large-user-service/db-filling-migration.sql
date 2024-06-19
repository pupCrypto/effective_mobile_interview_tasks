CREATE TYPE public.enum_users_gender AS ENUM (
    'male',
    'female'
);
CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL NOT NULL PRIMARY KEY,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    age smallint NOT NULL,
    gender public.enum_users_gender NOT NULL,
    has_problems boolean DEFAULT false NOT NULL
);


CREATE INDEX IF NOT EXISTS public.idx_has_problems_true
ON public.users(has_problems) WHERE has_problems = true;

do $$
declare
	firstnames text[];
	lastnames text[];
	genders text[];
begin
	firstnames := array ['Егор', 'Дарья', 'Алена', 'Данил', 'Лариса', 'Кирилл', 'Гриша', 'Денис', 'Полина', 'Василиса', 'Анар', 'Анна', 'Яна', 'Слава', 'Игорь'::text];
	lastnames := array ['Смирнов', 'Иванов', 'Кузнецов', 'Соколов', 'Козлов', 'Новиков', 'Голубев', 'Лебедев', 'Жуков', 'Бабайкин', 'Исаев', 'Абрамов', 'Попов', 'Чернов', 'Ларионов'::text];
	genders := array ['male', 'female'::text];
	for i in 1..1000_000 loop
	insert into public.users(first_name, last_name, age, gender, has_problems) values (
		(firstnames[floor(random() * 15 + 1)]),
		(lastnames[floor(random() * 15 + 1)]),
		(floor(random()* (90-12 + 1) + 12)),
		cast(genders[floor(random() * 2 + 1)] as public.enum_users_gender),
		random() > 0.5
	);
	end loop;
end;
$$;