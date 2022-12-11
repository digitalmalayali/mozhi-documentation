---
sidebar_position: 6
---

# Escape by Word

Transliteration is not attempted if it is preceded by `\`.

Keys after an English letter will be kept as it is. Along with English letters, it is continued for the following special characters: `.` `:` `/` `@`. When any of the rest of the special characters including space is entered, escaping is broken and transliteration will be continued. Examples:

|      |      |      | Example        | Mozhi Example    |
| :--- | :--- | :--- | :------------- | :--------------- |
| \`    | \\`   |      |                |                  |
| a    | \a   |      | ഒരു cat വന്നു     | oru \cat vannu   |
|      |      |      | ab@xyz.com എന്ന | \ab@xyz.com enna |
|      |      |      | http://9.com-ൽ | \http://9.com-l  |
