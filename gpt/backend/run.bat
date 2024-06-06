@echo off
REM Get the current directory (where the batch file and main.py are located)
set CURRENT_DIR=%~dp0

REM Navigate to the current directory
cd /d "%CURRENT_DIR%"

REM Activate the virtual environment
call env\Scripts\activate

REM Check if the activation was successful
if "%errorlevel%" neq "0" (
    echo Failed to activate virtual environment.
    exit /b %errorlevel%
)

REM Leave the command prompt open for manual commands
echo Virtual environment activated. You can now enter Python commands.
cmd /k
