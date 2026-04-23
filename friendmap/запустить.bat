@echo off
echo Запуск сервера...
start http://localhost:8080/index125.html
python -m http.server 8080
pause
