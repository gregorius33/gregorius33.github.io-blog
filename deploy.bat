@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM 커밋 메시지: 인수로 전달되거나 기본값 "update" 사용
set "commit_msg=update"
if not "%~1"=="" set "commit_msg=%~1"
if "!commit_msg!"=="" set "commit_msg=update"

echo [1/3] git add .
git add .

echo [2/3] git commit -m "!commit_msg!"
git commit -m "!commit_msg!"
if errorlevel 1 (
  echo 커밋할 변경사항이 없거나 오류가 발생했습니다.
  pause
  exit /b 1
)

echo [3/3] git push
git push
if errorlevel 1 (
  echo Push 실패. 원격 저장소 설정을 확인하세요.
  pause
  exit /b 1
)

echo.
echo 배포 완료. GitHub Actions에서 빌드가 진행됩니다.
pause
endlocal
exit /b 0
