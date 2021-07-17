@ECHO OFF

cd %~dp0

cd models
CALL npm publish --access public

cd ..\model-utils
CALL npm publish --access public

cd ..\rdf
CALL npm publish --access public

cd %~dp0
