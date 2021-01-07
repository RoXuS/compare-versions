import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import compare from "../compare-versions.ts";

Deno.test("validate - undefined", () => {
  assertEquals(compare.validate(undefined as unknown as string), false);
});

Deno.test("validate - null", () => {
  assertEquals(compare.validate(null as unknown as string), false);
});

Deno.test("validate - 42 - null", () => {
  assertEquals(compare.validate(42 as unknown as string), false);
});

Deno.test("validate - {} - null", () => {
  assertEquals(compare.validate({} as unknown as string), false);
});

Deno.test("validate - [] - null", () => {
  assertEquals(compare.validate([] as unknown as string), false);
});

Deno.test("validate - 6.3.", () => {
  assertEquals(compare.validate("6.3."), false);
});

Deno.test("validate - 1.2.3a", () => {
  assertEquals(compare.validate("1.2.3a"), false);
});

Deno.test("validate - 1.2.-3a", () => {
  assertEquals(compare.validate("1.2.-3a"), false);
});

Deno.test("validate - v1.0.0", () => {
  assertEquals(compare.validate("v1.0.0"), true);
});

Deno.test("validate - 01.0.0", () => {
  assertEquals(compare.validate("01.0.0"), true);
});

Deno.test("validate - 1.0.x", () => {
  assertEquals(compare.validate("1.0.x"), true);
});

Deno.test("validate - 1.0.0-rc.1", () => {
  assertEquals(compare.validate("1.0.0-rc.1"), true);
});

Deno.test("validate - 1.0.0-alpha", () => {
  assertEquals(compare.validate("1.0.0-alpha"), true);
});

Deno.test("validate - 1.0.0-build.3928", () => {
  assertEquals(compare.validate("1.0.0-build.3928"), true);
});

Deno.test("validate - 1.0.0+20130313144700", () => {
  assertEquals(compare.validate("1.0.0+20130313144700"), true);
});

Deno.test("validate - 1.2.3.100", () => {
  assertEquals(compare.validate("1.2.3.100"), true);
});

Deno.test("validate - 2020", () => {
  assertEquals(compare.validate("2020"), true);
});
