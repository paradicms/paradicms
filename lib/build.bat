@ECHO OFF

cd %~dp0
REM Order is important

cd base
CALL npm run build

cd ..\models
CALL npm run build

cd ..\model-utils
CALL npm run build

cd ..\rdf
CALL npm run build

cd ..\bootstrap
CALL npm run build

cd ..\lunr
CALL npm run build

cd ..\material-ui
CALL npm run build

cd ..\next
CALL npm run build

cd ..\material-ui-next
CALL npm run build

cd %~dp0
