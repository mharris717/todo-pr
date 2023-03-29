import { assert, expect, test } from 'vitest'
import { getNestedValue } from '../src/util'
// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt(144)).toBe(12)
    expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
    const input = {
        foo: 'hello',
        bar: 'world',
    }

    const output = JSON.stringify(input)

    expect(output).eq('{"foo":"hello","bar":"world"}')
    assert.deepEqual(JSON.parse(output), input, 'matches original')
})

test("getNestedValue", () => {
    const obj = {
        foo: {
            bar: {
                baz: 42,
            },
        },
    };
    expect(getNestedValue(obj, "foo.bar.baz")).toBe(42);
    expect(getNestedValue(obj, "foo.bar")).toEqual({ baz: 42 });
    expect(getNestedValue(obj, "foo")).toEqual({ bar: { baz: 42 } });
    // expect(getNestedValue(obj, "")).toEqual(obj);
    // expect(getNestedValue(obj, "foo.bar.baz.qux")).toBe(undefined);
    // expect(getNestedValue(obj, "foo.bar.baz.qux", "default")).toBe(
    //     "default"
    // );
    // expect(getNestedValue(obj, "foo.bar.baz.qux", null)).toBe(null);
    // expect(getNestedValue(obj, "foo.bar.baz.qux", 0)).toBe(0);
    // expect(getNestedValue(obj, "foo.bar.baz.qux", false)).toBe(false);
})