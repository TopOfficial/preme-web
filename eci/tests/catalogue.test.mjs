import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  areas,
  categories,
  products,
  getArea,
  getCategory,
  getProduct,
  productPath,
} from '../lib/catalogue.ts';

test('catalogue provides the five requested product areas', () => {
  assert.deepEqual(
    areas.map((area) => area.slug),
    ['air', 'naval', 'land', 'software', 'search-and-rescue'],
  );
  assert.equal(getArea('security'), undefined);
});

test('every area has a category and product journey with unique URLs', () => {
  const paths = new Set();
  for (const area of areas) {
    const areaCategories = categories.filter(
      (category) => category.area === area.slug,
    );
    assert.ok(areaCategories.length > 0, `Missing categories for ${area.name}`);
    for (const category of areaCategories) {
      const entries = products.filter(
        (product) =>
          product.area === area.slug && product.category === category.slug,
      );
      assert.ok(entries.length > 0, `Missing products for ${category.name}`);
      for (const product of entries) {
        assert.equal(getCategory(area.slug, category.slug), category);
        assert.equal(
          getProduct(area.slug, category.slug, product.slug),
          product,
        );
        assert.ok(
          !paths.has(productPath(product)),
          `Duplicate product URL: ${productPath(product)}`,
        );
        paths.add(productPath(product));
      }
    }
  }
  assert.equal(
    paths.size,
    products.length,
    'Orphan products must not appear in All products',
  );
  assert.equal(getProduct('air', 'uncrewed-aircraft', 'missing'), undefined);
});
