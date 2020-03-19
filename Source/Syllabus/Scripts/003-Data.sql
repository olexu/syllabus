INSERT INTO FORMS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (1, 'Денна','Full-time','Очная');
INSERT INTO FORMS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (2, 'Заочна','Extramural studies','Заочная');

INSERT INTO LEVELS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (1, 'Бакалавр','Bachelor','Бакалавр');
INSERT INTO LEVELS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (2, 'Магістр науковий','Master of science','Магистр научный');
INSERT INTO LEVELS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (3, 'Магістр професійний','Master of profession','Магистр профессиональный');
INSERT INTO LEVELS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (4, 'Доктор філософії','PhD','Доктор философии');

INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (1, 'Семестр 1','Semester 1','Семестр 1');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (2, 'Семестр 2','Semester 2','Семестр 2');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (3, 'Семестр 3','Semester 3','Семестр 3');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (4, 'Семестр 4','Semester 4','Семестр 4');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (5, 'Семестр 5','Semester 5','Семестр 5');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (6, 'Семестр 6','Semester 6','Семестр 6');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (7, 'Семестр 7','Semester 7','Семестр 7');
INSERT INTO SEMESTERS (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (8, 'Семестр 8','Semester 8','Семестр 8');

INSERT INTO SPECIALITIES (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (1, '126','126','126');
INSERT INTO SPECIALITIES (ID, NAME_UK, NAME_EN, NAME_RU) VALUES (2, '121','121','121');

INSERT INTO CATHEDRAS (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (1, 'Автоматика та управління в технічних системах','Automation and control in technical systems','Автоматика и управление в технических системах', 'АУТС', 'ACTS', 'АУТС');
INSERT INTO CATHEDRAS (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (2, 'Обчислювальна техніка','Computer Engineering','Вычислительная техника', 'ОТ', 'CE', 'ВТ');
INSERT INTO CATHEDRAS (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (3, 'Технічна кібернетика','Technical cybernetics','Кафедра робототехники', 'ТК', 'TC', 'ТК');

INSERT INTO CYCLES (ID, ID_PARENT, IS_CATHEDRA, NAME_UK, NAME_EN, NAME_RU) VALUES (1, NULL, 1, 'Гуманітарні дисципліни', 'Humanities', 'Гуманитарные дисциплины');
INSERT INTO CYCLES (ID, ID_PARENT, IS_CATHEDRA, NAME_UK, NAME_EN, NAME_RU) VALUES (2, NULL, 1, 'ІТ-інфраструктура та її компоненти', 'IT infrastructure and its components', 'ИТ-инфраструктура и ее компоненты');
INSERT INTO CYCLES (ID, ID_PARENT, IS_CATHEDRA, NAME_UK, NAME_EN, NAME_RU) VALUES (3, NULL, 1, 'Програмування', 'Programming', 'Программирование');
INSERT INTO CYCLES (ID, ID_PARENT, IS_CATHEDRA, NAME_UK, NAME_EN, NAME_RU) VALUES (4, NULL, 1, 'Проектування інформаційних систем та технологій', 'Design of information systems and technologies', 'Проектирование информационных систем и технологий');
INSERT INTO CYCLES (ID, ID_PARENT, IS_CATHEDRA, NAME_UK, NAME_EN, NAME_RU) VALUES (5, NULL, 1, 'Теоретичні основи проектування, управління та керування', 'Theoretical basics of design, management and control', 'Теоретические основы проектирования, управления и контроля');

INSERT INTO YEARS (ID, NAME, IS_CURRENT) VALUES (1, '2018/2019', 0);
INSERT INTO YEARS (ID, NAME, IS_CURRENT) VALUES (2, '2019/2020', 1);
INSERT INTO YEARS (ID, NAME, IS_CURRENT) VALUES (3, '2020/2021', 0);

INSERT INTO TEACHERS (ID, NAME_UK, NAME_EN, NAME_RU, FIRST_NAME_UK, FIRST_NAME_EN, FIRST_NAME_RU, MIDDLE_NAME_UK, MIDDLE_NAME_EN, MIDDLE_NAME_RU, LAST_NAME_UK, LAST_NAME_EN, LAST_NAME_RU) 
VALUES (1, 'Іванов І.І.', 'Ivanov I.I.', 'Иванов И.И.', 'Іван', 'Ivan', 'Иван', 'Іванович', 'Ivanovych', 'Иванович', 'Іванов', 'Ivanov', 'Иванов');
INSERT INTO TEACHERS (ID, NAME_UK, NAME_EN, NAME_RU, FIRST_NAME_UK, FIRST_NAME_EN, FIRST_NAME_RU, MIDDLE_NAME_UK, MIDDLE_NAME_EN, MIDDLE_NAME_RU, LAST_NAME_UK, LAST_NAME_EN, LAST_NAME_RU) 
VALUES (2, 'Пєтров П.П.', 'Petrov P.P.', 'Петров П.П.', 'Петро', 'Petro', 'Петр', 'Петрович', 'Petrovych', 'Петрович', 'Пєтров', 'Petrov', 'Петров');
INSERT INTO TEACHERS (ID, NAME_UK, NAME_EN, NAME_RU, FIRST_NAME_UK, FIRST_NAME_EN, FIRST_NAME_RU, MIDDLE_NAME_UK, MIDDLE_NAME_EN, MIDDLE_NAME_RU, LAST_NAME_UK, LAST_NAME_EN, LAST_NAME_RU) 
VALUES (3, 'Миколаїв М.М.', 'Mykolaiv M.M.', 'Николаев Н.Н.', 'Микола', 'Mykola', 'Николай', 'Миколайович', 'Mykolayovych', 'Николаевич', 'Миколаїв', 'Mykolaiv', 'Николаев');

INSERT INTO DISCIPLINES (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (1, 'Проектування пристроїв та систем автоматики і управління', '', '', 'ППСУ', '', '');
INSERT INTO DISCIPLINES (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (2, 'Компютеризовані системи управління', '', '', 'КСУ', '', '');
INSERT INTO DISCIPLINES (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (3, 'Цифрове оброблення сигналів та зображень', '', '', 'ЦОСЗ', '', '');
INSERT INTO DISCIPLINES (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (4, 'Іноземна мова', '', '', 'ІМ', '', '');
INSERT INTO DISCIPLINES (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (5, 'Технології розроблення програмного забезпечення', '', '', 'ТЗПЗ', '', '');
INSERT INTO DISCIPLINES (ID, NAME_UK, NAME_EN, NAME_RU, SHORT_NAME_UK, SHORT_NAME_EN, SHORT_NAME_RU) VALUES (6, 'Теорія ймовірностей та математична статистика', '', '', 'ТЙтаМС', '', '');

INSERT INTO CURRICULUMS (ID, ID_CYCLE_GENERAL, ID_CYCLE_CUSTOM, ID_DISCIPLINE, ID_SPECIALITY, ID_LEVEL, ID_FORM, ID_SEMESTER, ID_TEACHER_LECTURE, ID_TEACHER_PRACTICE, ID_TEACHER_LABORATORY, ID_YEAR, ID_CATHEDRA)
VALUES (1, 1, NULL, 1, 1, 1, 1, 1, 1, 2, 3, 2, 1);
INSERT INTO CURRICULUMS (ID, ID_CYCLE_GENERAL, ID_CYCLE_CUSTOM, ID_DISCIPLINE, ID_SPECIALITY, ID_LEVEL, ID_FORM, ID_SEMESTER, ID_TEACHER_LECTURE, ID_TEACHER_PRACTICE, ID_TEACHER_LABORATORY, ID_YEAR, ID_CATHEDRA)
VALUES (2, 1, NULL, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1);
INSERT INTO CURRICULUMS (ID, ID_CYCLE_GENERAL, ID_CYCLE_CUSTOM, ID_DISCIPLINE, ID_SPECIALITY, ID_LEVEL, ID_FORM, ID_SEMESTER, ID_TEACHER_LECTURE, ID_TEACHER_PRACTICE, ID_TEACHER_LABORATORY, ID_YEAR, ID_CATHEDRA)
VALUES (3, 1, NULL, 3, 1, 1, 1, 1, 2, 2, 2, 2, 1);
INSERT INTO CURRICULUMS (ID, ID_CYCLE_GENERAL, ID_CYCLE_CUSTOM, ID_DISCIPLINE, ID_SPECIALITY, ID_LEVEL, ID_FORM, ID_SEMESTER, ID_TEACHER_LECTURE, ID_TEACHER_PRACTICE, ID_TEACHER_LABORATORY, ID_YEAR, ID_CATHEDRA)
VALUES (4, 1, NULL, 4, 1, 1, 1, 1, 3, 3, 3, 2, 1);

INSERT INTO CURRICULUM_LINKS (ID_CURRICULUM_1, ID_CURRICULUM_2) VALUES (1, 2);
INSERT INTO CURRICULUM_LINKS (ID_CURRICULUM_1, ID_CURRICULUM_2) VALUES (2, 3);
INSERT INTO CURRICULUM_LINKS (ID_CURRICULUM_1, ID_CURRICULUM_2) VALUES (3, 4);