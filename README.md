# Todo Project

## Contribution

### Build and Run

#### Prerequisites

패키지 관리는 `pnpm`을 사용합니다.

#### Run

##### Development

```bash
pnpm run dev
```

##### Production

TODO

### UI/UX Design

- [Material 3 Design Guidline](https://m3.material.io/)을 기반으로 합니다.
- [Figma](https://www.figma.com/design/0nnKxnwM1WUGEh6mXOkVbx/Design?m=auto&t=rskTTbifdmEUmICn-6) 디자인 파일을 참고합니다.
<!-- - 하드코딩된 Color, Size, Spacing 등은 사용하지 않습니다. -->

### Coding Guidlines

- 여기에 포함되지 않은 내용이 있으면, `eslint.config.ts` 설정을 따릅니다.
- 여기에 포함되지 않고, `eslint.config.ts` 설정에도 명시되지 않은 기능이면 회의 후 결정합니다.
- `eslint.config.ts` 설정을 바꾸고 싶으면, 회의 후 결정합니다.
- `import`로 하위 모듈을 사용하지 않는 경우, 절대경로를 이용합니다.
  예시) `/src/components/foo.ts`에서 `/src/assets/react.svg`를 참조할 때:
  - `import reactLogo from '@/assets/react.svg'` (O)
  - `import reactLogo from '../../assets/react.svg'` (X)
- `import`로 하위 모듈을 사용하는 경우 relative path로 참조합니다.
- directory/file 이름은 kebab-case를 사용합니다.

### Project Structure

alan2207의 [bulletproof-react structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) 프로젝트 구조를 따릅니다.

### Commit Message

커밋 메세지는 다음과 같은 형식을 따릅니다

`[Type]: Message`

Type은 다음 중 하나를 사용합니다.

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가, 수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등
- `ci`: CI 설정 수정
- `perf`: 성능 향상을 위한 코드 수정
- `revert`: 이전 커밋 되돌리기
- `build`: 빌드 관련 수정
- `idk`: 뭘 선택할지 애매한 경우

Message는 한글로 작성합니다.

