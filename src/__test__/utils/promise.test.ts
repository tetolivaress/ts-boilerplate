import { sleep } from "@utils/promise";

it('should return a number',async () => {
  await expect(sleep(9)).resolves.toBe(undefined)
})