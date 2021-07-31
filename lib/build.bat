@ECHO OFF

cd %~dp0
REM Order is important

cd models
CALL yarn build

cd ..\lunr
CALL yarn build

cd ..\rdf
CALL yarn build

cd ..\react
CALL yarn build

cd ..\bootstrap
CALL yarn build

cd ..\lunr-react
CALL yarn build

cd ..\material-ui
CALL yarn build

cd ..\next
CALL yarn build

cd ..\material-ui-next
CALL yarn build

cd %~dp0
