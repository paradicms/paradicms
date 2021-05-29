@ECHO OFF
cd %~dp0..
CALL venv\Scripts\activate
if %errorlevel% neq 0 exit /b %errorlevel%
pip install -qqq .[testing]
rm -fr venv/Lib/site-packages/paradicms_etl*
