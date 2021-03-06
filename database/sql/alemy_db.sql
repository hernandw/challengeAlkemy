PGDMP             
             z           disney_alkemy_dev    14.0    14.0 (               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    31171    disney_alkemy_dev    DATABASE     u   CREATE DATABASE disney_alkemy_dev WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
 !   DROP DATABASE disney_alkemy_dev;
                postgres    false            ?            1259    36405 
   Characters    TABLE     ?   CREATE TABLE public."Characters" (
    id integer NOT NULL,
    name character varying(255),
    age integer,
    weight double precision,
    history character varying(255),
    image character varying(255)
);
     DROP TABLE public."Characters";
       public         heap    postgres    false            ?            1259    36441    CharactersMovies    TABLE     ?   CREATE TABLE public."CharactersMovies" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "MovieId" integer NOT NULL,
    "CharacterId" integer NOT NULL
);
 &   DROP TABLE public."CharactersMovies";
       public         heap    postgres    false            ?            1259    36404    Characters_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Characters_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Characters_id_seq";
       public          postgres    false    212                       0    0    Characters_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Characters_id_seq" OWNED BY public."Characters".id;
          public          postgres    false    211            ?            1259    36414    Genres    TABLE     }   CREATE TABLE public."Genres" (
    id integer NOT NULL,
    name character varying(255),
    image character varying(255)
);
    DROP TABLE public."Genres";
       public         heap    postgres    false            ?            1259    36413    Genres_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Genres_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Genres_id_seq";
       public          postgres    false    214                        0    0    Genres_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Genres_id_seq" OWNED BY public."Genres".id;
          public          postgres    false    213            ?            1259    36423    Movies    TABLE     ?   CREATE TABLE public."Movies" (
    id integer NOT NULL,
    title character varying(255),
    date timestamp with time zone,
    rate integer,
    image character varying(255),
    cod_genre integer,
    "GenreId" integer
);
    DROP TABLE public."Movies";
       public         heap    postgres    false            ?            1259    36422    Movies_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Movies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Movies_id_seq";
       public          postgres    false    216            !           0    0    Movies_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Movies_id_seq" OWNED BY public."Movies".id;
          public          postgres    false    215            ?            1259    36391    Users    TABLE       CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    role integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            ?            1259    36390    Users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    210            "           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    209            q           2604    36408    Characters id    DEFAULT     r   ALTER TABLE ONLY public."Characters" ALTER COLUMN id SET DEFAULT nextval('public."Characters_id_seq"'::regclass);
 >   ALTER TABLE public."Characters" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            r           2604    36417 	   Genres id    DEFAULT     j   ALTER TABLE ONLY public."Genres" ALTER COLUMN id SET DEFAULT nextval('public."Genres_id_seq"'::regclass);
 :   ALTER TABLE public."Genres" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            s           2604    36426 	   Movies id    DEFAULT     j   ALTER TABLE ONLY public."Movies" ALTER COLUMN id SET DEFAULT nextval('public."Movies_id_seq"'::regclass);
 :   ALTER TABLE public."Movies" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            o           2604    36394    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210                      0    36405 
   Characters 
   TABLE DATA           M   COPY public."Characters" (id, name, age, weight, history, image) FROM stdin;
    public          postgres    false    212   ?-                 0    36441    CharactersMovies 
   TABLE DATA           `   COPY public."CharactersMovies" ("createdAt", "updatedAt", "MovieId", "CharacterId") FROM stdin;
    public          postgres    false    217   ?-                 0    36414    Genres 
   TABLE DATA           3   COPY public."Genres" (id, name, image) FROM stdin;
    public          postgres    false    214   .                 0    36423    Movies 
   TABLE DATA           V   COPY public."Movies" (id, title, date, rate, image, cod_genre, "GenreId") FROM stdin;
    public          postgres    false    216   ?.                 0    36391    Users 
   TABLE DATA           L   COPY public."Users" (id, username, password, name, email, role) FROM stdin;
    public          postgres    false    210   9/       #           0    0    Characters_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Characters_id_seq"', 1, false);
          public          postgres    false    211            $           0    0    Genres_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Genres_id_seq"', 12, true);
          public          postgres    false    213            %           0    0    Movies_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Movies_id_seq"', 3, true);
          public          postgres    false    215            &           0    0    Users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Users_id_seq"', 6, true);
          public          postgres    false    209            ?           2606    36445 &   CharactersMovies CharactersMovies_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public."CharactersMovies"
    ADD CONSTRAINT "CharactersMovies_pkey" PRIMARY KEY ("MovieId", "CharacterId");
 T   ALTER TABLE ONLY public."CharactersMovies" DROP CONSTRAINT "CharactersMovies_pkey";
       public            postgres    false    217    217            {           2606    36412    Characters Characters_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Characters"
    ADD CONSTRAINT "Characters_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Characters" DROP CONSTRAINT "Characters_pkey";
       public            postgres    false    212            }           2606    36421    Genres Genres_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Genres"
    ADD CONSTRAINT "Genres_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Genres" DROP CONSTRAINT "Genres_pkey";
       public            postgres    false    214                       2606    36430    Movies Movies_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Movies"
    ADD CONSTRAINT "Movies_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Movies" DROP CONSTRAINT "Movies_pkey";
       public            postgres    false    216            u           2606    36403    Users Users_email_key 
   CONSTRAINT     U   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);
 C   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_email_key";
       public            postgres    false    210            w           2606    36399    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    210            y           2606    36401    Users Users_username_key 
   CONSTRAINT     [   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);
 F   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_username_key";
       public            postgres    false    210            ?           2606    36451 2   CharactersMovies CharactersMovies_CharacterId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."CharactersMovies"
    ADD CONSTRAINT "CharactersMovies_CharacterId_fkey" FOREIGN KEY ("CharacterId") REFERENCES public."Characters"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 `   ALTER TABLE ONLY public."CharactersMovies" DROP CONSTRAINT "CharactersMovies_CharacterId_fkey";
       public          postgres    false    217    3195    212            ?           2606    36446 .   CharactersMovies CharactersMovies_MovieId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."CharactersMovies"
    ADD CONSTRAINT "CharactersMovies_MovieId_fkey" FOREIGN KEY ("MovieId") REFERENCES public."Movies"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public."CharactersMovies" DROP CONSTRAINT "CharactersMovies_MovieId_fkey";
       public          postgres    false    217    3199    216            ?           2606    36436    Movies Movies_GenreId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Movies"
    ADD CONSTRAINT "Movies_GenreId_fkey" FOREIGN KEY ("GenreId") REFERENCES public."Genres"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public."Movies" DROP CONSTRAINT "Movies_GenreId_fkey";
       public          postgres    false    216    214    3197                  x?????? ? ?            x?????? ? ?         ?   x?e?[? E??U?????3??b
(&?^2?6??s9??H@?????.F?-֕????s?o?)?d{??{?U??y??=??f?)|?De????L??m??cW??????¹?j	??c??z??2S
?K\?!??c?         }   x?3???KW0?4202?54?54P02?20 "]cN?b???^VA:??!g???k^rb^I>\??1?S?T?????&c???̔?"]??<+?|???J???T???h??5?&?!???? ?,         _  x?U?I??0 @?u<?k?Rٵ????" R?	 LQ2??{??^???<HQ]?*??\?s??G?f??u?U?^&UB6?\?A???N?F??޸F?`??FG??pQ`X?w?+)!.?????	 ?u??ǄHy?j?3?"?I<ː?e*?t??????3V`2?ڋ????&?\?x]?3?j2?> ??n-'ಿ?vn?Ky殿~a?3ͅ/?U?G?Q$68?Ӓ?>???N???N?A???OH?r?V?8?Y????????????vHR?Oղ?8,????????? ?
??}@???&??Xl?W??sq}A?8?vf?M??(6???x??4??????(?	??RTa??}(??l6??9?a     