---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 12 Factors App
info: |
  ## 12 Factors App
# apply unocss classes to the current slide
class: text-center px-20
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# 12-Factor App
현대적 클라우드 네이티브 애플리케이션 개발 원칙

발표자: [송민석]
날짜: [2025년 7월 7일]

[12factor.net](https://12factor.net/) - 공식 문서

---

# 목차
1. 12-Factor App 개요
2. 각 Factor별 설명 및 사례
3. 실제 적용 사례
4. Q&A

---

# 12-Factor App 개요
- **CSCF(Cloud Service Configuration Framework)**, **SaaS(Service as a Service) 앱을 위한 12가지 개발 원칙**
  - 클라우드 서비스 구성 표준화
  - 환경별 설정 관리 및 배포 자동화
- 확장성, 유지보수성, 이식성 향상
- 다양한 언어/프레임워크에 적용 가능


---
layout: two-cols
---

# Factor 1: 코드베이스(Codebase)
[12factor.net/codebase](https://12factor.net/codebase)

- 하나의 코드베이스, 여러 배포
- **사례:**
  - Git 저장소 하나에서 Dev, Staging, Prod 환경으로 배포

::right::

![codebase-deploys.png](/images/codebase-deploys.png)


---

# Factor 2: 의존성(Dependencies)
[12factor.net/dependencies](https://12factor.net/dependencies)

- 의존성은 명확히 선언하고 격리
- **사례:**
  - requirements.txt, package.json 등으로 외부 라이브러리 관리

---

# Factor 3: 설정(Config)
[12factor.net/config](https://12factor.net/config)

- 설정은 코드에 포함하지 않고 환경 변수 등 외부에 저장
- **사례:**
  - DB 접속 정보, API 키를 환경 변수로 관리

---
layout: two-cols
---

# Factor 4: 백엔드 서비스(Backing Services)
[12factor.net/backing-services](https://12factor.net/backing-services)

- 외부 서비스(DB, MQ 등)는 별도 리소스로 취급
- **사례:**
  - 로컬 DB → 클라우드 DB로 변경 시 환경 변수만 수정

::right::

![attached-resources.png](/images/attached-resources.png)


---
layout: two-cols
---

# Factor 5: 빌드, 릴리즈, 실행(Build, Release, Run)
[12factor.net/build-release-run](https://12factor.net/build-release-run)

- 빌드, 릴리즈, 실행 단계 분리
- **사례:**
  - CI/CD 파이프라인에서 각 단계가 명확히 분리됨

::right::

![release.png](/images/release.png)

---

# Factor 6: 프로세스(Processes)
[12factor.net/processes](https://12factor.net/processes)

- 무상태(stateless) 프로세스로 실행
- **사례:**
  - 세션 정보를 Redis 등 외부 저장소에 저장

---

# Factor 7: 포트 바인딩(Port Binding)
[12factor.net/port-binding](https://12factor.net/port-binding)

- 자체적으로 포트를 바인딩해 서비스 제공
- **사례:**
  - Spring Boot, Express.js 앱이 내장 서버로 8080 포트에서 동작

---
layout: two-cols
---

# Factor 8: 동시성(Concurrency)
[12factor.net/concurrency](https://12factor.net/concurrency)

- 수평 확장(Scale out)으로 동시성 확보
- **사례:**
  - Docker 컨테이너 여러 개로 앱 인스턴스 확장

::right::

![process-types.png](/images/process-types.png)

---

# Factor 9: 즉시 종료 가능성(Disposability)
[12factor.net/disposability](https://12factor.net/disposability)

- 빠른 시작, 정상 종료 가능
- **사례:**
  - 컨테이너 재시작 시 빠르게 복구되는 앱

---

# Factor 10: 개발/운영 환경 동일성(Dev/Prod Parity)
[12factor.net/dev-prod-parity](https://12factor.net/dev-prod-parity)

- 개발, 스테이징, 운영 환경의 차이 최소화
- **사례:**
  - Docker로 모든 환경을 동일하게 구성

---

# Factor 11: 로그(Logs)
[12factor.net/logs](https://12factor.net/logs)

- 로그는 파일이 아닌 표준 출력(stdout)으로 남김
- **사례:**
  - 로그를 파일로 저장하지 않고, 로그 수집 시스템에서 수집

---

# Factor 12: 관리 작업(Admin Processes)
[12factor.net/admin-processes](https://12factor.net/admin-processes)

- 관리 작업은 별도 일회성 프로세스로 실행
- **사례:**
  - DB 마이그레이션을 별도 커맨드로 실행

---
layout: center
---

# Q&A
질문 받겠습니다!
