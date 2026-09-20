import assert from "node:assert/strict";
import test from "node:test";
import { validateContactPayload } from "../src/lib/contact/validation.mjs";

test("contact validation accepts a bounded valid payload", () => {
  const result = validateContactPayload({
    name: " Ada Lovelace ",
    email: "ADA@EXAMPLE.COM",
    details: "A sufficiently detailed project request.",
    developmentType: "webDevelopment",
  });
  assert.equal(result.success, true);
  assert.equal(result.value.email, "ada@example.com");
});

test("contact validation rejects invalid fields", () => {
  const result = validateContactPayload({ name: "A", email: "invalid", details: "short", developmentType: "unknown" });
  assert.equal(result.success, false);
  assert.deepEqual(result.errors, ["name", "email", "details", "developmentType"]);
});
