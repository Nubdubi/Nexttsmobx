This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
```bash
yarn create-next-app #설치중간에 폴더명설정
cd 폴더명
yarn add next react react-dom
yarn add --dev typescript @types/react @types/node
touch tsconfig.json
yarn dev
#실행이 안될시 

yarn add -D typesctipt @type/react  
tsconfig.json #package.json 있는 위치에 파일 생성
yarn dev 

```

next-app 설치후 typescript 를 설치해준뒤
touch tsconfig.json 이 안될경우에는
package.json 이있는 위치에 tsconfig.json 을 만들어줍니다.
만들고 실행하게 되면 
자동으로 컴파일링 되면서 tsconfing 에 내용이 남게 됩니다.
폴더내부에 /api폴더를  삭제해줍니다.
만약 컴파일링이 안됬다면 Ctrl + C를 눌러 실행을 중지시키고 
다시 yarn dev 를 이용해 실행시켜주면 됩니다.


```bash
yarn add mobx mobx-react
```
yarn add mobx mobx-react을 이용해 bobx를 설치해줍니다.


```bash
npm install  dev
# or
yarn dev
```


```bash
npm install  dev
# or
yarn dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
