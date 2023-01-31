## :pencil2: files, include, exclude

:small_blue_diamond: 최상위 프로퍼티이며 이 3가지를 통해 어떤 파일을 compile할지 결정

## :pencil2: files
- 상대 혹은 절대 경로의 리스트 배열
- exclude보다 서열이 높음

## :pencil2: include
- glob 패턴
- exclude보다 서열이 낮음
- *같은걸 사용하면 .ts / .tsx / .d.ts 파일만 include (Js도 포함시킬거면 allowJs)

## :pencil2: exclude
- glob 패턴
- 설정 안하면 4가지 (node_modules, bower_components, jspm_packages, outDir)를 default로 제외
- outDir은 항상 제외 (include에 포함되어 있어도)
