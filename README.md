# mini_intern
VUE3 콤포넌트 개발 프로젝트

## 프로젝트 소개
피맥스에서 세계 최초로 의료용 분석용 인공지능앱을 병원에서 획기적인 개선을 할 수 있도록 서비스를 제공하고 있다. 이 과정에서 라벨링한 진단 부위 영역에 VUE3 타원형 컴포넌트로 영역을 표시하는 프로젝트를 진행하고자 한다.

### 구현해야 할것
- 특정 사이즈의 이미지를 로딩
- 이미지위에 SVG ELLIPSE를 구현
- 배경 이미지 줌인/줌아웃/패닝 기능
- ELLIPSE 크기 변경 회전 기능

### 구현 스택
- 언어: javascript
- 프레임워크: vue3
- 사용 api: web drag and drop

##  Web Screen
![video1811291166](https://github.com/SeungHuiHan/Pmx-mini-intern-project-final/assets/98226400/eaf43100-ce33-4421-9bc7-4b8ded08f789)



### ImageLoading
![image](https://github.com/SeungHuiHan/Pmx-mini-intern-project-final/assets/98226400/13387716-e750-4790-8fae-c3972d5299c8)

```
<img
          :src="imageUrl"
          class="img-fluid"
          :style="{
            transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          }"
          생략
        />
```
- imageUrl:  특정 이미지의 URL 을 저장하는 역할


### SVG ELLIPSE
![image](https://github.com/SeungHuiHan/Pmx-mini-intern-project/assets/98226400/7262383f-9d7e-495e-8537-b192e198ff01)

```
<ellipse
              v-for="(ellipse, index) in ellipses"
              :cx="ellipse.cx"
              :cy="ellipse.cy"
              :rx="ellipse.rx"
              :ry="ellipse.ry"
              :stroke="ellipse.stroke"
              :stroke-dasharray="ellipse.dashArray"
              v-bind:key="ellipse"
            />
```
- ellpise 구현
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
