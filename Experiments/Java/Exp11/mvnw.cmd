@echo off
setlocal

set "PROJECT_DIR=%~dp0"
set "MAVEN_HOME=%PROJECT_DIR%.tools\apache-maven-3.9.15"

if not exist "%MAVEN_HOME%\bin\mvn.cmd" (
    echo Local Maven was not found at "%MAVEN_HOME%".
    echo Please check that the .tools\apache-maven-3.9.15 folder exists.
    exit /b 1
)

if not defined JAVA_HOME (
    for /d %%D in ("C:\Program Files\Eclipse Adoptium\jdk-17*") do set "JAVA_HOME=%%~fD"
)

if not defined JAVA_HOME (
    for /d %%D in ("C:\Program Files\Eclipse Adoptium\jdk-*") do set "JAVA_HOME=%%~fD"
)

if not exist "%JAVA_HOME%\bin\java.exe" (
    echo Java was not found.
    echo Install JDK 17 or set JAVA_HOME to your JDK installation folder.
    exit /b 1
)

set "PATH=%JAVA_HOME%\bin;%MAVEN_HOME%\bin;%PATH%"
pushd "%PROJECT_DIR%" >nul
call "%MAVEN_HOME%\bin\mvn.cmd" %*
set "MAVEN_EXIT_CODE=%ERRORLEVEL%"
popd >nul
exit /b %MAVEN_EXIT_CODE%
