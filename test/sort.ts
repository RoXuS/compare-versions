import { assertArrayIncludes } from "https://deno.land/std@0.83.0/testing/asserts.ts";

import compare from "../compare-versions.ts";

Deno.test("sort - should sort versions", () => {
  const versions = [
    "1.2.3",
    "4.11.6",
    "4.2.0",
    "1.5.19",
    "1.5.5",
    "4.1.3",
    "2.3.1",
    "10.5.5",
    "11.3.0",
  ];

  assertArrayIncludes(versions.sort(compare), [
    "1.2.3",
    "1.5.5",
    "1.5.19",
    "2.3.1",
    "4.1.3",
    "4.2.0",
    "4.11.6",
    "10.5.5",
    "11.3.0",
  ]);
});

Deno.test("sort - should sort different digits", () => {
  const versions = [
    "1.0",
    "1.0.0",
    "1.0.1",
  ];

  assertArrayIncludes(versions.sort(compare), [
    "1.0",
    "1.0.0",
    "1.0.1",
  ]);
});

Deno.test("sort - should sort pre-release", () => {
  const versions = [
    "1.0.0",
    "1.0.1",
    "1.0.1-gamma",
    "1.0.1-alpha",
  ];

  assertArrayIncludes(versions.sort(compare), [
    "1.0.0",
    "1.0.1-alpha",
    "1.0.1-gamma",
    "1.0.1",
  ]);
});
