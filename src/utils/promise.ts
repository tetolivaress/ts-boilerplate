export const sleep = (millisecondsTimeout: number) =>
  new Promise((resolve) => setTimeout(resolve, millisecondsTimeout))
