import { sleep } from "@utils/promise";

it('should return undefined',async () => {
  await expect(sleep(9)).resolves.toBe(undefined)
})