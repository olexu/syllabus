CREATE TABLE public."CYCLES"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "ID_PARENT" integer,
    "NAME" character varying(255) NOT NULL,
	"IS_CATHEDRA" boolean NOT NULL default false
);
CREATE TABLE public."SEMESTERS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME" character varying(255) NOT NULL
);
CREATE TABLE public."DISCIPLINES"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME" character varying(255) NOT NULL,
    "SHORT_NAME" character varying(255),
	"IS_OLD" boolean default false,
	"CHANGED" date default now()
);
CREATE TABLE public."SYLLABI"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "ID_DISCIPLINE" integer,
    "SYLLABYS" text,
	"IS_OLD" boolean default false,
	"CHANGED" date default now()
);
CREATE TABLE public."FORMS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME" character varying(255) NOT NULL
);
CREATE TABLE public."LEVELS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME" character varying(255) NOT NULL
);
CREATE TABLE public."CATHEDRAS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME" character varying(255) NOT NULL,
	"SHORT_NAME" character varying(255)
);
CREATE TABLE public."SPECIALITIES"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME" character varying(255) NOT NULL
);
CREATE TABLE public."TEACHERS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME" character varying(255) NOT NULL,
	"LAST_NAME" character varying(100) NOT NULL,
	"FIRST_NAME" character varying(100) NOT NULL,
	"MIDDLE_NAME" character varying(100)
);
CREATE TABLE public."YEARS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME" character varying(20) NOT NULL,
	"IS_CURRENT" boolean default false
);
CREATE TABLE public."WORKING"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "ID_CYCLE_GENERAL" integer NOT NULL,
	"ID_CYCLE_CUSTOM" integer,
	"ID_DISCIPLINE" integer NOT NULL,
	"ID_SPECIALITY" integer NOT NULL,
	"ID_LEVEL" integer NOT NULL,
	"ID_FORM" integer NOT NULL,
	"ID_SEMESTER" integer NOT NULL,
	"ID_TEACHER_LECTURE" integer,
	"ID_TEACHER_PRACTICE" integer,
	"ID_TEACHER_LAB" integer,
	"ID_YEAR" integer NOT NULL,
	"ID_CATHEDRA" integer NOT NULL,
	"IS_OLD" boolean default false,
	"CHANGED" date default now()
);
CREATE TABLE public."WORKING_LINKS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "ID_PARENT" integer,
	"ID_CHILD" integer
);