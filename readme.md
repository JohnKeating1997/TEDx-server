# Database:

## utf8mb4 支持 emoji
CREATE SCHEMA `tedx_voice` DEFAULT CHARACTER SET utf8mb4 ;

CREATE TABLE `tedx_voice`.`voice` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `createtime` BIGINT(20) NOT NULL,
  `cover` VARCHAR(50) NOT NULL,
  `audio` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;