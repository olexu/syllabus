﻿DELIMITER $$
CREATE PROCEDURE SEMESTERS_GETALL()
BEGIN
	SELECT * FROM SEMESTERS;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE FORMS_GETALL()
BEGIN
	SELECT * FROM FORMS;
END$$
DELIMITER ;