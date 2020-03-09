﻿CREATE TABLE public."CYCLES"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "ID_PARENT" integer,
	"IS_CATHEDRA" boolean NOT NULL default false,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,    
    "NAME_RU" character varying(255) NOT NULL
);
CREATE TABLE public."SEMESTERS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,    
    "NAME_RU" character varying(255) NOT NULL
);
CREATE TABLE public."DISCIPLINES"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,
    "NAME_RU" character varying(255) NOT NULL,
    "SHORT_NAME_EN" character varying(255),
    "SHORT_NAME_UK" character varying(255),
    "SHORT_NAME_RU" character varying(255),
	"IS_OLD" boolean default false,
	"CHANGED" date default now()
);
CREATE TABLE public."SYLLABI"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "ID_DISCIPLINE" integer,
    "SYLLABUS_EN" text,
    "SYLLABUS_UK" text,
    "SYLLABUS_RU" text,
	"IS_OLD" boolean default false,
	"CHANGED" date default now()
);
CREATE TABLE public."FORMS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,
    "NAME_RU" character varying(255) NOT NULL
);
CREATE TABLE public."LEVELS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,
    "NAME_RU" character varying(255) NOT NULL
);
CREATE TABLE public."CATHEDRAS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,
    "NAME_RU" character varying(255) NOT NULL,
    "SHORT_NAME_EN" character varying(255),
	"SHORT_NAME_UK" character varying(255),
    "SHORT_NAME_RU" character varying(255)
);
CREATE TABLE public."SPECIALITIES"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,
    "NAME_RU" character varying(255) NOT NULL
);
CREATE TABLE public."TEACHERS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME_EN" character varying(255) NOT NULL,
    "NAME_UK" character varying(255) NOT NULL,
    "NAME_RU" character varying(255) NOT NULL,
    "FIRST_NAME_EN" character varying(100) NOT NULL,
	"FIRST_NAME_UK" character varying(100) NOT NULL,
    "FIRST_NAME_RU" character varying(100) NOT NULL,
    "MIDDLE_NAME_EN" character varying(100),
	"MIDDLE_NAME_UK" character varying(100),
    "MIDDLE_NAME_RU" character varying(100),
    "LAST_NAME_EN" character varying(100) NOT NULL,
	"LAST_NAME_UK" character varying(100) NOT NULL,
    "LAST_NAME_RU" character varying(100) NOT NULL
);
CREATE TABLE public."YEARS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
    "NAME" character varying(20) NOT NULL,
	"IS_CURRENT" boolean default false
);
CREATE TABLE public."CURRICULUMS"
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
	"ID_TEACHER_LABORATORY" integer,
	"ID_YEAR" integer NOT NULL,
	"ID_CATHEDRA" integer NOT NULL,
	"IS_OLD" boolean default false,
	"CHANGED" date default now()
);
CREATE TABLE public."CURRICULUM_LINKS"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "ID_CURRICULUM_1" integer,
	"ID_CURRICULUM_2" integer
);

--PRIMARY KEYS
ALTER TABLE public."CATHEDRAS"
    ADD CONSTRAINT "PK_CATHEDRAS" PRIMARY KEY ("ID");

ALTER TABLE public."CYCLES"
    ADD CONSTRAINT "PK_CYCLES" PRIMARY KEY ("ID");

ALTER TABLE public."DISCIPLINES"
    ADD CONSTRAINT "PK_DISCIPLINES" PRIMARY KEY ("ID");

ALTER TABLE public."FORMS"
    ADD CONSTRAINT "PK_FORMS" PRIMARY KEY ("ID");

ALTER TABLE public."LEVELS"
    ADD CONSTRAINT "PK_LEVELS" PRIMARY KEY ("ID");

ALTER TABLE public."SEMESTERS"
    ADD CONSTRAINT "PK_SEMESTERS" PRIMARY KEY ("ID");

ALTER TABLE public."SPECIALITIES"
    ADD CONSTRAINT "PK_SPECIALITIES" PRIMARY KEY ("ID");

ALTER TABLE public."SYLLABI"
    ADD CONSTRAINT "PK_SYLLABI" PRIMARY KEY ("ID");

ALTER TABLE public."TEACHERS"
    ADD CONSTRAINT "PK_TEACHERS" PRIMARY KEY ("ID");

ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "PK_CURRICULUMS" PRIMARY KEY ("ID");

ALTER TABLE public."CURRICULUM_LINKS"
    ADD CONSTRAINT "PK_CURRICULUM_LINKS" PRIMARY KEY ("ID");

ALTER TABLE public."YEARS"
    ADD CONSTRAINT "PK_YEARS" PRIMARY KEY ("ID");

--FOREIGN KEYS
ALTER TABLE public."CYCLES"
    ADD CONSTRAINT "FK_CYC_IDPARENT_CYC" FOREIGN KEY ("ID_PARENT")
    REFERENCES public."CYCLES" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE public."SYLLABI"
    ADD CONSTRAINT "FK_SYLL_ID_DISCIPLINE_DISC" FOREIGN KEY ("ID_DISCIPLINE")
    REFERENCES public."DISCIPLINES" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_CYCLE_GEN_CYC" FOREIGN KEY ("ID_CYCLE_GENERAL")
    REFERENCES public."CYCLES" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_CYCLE_CUST_CYC" FOREIGN KEY ("ID_CYCLE_CUSTOM")
    REFERENCES public."CYCLES" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_DISCIPLINE_DISC" FOREIGN KEY ("ID_DISCIPLINE")
    REFERENCES public."DISCIPLINES" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_SPECIALITY_SPEC" FOREIGN KEY ("ID_SPECIALITY")
    REFERENCES public."SPECIALITIES" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_LEVEL_LEV" FOREIGN KEY ("ID_LEVEL")
    REFERENCES public."LEVELS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_FORM_FORMS" FOREIGN KEY ("ID_FORM")
    REFERENCES public."FORMS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_SEMESTER_SEM" FOREIGN KEY ("ID_SEMESTER")
    REFERENCES public."SEMESTERS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_TEACH_LECT_TEACH" FOREIGN KEY ("ID_TEACHER_LECTURE")
    REFERENCES public."TEACHERS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_TEACH_PRACT_TEACH" FOREIGN KEY ("ID_TEACHER_PRACTICE")
    REFERENCES public."TEACHERS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_TEACH_LAB_TEACH" FOREIGN KEY ("ID_TEACHER_LABORATORY")
    REFERENCES public."TEACHERS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_YEAR_YEARS" FOREIGN KEY ("ID_YEAR")
    REFERENCES public."YEARS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUMS"
    ADD CONSTRAINT "FK_WORK_ID_CATHEDRA_CATH" FOREIGN KEY ("ID_CATHEDRA")
    REFERENCES public."CATHEDRAS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUM_LINKS"
    ADD CONSTRAINT "FK_WORK_LINKS_ID_PARENT_WORK" FOREIGN KEY ("ID_CURRICULUM_1")
    REFERENCES public."CURRICULUMS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
ALTER TABLE public."CURRICULUM_LINKS"
    ADD CONSTRAINT "FK_WORK_LINKS_ID_CHILD_WORK" FOREIGN KEY ("ID_CURRICULUM_2")
    REFERENCES public."CURRICULUMS" ("ID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;