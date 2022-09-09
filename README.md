# vitest-demo
vitest use demo - compared jest

## Start
```bash
pnpm test
pnpm coverage
```
> 默认是 vitest 是 watch 模式，若不需要  watch，则 vitest run
> include: **/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}
> exclude:  **/node_modules/**, **/dist/**, **/cypress/**, **/.{idea,git,cache,output,temp}/**
> watch exclude:  **/node_modules/**, **/dist/**

## 参考
[vitest 中文网]（https://cn.vitest.dev/guide/）