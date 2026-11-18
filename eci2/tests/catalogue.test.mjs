import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import {
  areas,
  categories,
  products,
  getArea,
  getCategory,
  getProduct,
  productPath,
} from "../lib/catalogue.ts";
test("five areas retain navigable categories and explicitly labelled samples", () => {
  assert.deepEqual(
    areas.map((x) => x.slug),
    ["air", "naval", "land", "software", "search-and-rescue"],
  );
  for (const a of areas) {
    assert.ok(categories.some((c) => c.area === a.slug));
    assert.equal(products.filter((p) => p.area === a.slug && p.sample).length, 2);
  }
});
test("profile catalogue covers every requested page with real source entries", () => {
  const profile = products.filter((p) => !p.sample);
  assert.equal(profile.length, 30);
  const pages = new Set(profile.flatMap((p) => p.sourcePages || []));
  for (let page = 14; page <= 42; page++) assert.ok(pages.has(page), `PDF page ${page} missing`);
  for (const p of profile) {
    assert.ok(p.sourcePages.length);
    assert.ok(["product", "solution", "project"].includes(p.kind));
    assert.equal(p.description.split(/(?<=[.!?])\s+/).length, 2, p.name);
  }
});
test("repeated slides form galleries and named projects keep their context", () => {
  assert.deepEqual(
    products.find((p) => p.slug === "mobile-command-vehicle")?.sourcePages,
    [15, 16, 18],
  );
  assert.deepEqual(
    products.find((p) => p.slug === "control-room-led-display")?.sourcePages,
    [35, 36],
  );
  assert.equal(products.find((p) => p.slug === "maritime-command-center")?.kind, "project");
  assert.equal(products.find((p) => p.slug === "precision-air")?.category, "data-centre-and-power");
  assert.equal(products.find((p) => p.slug === "cambridge-pixel")?.area, "software");
});
test("lookup respects hierarchy and every record has a usable image", () => {
  for (const p of products) {
    assert.equal(getProduct(p.area, p.category, p.slug), p);
    assert.ok(getCategory(p.area, p.category));
    assert.ok(getArea(p.area));
    assert.ok(p.images.length);
    for (const img of p.images)
      assert.ok(existsSync(new URL("../public" + img.src, import.meta.url)), img.src);
  }
  assert.equal(getProduct("naval", "air-equipment", "air-01"), undefined);
  assert.equal(getArea("security"), undefined);
  assert.equal(getCategory("air", "missing"), undefined);
  assert.equal(new Set(products.map(productPath)).size, products.length);
  assert.equal(new Set(products.map((p) => p.slug)).size, products.length);
});
