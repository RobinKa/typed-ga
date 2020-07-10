"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) + (b.e1 || 0) : undefined,
        e2: (a.e2 !== undefined || b.e2 !== undefined) ? (a.e2 || 0) + (b.e2 || 0) : undefined,
        e3: (a.e3 !== undefined || b.e3 !== undefined) ? (a.e3 || 0) + (b.e3 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) + (b.e01 || 0) : undefined,
        e02: (a.e02 !== undefined || b.e02 !== undefined) ? (a.e02 || 0) + (b.e02 || 0) : undefined,
        e03: (a.e03 !== undefined || b.e03 !== undefined) ? (a.e03 || 0) + (b.e03 || 0) : undefined,
        e12: (a.e12 !== undefined || b.e12 !== undefined) ? (a.e12 || 0) + (b.e12 || 0) : undefined,
        e13: (a.e13 !== undefined || b.e13 !== undefined) ? (a.e13 || 0) + (b.e13 || 0) : undefined,
        e23: (a.e23 !== undefined || b.e23 !== undefined) ? (a.e23 || 0) + (b.e23 || 0) : undefined,
        e012: (a.e012 !== undefined || b.e012 !== undefined) ? (a.e012 || 0) + (b.e012 || 0) : undefined,
        e013: (a.e013 !== undefined || b.e013 !== undefined) ? (a.e013 || 0) + (b.e013 || 0) : undefined,
        e023: (a.e023 !== undefined || b.e023 !== undefined) ? (a.e023 || 0) + (b.e023 || 0) : undefined,
        e123: (a.e123 !== undefined || b.e123 !== undefined) ? (a.e123 || 0) + (b.e123 || 0) : undefined,
        e0123: (a.e0123 !== undefined || b.e0123 !== undefined) ? (a.e0123 || 0) + (b.e0123 || 0) : undefined,
    };
    return result;
};
exports.sub = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) - (b.e1 || 0) : undefined,
        e2: (a.e2 !== undefined || b.e2 !== undefined) ? (a.e2 || 0) - (b.e2 || 0) : undefined,
        e3: (a.e3 !== undefined || b.e3 !== undefined) ? (a.e3 || 0) - (b.e3 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) - (b.e01 || 0) : undefined,
        e02: (a.e02 !== undefined || b.e02 !== undefined) ? (a.e02 || 0) - (b.e02 || 0) : undefined,
        e03: (a.e03 !== undefined || b.e03 !== undefined) ? (a.e03 || 0) - (b.e03 || 0) : undefined,
        e12: (a.e12 !== undefined || b.e12 !== undefined) ? (a.e12 || 0) - (b.e12 || 0) : undefined,
        e13: (a.e13 !== undefined || b.e13 !== undefined) ? (a.e13 || 0) - (b.e13 || 0) : undefined,
        e23: (a.e23 !== undefined || b.e23 !== undefined) ? (a.e23 || 0) - (b.e23 || 0) : undefined,
        e012: (a.e012 !== undefined || b.e012 !== undefined) ? (a.e012 || 0) - (b.e012 || 0) : undefined,
        e013: (a.e013 !== undefined || b.e013 !== undefined) ? (a.e013 || 0) - (b.e013 || 0) : undefined,
        e023: (a.e023 !== undefined || b.e023 !== undefined) ? (a.e023 || 0) - (b.e023 || 0) : undefined,
        e123: (a.e123 !== undefined || b.e123 !== undefined) ? (a.e123 || 0) - (b.e123 || 0) : undefined,
        e0123: (a.e0123 !== undefined || b.e0123 !== undefined) ? (a.e0123 || 0) - (b.e0123 || 0) : undefined,
    };
    return result;
};
exports.dual = function (a) {
    var result = {
        scalar: a.e0123 !== undefined ? 1.0 * a.e0123 : undefined,
        e0: a.e123 !== undefined ? 1.0 * a.e123 : undefined,
        e1: a.e023 !== undefined ? -1.0 * a.e023 : undefined,
        e2: a.e013 !== undefined ? 1.0 * a.e013 : undefined,
        e3: a.e012 !== undefined ? -1.0 * a.e012 : undefined,
        e01: a.e23 !== undefined ? 1.0 * a.e23 : undefined,
        e02: a.e13 !== undefined ? -1.0 * a.e13 : undefined,
        e03: a.e12 !== undefined ? 1.0 * a.e12 : undefined,
        e12: a.e03 !== undefined ? 1.0 * a.e03 : undefined,
        e13: a.e02 !== undefined ? -1.0 * a.e02 : undefined,
        e23: a.e01 !== undefined ? 1.0 * a.e01 : undefined,
        e012: a.e3 !== undefined ? 1.0 * a.e3 : undefined,
        e013: a.e2 !== undefined ? -1.0 * a.e2 : undefined,
        e023: a.e1 !== undefined ? 1.0 * a.e1 : undefined,
        e123: a.e0 !== undefined ? -1.0 * a.e0 : undefined,
        e0123: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    };
    return result;
};
exports.geometricProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e2 !== undefined && b.e2 !== undefined;
    var scalar_2 = a.e3 !== undefined && b.e3 !== undefined;
    var scalar_3 = a.e23 !== undefined && b.e23 !== undefined;
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += -1.0 * (a.e2 * b.e2);
        if (scalar_2)
            resultScalar += 1.0 * (a.e3 * b.e3);
        if (scalar_3)
            resultScalar += 1.0 * (a.e23 * b.e23);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    var e0_2 = a.e2 !== undefined && b.e02 !== undefined;
    var e0_3 = a.e3 !== undefined && b.e03 !== undefined;
    var e0_4 = a.e02 !== undefined && b.e2 !== undefined;
    var e0_5 = a.e03 !== undefined && b.e3 !== undefined;
    var e0_6 = a.e23 !== undefined && b.e023 !== undefined;
    var e0_7 = a.e023 !== undefined && b.e23 !== undefined;
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
        if (e0_2)
            resultE0 += 1.0 * (a.e2 * b.e02);
        if (e0_3)
            resultE0 += -1.0 * (a.e3 * b.e03);
        if (e0_4)
            resultE0 += -1.0 * (a.e02 * b.e2);
        if (e0_5)
            resultE0 += 1.0 * (a.e03 * b.e3);
        if (e0_6)
            resultE0 += 1.0 * (a.e23 * b.e023);
        if (e0_7)
            resultE0 += 1.0 * (a.e023 * b.e23);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e1 !== undefined && b.scalar !== undefined;
    var e1_2 = a.e2 !== undefined && b.e12 !== undefined;
    var e1_3 = a.e3 !== undefined && b.e13 !== undefined;
    var e1_4 = a.e12 !== undefined && b.e2 !== undefined;
    var e1_5 = a.e13 !== undefined && b.e3 !== undefined;
    var e1_6 = a.e23 !== undefined && b.e123 !== undefined;
    var e1_7 = a.e123 !== undefined && b.e23 !== undefined;
    if (e1_0 || e1_1 || e1_2 || e1_3 || e1_4 || e1_5 || e1_6 || e1_7) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e1 * b.scalar);
        if (e1_2)
            resultE1 += 1.0 * (a.e2 * b.e12);
        if (e1_3)
            resultE1 += -1.0 * (a.e3 * b.e13);
        if (e1_4)
            resultE1 += -1.0 * (a.e12 * b.e2);
        if (e1_5)
            resultE1 += 1.0 * (a.e13 * b.e3);
        if (e1_6)
            resultE1 += 1.0 * (a.e23 * b.e123);
        if (e1_7)
            resultE1 += 1.0 * (a.e123 * b.e23);
    }
    var resultE2 = undefined;
    var e2_0 = a.scalar !== undefined && b.e2 !== undefined;
    var e2_1 = a.e2 !== undefined && b.scalar !== undefined;
    var e2_2 = a.e3 !== undefined && b.e23 !== undefined;
    var e2_3 = a.e23 !== undefined && b.e3 !== undefined;
    if (e2_0 || e2_1 || e2_2 || e2_3) {
        resultE2 = 0;
        if (e2_0)
            resultE2 += 1.0 * (a.scalar * b.e2);
        if (e2_1)
            resultE2 += 1.0 * (a.e2 * b.scalar);
        if (e2_2)
            resultE2 += -1.0 * (a.e3 * b.e23);
        if (e2_3)
            resultE2 += 1.0 * (a.e23 * b.e3);
    }
    var resultE3 = undefined;
    var e3_0 = a.scalar !== undefined && b.e3 !== undefined;
    var e3_1 = a.e2 !== undefined && b.e23 !== undefined;
    var e3_2 = a.e3 !== undefined && b.scalar !== undefined;
    var e3_3 = a.e23 !== undefined && b.e2 !== undefined;
    if (e3_0 || e3_1 || e3_2 || e3_3) {
        resultE3 = 0;
        if (e3_0)
            resultE3 += 1.0 * (a.scalar * b.e3);
        if (e3_1)
            resultE3 += -1.0 * (a.e2 * b.e23);
        if (e3_2)
            resultE3 += 1.0 * (a.e3 * b.scalar);
        if (e3_3)
            resultE3 += 1.0 * (a.e23 * b.e2);
    }
    var resultE01 = undefined;
    var e01_0 = a.scalar !== undefined && b.e01 !== undefined;
    var e01_1 = a.e0 !== undefined && b.e1 !== undefined;
    var e01_2 = a.e1 !== undefined && b.e0 !== undefined;
    var e01_3 = a.e2 !== undefined && b.e012 !== undefined;
    var e01_4 = a.e3 !== undefined && b.e013 !== undefined;
    var e01_5 = a.e01 !== undefined && b.scalar !== undefined;
    var e01_6 = a.e02 !== undefined && b.e12 !== undefined;
    var e01_7 = a.e03 !== undefined && b.e13 !== undefined;
    var e01_8 = a.e12 !== undefined && b.e02 !== undefined;
    var e01_9 = a.e13 !== undefined && b.e03 !== undefined;
    var e01_10 = a.e23 !== undefined && b.e0123 !== undefined;
    var e01_11 = a.e012 !== undefined && b.e2 !== undefined;
    var e01_12 = a.e013 !== undefined && b.e3 !== undefined;
    var e01_13 = a.e023 !== undefined && b.e123 !== undefined;
    var e01_14 = a.e123 !== undefined && b.e023 !== undefined;
    var e01_15 = a.e0123 !== undefined && b.e23 !== undefined;
    if (e01_0 || e01_1 || e01_2 || e01_3 || e01_4 || e01_5 || e01_6 || e01_7 || e01_8 || e01_9 || e01_10 || e01_11 || e01_12 || e01_13 || e01_14 || e01_15) {
        resultE01 = 0;
        if (e01_0)
            resultE01 += 1.0 * (a.scalar * b.e01);
        if (e01_1)
            resultE01 += 1.0 * (a.e0 * b.e1);
        if (e01_2)
            resultE01 += -1.0 * (a.e1 * b.e0);
        if (e01_3)
            resultE01 += -1.0 * (a.e2 * b.e012);
        if (e01_4)
            resultE01 += 1.0 * (a.e3 * b.e013);
        if (e01_5)
            resultE01 += 1.0 * (a.e01 * b.scalar);
        if (e01_6)
            resultE01 += 1.0 * (a.e02 * b.e12);
        if (e01_7)
            resultE01 += -1.0 * (a.e03 * b.e13);
        if (e01_8)
            resultE01 += -1.0 * (a.e12 * b.e02);
        if (e01_9)
            resultE01 += 1.0 * (a.e13 * b.e03);
        if (e01_10)
            resultE01 += 1.0 * (a.e23 * b.e0123);
        if (e01_11)
            resultE01 += -1.0 * (a.e012 * b.e2);
        if (e01_12)
            resultE01 += 1.0 * (a.e013 * b.e3);
        if (e01_13)
            resultE01 += 1.0 * (a.e023 * b.e123);
        if (e01_14)
            resultE01 += -1.0 * (a.e123 * b.e023);
        if (e01_15)
            resultE01 += 1.0 * (a.e0123 * b.e23);
    }
    var resultE02 = undefined;
    var e02_0 = a.scalar !== undefined && b.e02 !== undefined;
    var e02_1 = a.e0 !== undefined && b.e2 !== undefined;
    var e02_2 = a.e2 !== undefined && b.e0 !== undefined;
    var e02_3 = a.e3 !== undefined && b.e023 !== undefined;
    var e02_4 = a.e02 !== undefined && b.scalar !== undefined;
    var e02_5 = a.e03 !== undefined && b.e23 !== undefined;
    var e02_6 = a.e23 !== undefined && b.e03 !== undefined;
    var e02_7 = a.e023 !== undefined && b.e3 !== undefined;
    if (e02_0 || e02_1 || e02_2 || e02_3 || e02_4 || e02_5 || e02_6 || e02_7) {
        resultE02 = 0;
        if (e02_0)
            resultE02 += 1.0 * (a.scalar * b.e02);
        if (e02_1)
            resultE02 += 1.0 * (a.e0 * b.e2);
        if (e02_2)
            resultE02 += -1.0 * (a.e2 * b.e0);
        if (e02_3)
            resultE02 += 1.0 * (a.e3 * b.e023);
        if (e02_4)
            resultE02 += 1.0 * (a.e02 * b.scalar);
        if (e02_5)
            resultE02 += -1.0 * (a.e03 * b.e23);
        if (e02_6)
            resultE02 += 1.0 * (a.e23 * b.e03);
        if (e02_7)
            resultE02 += 1.0 * (a.e023 * b.e3);
    }
    var resultE03 = undefined;
    var e03_0 = a.scalar !== undefined && b.e03 !== undefined;
    var e03_1 = a.e0 !== undefined && b.e3 !== undefined;
    var e03_2 = a.e2 !== undefined && b.e023 !== undefined;
    var e03_3 = a.e3 !== undefined && b.e0 !== undefined;
    var e03_4 = a.e02 !== undefined && b.e23 !== undefined;
    var e03_5 = a.e03 !== undefined && b.scalar !== undefined;
    var e03_6 = a.e23 !== undefined && b.e02 !== undefined;
    var e03_7 = a.e023 !== undefined && b.e2 !== undefined;
    if (e03_0 || e03_1 || e03_2 || e03_3 || e03_4 || e03_5 || e03_6 || e03_7) {
        resultE03 = 0;
        if (e03_0)
            resultE03 += 1.0 * (a.scalar * b.e03);
        if (e03_1)
            resultE03 += 1.0 * (a.e0 * b.e3);
        if (e03_2)
            resultE03 += 1.0 * (a.e2 * b.e023);
        if (e03_3)
            resultE03 += -1.0 * (a.e3 * b.e0);
        if (e03_4)
            resultE03 += -1.0 * (a.e02 * b.e23);
        if (e03_5)
            resultE03 += 1.0 * (a.e03 * b.scalar);
        if (e03_6)
            resultE03 += 1.0 * (a.e23 * b.e02);
        if (e03_7)
            resultE03 += 1.0 * (a.e023 * b.e2);
    }
    var resultE12 = undefined;
    var e12_0 = a.scalar !== undefined && b.e12 !== undefined;
    var e12_1 = a.e1 !== undefined && b.e2 !== undefined;
    var e12_2 = a.e2 !== undefined && b.e1 !== undefined;
    var e12_3 = a.e3 !== undefined && b.e123 !== undefined;
    var e12_4 = a.e12 !== undefined && b.scalar !== undefined;
    var e12_5 = a.e13 !== undefined && b.e23 !== undefined;
    var e12_6 = a.e23 !== undefined && b.e13 !== undefined;
    var e12_7 = a.e123 !== undefined && b.e3 !== undefined;
    if (e12_0 || e12_1 || e12_2 || e12_3 || e12_4 || e12_5 || e12_6 || e12_7) {
        resultE12 = 0;
        if (e12_0)
            resultE12 += 1.0 * (a.scalar * b.e12);
        if (e12_1)
            resultE12 += 1.0 * (a.e1 * b.e2);
        if (e12_2)
            resultE12 += -1.0 * (a.e2 * b.e1);
        if (e12_3)
            resultE12 += 1.0 * (a.e3 * b.e123);
        if (e12_4)
            resultE12 += 1.0 * (a.e12 * b.scalar);
        if (e12_5)
            resultE12 += -1.0 * (a.e13 * b.e23);
        if (e12_6)
            resultE12 += 1.0 * (a.e23 * b.e13);
        if (e12_7)
            resultE12 += 1.0 * (a.e123 * b.e3);
    }
    var resultE13 = undefined;
    var e13_0 = a.scalar !== undefined && b.e13 !== undefined;
    var e13_1 = a.e1 !== undefined && b.e3 !== undefined;
    var e13_2 = a.e2 !== undefined && b.e123 !== undefined;
    var e13_3 = a.e3 !== undefined && b.e1 !== undefined;
    var e13_4 = a.e12 !== undefined && b.e23 !== undefined;
    var e13_5 = a.e13 !== undefined && b.scalar !== undefined;
    var e13_6 = a.e23 !== undefined && b.e12 !== undefined;
    var e13_7 = a.e123 !== undefined && b.e2 !== undefined;
    if (e13_0 || e13_1 || e13_2 || e13_3 || e13_4 || e13_5 || e13_6 || e13_7) {
        resultE13 = 0;
        if (e13_0)
            resultE13 += 1.0 * (a.scalar * b.e13);
        if (e13_1)
            resultE13 += 1.0 * (a.e1 * b.e3);
        if (e13_2)
            resultE13 += 1.0 * (a.e2 * b.e123);
        if (e13_3)
            resultE13 += -1.0 * (a.e3 * b.e1);
        if (e13_4)
            resultE13 += -1.0 * (a.e12 * b.e23);
        if (e13_5)
            resultE13 += 1.0 * (a.e13 * b.scalar);
        if (e13_6)
            resultE13 += 1.0 * (a.e23 * b.e12);
        if (e13_7)
            resultE13 += 1.0 * (a.e123 * b.e2);
    }
    var resultE23 = undefined;
    var e23_0 = a.scalar !== undefined && b.e23 !== undefined;
    var e23_1 = a.e2 !== undefined && b.e3 !== undefined;
    var e23_2 = a.e3 !== undefined && b.e2 !== undefined;
    var e23_3 = a.e23 !== undefined && b.scalar !== undefined;
    if (e23_0 || e23_1 || e23_2 || e23_3) {
        resultE23 = 0;
        if (e23_0)
            resultE23 += 1.0 * (a.scalar * b.e23);
        if (e23_1)
            resultE23 += 1.0 * (a.e2 * b.e3);
        if (e23_2)
            resultE23 += -1.0 * (a.e3 * b.e2);
        if (e23_3)
            resultE23 += 1.0 * (a.e23 * b.scalar);
    }
    var resultE012 = undefined;
    var e012_0 = a.scalar !== undefined && b.e012 !== undefined;
    var e012_1 = a.e0 !== undefined && b.e12 !== undefined;
    var e012_2 = a.e1 !== undefined && b.e02 !== undefined;
    var e012_3 = a.e2 !== undefined && b.e01 !== undefined;
    var e012_4 = a.e3 !== undefined && b.e0123 !== undefined;
    var e012_5 = a.e01 !== undefined && b.e2 !== undefined;
    var e012_6 = a.e02 !== undefined && b.e1 !== undefined;
    var e012_7 = a.e03 !== undefined && b.e123 !== undefined;
    var e012_8 = a.e12 !== undefined && b.e0 !== undefined;
    var e012_9 = a.e13 !== undefined && b.e023 !== undefined;
    var e012_10 = a.e23 !== undefined && b.e013 !== undefined;
    var e012_11 = a.e012 !== undefined && b.scalar !== undefined;
    var e012_12 = a.e013 !== undefined && b.e23 !== undefined;
    var e012_13 = a.e023 !== undefined && b.e13 !== undefined;
    var e012_14 = a.e123 !== undefined && b.e03 !== undefined;
    var e012_15 = a.e0123 !== undefined && b.e3 !== undefined;
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7 || e012_8 || e012_9 || e012_10 || e012_11 || e012_12 || e012_13 || e012_14 || e012_15) {
        resultE012 = 0;
        if (e012_0)
            resultE012 += 1.0 * (a.scalar * b.e012);
        if (e012_1)
            resultE012 += 1.0 * (a.e0 * b.e12);
        if (e012_2)
            resultE012 += -1.0 * (a.e1 * b.e02);
        if (e012_3)
            resultE012 += 1.0 * (a.e2 * b.e01);
        if (e012_4)
            resultE012 += -1.0 * (a.e3 * b.e0123);
        if (e012_5)
            resultE012 += 1.0 * (a.e01 * b.e2);
        if (e012_6)
            resultE012 += -1.0 * (a.e02 * b.e1);
        if (e012_7)
            resultE012 += 1.0 * (a.e03 * b.e123);
        if (e012_8)
            resultE012 += 1.0 * (a.e12 * b.e0);
        if (e012_9)
            resultE012 += -1.0 * (a.e13 * b.e023);
        if (e012_10)
            resultE012 += 1.0 * (a.e23 * b.e013);
        if (e012_11)
            resultE012 += 1.0 * (a.e012 * b.scalar);
        if (e012_12)
            resultE012 += -1.0 * (a.e013 * b.e23);
        if (e012_13)
            resultE012 += 1.0 * (a.e023 * b.e13);
        if (e012_14)
            resultE012 += -1.0 * (a.e123 * b.e03);
        if (e012_15)
            resultE012 += 1.0 * (a.e0123 * b.e3);
    }
    var resultE013 = undefined;
    var e013_0 = a.scalar !== undefined && b.e013 !== undefined;
    var e013_1 = a.e0 !== undefined && b.e13 !== undefined;
    var e013_2 = a.e1 !== undefined && b.e03 !== undefined;
    var e013_3 = a.e2 !== undefined && b.e0123 !== undefined;
    var e013_4 = a.e3 !== undefined && b.e01 !== undefined;
    var e013_5 = a.e01 !== undefined && b.e3 !== undefined;
    var e013_6 = a.e02 !== undefined && b.e123 !== undefined;
    var e013_7 = a.e03 !== undefined && b.e1 !== undefined;
    var e013_8 = a.e12 !== undefined && b.e023 !== undefined;
    var e013_9 = a.e13 !== undefined && b.e0 !== undefined;
    var e013_10 = a.e23 !== undefined && b.e012 !== undefined;
    var e013_11 = a.e012 !== undefined && b.e23 !== undefined;
    var e013_12 = a.e013 !== undefined && b.scalar !== undefined;
    var e013_13 = a.e023 !== undefined && b.e12 !== undefined;
    var e013_14 = a.e123 !== undefined && b.e02 !== undefined;
    var e013_15 = a.e0123 !== undefined && b.e2 !== undefined;
    if (e013_0 || e013_1 || e013_2 || e013_3 || e013_4 || e013_5 || e013_6 || e013_7 || e013_8 || e013_9 || e013_10 || e013_11 || e013_12 || e013_13 || e013_14 || e013_15) {
        resultE013 = 0;
        if (e013_0)
            resultE013 += 1.0 * (a.scalar * b.e013);
        if (e013_1)
            resultE013 += 1.0 * (a.e0 * b.e13);
        if (e013_2)
            resultE013 += -1.0 * (a.e1 * b.e03);
        if (e013_3)
            resultE013 += -1.0 * (a.e2 * b.e0123);
        if (e013_4)
            resultE013 += 1.0 * (a.e3 * b.e01);
        if (e013_5)
            resultE013 += 1.0 * (a.e01 * b.e3);
        if (e013_6)
            resultE013 += 1.0 * (a.e02 * b.e123);
        if (e013_7)
            resultE013 += -1.0 * (a.e03 * b.e1);
        if (e013_8)
            resultE013 += -1.0 * (a.e12 * b.e023);
        if (e013_9)
            resultE013 += 1.0 * (a.e13 * b.e0);
        if (e013_10)
            resultE013 += 1.0 * (a.e23 * b.e012);
        if (e013_11)
            resultE013 += -1.0 * (a.e012 * b.e23);
        if (e013_12)
            resultE013 += 1.0 * (a.e013 * b.scalar);
        if (e013_13)
            resultE013 += 1.0 * (a.e023 * b.e12);
        if (e013_14)
            resultE013 += -1.0 * (a.e123 * b.e02);
        if (e013_15)
            resultE013 += 1.0 * (a.e0123 * b.e2);
    }
    var resultE023 = undefined;
    var e023_0 = a.scalar !== undefined && b.e023 !== undefined;
    var e023_1 = a.e0 !== undefined && b.e23 !== undefined;
    var e023_2 = a.e2 !== undefined && b.e03 !== undefined;
    var e023_3 = a.e3 !== undefined && b.e02 !== undefined;
    var e023_4 = a.e02 !== undefined && b.e3 !== undefined;
    var e023_5 = a.e03 !== undefined && b.e2 !== undefined;
    var e023_6 = a.e23 !== undefined && b.e0 !== undefined;
    var e023_7 = a.e023 !== undefined && b.scalar !== undefined;
    if (e023_0 || e023_1 || e023_2 || e023_3 || e023_4 || e023_5 || e023_6 || e023_7) {
        resultE023 = 0;
        if (e023_0)
            resultE023 += 1.0 * (a.scalar * b.e023);
        if (e023_1)
            resultE023 += 1.0 * (a.e0 * b.e23);
        if (e023_2)
            resultE023 += -1.0 * (a.e2 * b.e03);
        if (e023_3)
            resultE023 += 1.0 * (a.e3 * b.e02);
        if (e023_4)
            resultE023 += 1.0 * (a.e02 * b.e3);
        if (e023_5)
            resultE023 += -1.0 * (a.e03 * b.e2);
        if (e023_6)
            resultE023 += 1.0 * (a.e23 * b.e0);
        if (e023_7)
            resultE023 += 1.0 * (a.e023 * b.scalar);
    }
    var resultE123 = undefined;
    var e123_0 = a.scalar !== undefined && b.e123 !== undefined;
    var e123_1 = a.e1 !== undefined && b.e23 !== undefined;
    var e123_2 = a.e2 !== undefined && b.e13 !== undefined;
    var e123_3 = a.e3 !== undefined && b.e12 !== undefined;
    var e123_4 = a.e12 !== undefined && b.e3 !== undefined;
    var e123_5 = a.e13 !== undefined && b.e2 !== undefined;
    var e123_6 = a.e23 !== undefined && b.e1 !== undefined;
    var e123_7 = a.e123 !== undefined && b.scalar !== undefined;
    if (e123_0 || e123_1 || e123_2 || e123_3 || e123_4 || e123_5 || e123_6 || e123_7) {
        resultE123 = 0;
        if (e123_0)
            resultE123 += 1.0 * (a.scalar * b.e123);
        if (e123_1)
            resultE123 += 1.0 * (a.e1 * b.e23);
        if (e123_2)
            resultE123 += -1.0 * (a.e2 * b.e13);
        if (e123_3)
            resultE123 += 1.0 * (a.e3 * b.e12);
        if (e123_4)
            resultE123 += 1.0 * (a.e12 * b.e3);
        if (e123_5)
            resultE123 += -1.0 * (a.e13 * b.e2);
        if (e123_6)
            resultE123 += 1.0 * (a.e23 * b.e1);
        if (e123_7)
            resultE123 += 1.0 * (a.e123 * b.scalar);
    }
    var resultE0123 = undefined;
    var e0123_0 = a.scalar !== undefined && b.e0123 !== undefined;
    var e0123_1 = a.e0 !== undefined && b.e123 !== undefined;
    var e0123_2 = a.e1 !== undefined && b.e023 !== undefined;
    var e0123_3 = a.e2 !== undefined && b.e013 !== undefined;
    var e0123_4 = a.e3 !== undefined && b.e012 !== undefined;
    var e0123_5 = a.e01 !== undefined && b.e23 !== undefined;
    var e0123_6 = a.e02 !== undefined && b.e13 !== undefined;
    var e0123_7 = a.e03 !== undefined && b.e12 !== undefined;
    var e0123_8 = a.e12 !== undefined && b.e03 !== undefined;
    var e0123_9 = a.e13 !== undefined && b.e02 !== undefined;
    var e0123_10 = a.e23 !== undefined && b.e01 !== undefined;
    var e0123_11 = a.e012 !== undefined && b.e3 !== undefined;
    var e0123_12 = a.e013 !== undefined && b.e2 !== undefined;
    var e0123_13 = a.e023 !== undefined && b.e1 !== undefined;
    var e0123_14 = a.e123 !== undefined && b.e0 !== undefined;
    var e0123_15 = a.e0123 !== undefined && b.scalar !== undefined;
    if (e0123_0 || e0123_1 || e0123_2 || e0123_3 || e0123_4 || e0123_5 || e0123_6 || e0123_7 || e0123_8 || e0123_9 || e0123_10 || e0123_11 || e0123_12 || e0123_13 || e0123_14 || e0123_15) {
        resultE0123 = 0;
        if (e0123_0)
            resultE0123 += 1.0 * (a.scalar * b.e0123);
        if (e0123_1)
            resultE0123 += 1.0 * (a.e0 * b.e123);
        if (e0123_2)
            resultE0123 += -1.0 * (a.e1 * b.e023);
        if (e0123_3)
            resultE0123 += 1.0 * (a.e2 * b.e013);
        if (e0123_4)
            resultE0123 += -1.0 * (a.e3 * b.e012);
        if (e0123_5)
            resultE0123 += 1.0 * (a.e01 * b.e23);
        if (e0123_6)
            resultE0123 += -1.0 * (a.e02 * b.e13);
        if (e0123_7)
            resultE0123 += 1.0 * (a.e03 * b.e12);
        if (e0123_8)
            resultE0123 += 1.0 * (a.e12 * b.e03);
        if (e0123_9)
            resultE0123 += -1.0 * (a.e13 * b.e02);
        if (e0123_10)
            resultE0123 += 1.0 * (a.e23 * b.e01);
        if (e0123_11)
            resultE0123 += 1.0 * (a.e012 * b.e3);
        if (e0123_12)
            resultE0123 += -1.0 * (a.e013 * b.e2);
        if (e0123_13)
            resultE0123 += 1.0 * (a.e023 * b.e1);
        if (e0123_14)
            resultE0123 += -1.0 * (a.e123 * b.e0);
        if (e0123_15)
            resultE0123 += 1.0 * (a.e0123 * b.scalar);
    }
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e3: resultE3,
        e01: resultE01,
        e02: resultE02,
        e03: resultE03,
        e12: resultE12,
        e13: resultE13,
        e23: resultE23,
        e012: resultE012,
        e013: resultE013,
        e023: resultE023,
        e123: resultE123,
        e0123: resultE0123,
    };
    return result;
};
exports.innerProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e2 !== undefined && b.e2 !== undefined;
    var scalar_2 = a.e3 !== undefined && b.e3 !== undefined;
    var scalar_3 = a.e23 !== undefined && b.e23 !== undefined;
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += -1.0 * (a.e2 * b.e2);
        if (scalar_2)
            resultScalar += 1.0 * (a.e3 * b.e3);
        if (scalar_3)
            resultScalar += 1.0 * (a.e23 * b.e23);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    var e0_2 = a.e2 !== undefined && b.e02 !== undefined;
    var e0_3 = a.e3 !== undefined && b.e03 !== undefined;
    var e0_4 = a.e02 !== undefined && b.e2 !== undefined;
    var e0_5 = a.e03 !== undefined && b.e3 !== undefined;
    var e0_6 = a.e23 !== undefined && b.e023 !== undefined;
    var e0_7 = a.e023 !== undefined && b.e23 !== undefined;
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
        if (e0_2)
            resultE0 += 1.0 * (a.e2 * b.e02);
        if (e0_3)
            resultE0 += -1.0 * (a.e3 * b.e03);
        if (e0_4)
            resultE0 += -1.0 * (a.e02 * b.e2);
        if (e0_5)
            resultE0 += 1.0 * (a.e03 * b.e3);
        if (e0_6)
            resultE0 += 1.0 * (a.e23 * b.e023);
        if (e0_7)
            resultE0 += 1.0 * (a.e023 * b.e23);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e1 !== undefined && b.scalar !== undefined;
    var e1_2 = a.e2 !== undefined && b.e12 !== undefined;
    var e1_3 = a.e3 !== undefined && b.e13 !== undefined;
    var e1_4 = a.e12 !== undefined && b.e2 !== undefined;
    var e1_5 = a.e13 !== undefined && b.e3 !== undefined;
    var e1_6 = a.e23 !== undefined && b.e123 !== undefined;
    var e1_7 = a.e123 !== undefined && b.e23 !== undefined;
    if (e1_0 || e1_1 || e1_2 || e1_3 || e1_4 || e1_5 || e1_6 || e1_7) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e1 * b.scalar);
        if (e1_2)
            resultE1 += 1.0 * (a.e2 * b.e12);
        if (e1_3)
            resultE1 += -1.0 * (a.e3 * b.e13);
        if (e1_4)
            resultE1 += -1.0 * (a.e12 * b.e2);
        if (e1_5)
            resultE1 += 1.0 * (a.e13 * b.e3);
        if (e1_6)
            resultE1 += 1.0 * (a.e23 * b.e123);
        if (e1_7)
            resultE1 += 1.0 * (a.e123 * b.e23);
    }
    var resultE2 = undefined;
    var e2_0 = a.scalar !== undefined && b.e2 !== undefined;
    var e2_1 = a.e2 !== undefined && b.scalar !== undefined;
    var e2_2 = a.e3 !== undefined && b.e23 !== undefined;
    var e2_3 = a.e23 !== undefined && b.e3 !== undefined;
    if (e2_0 || e2_1 || e2_2 || e2_3) {
        resultE2 = 0;
        if (e2_0)
            resultE2 += 1.0 * (a.scalar * b.e2);
        if (e2_1)
            resultE2 += 1.0 * (a.e2 * b.scalar);
        if (e2_2)
            resultE2 += -1.0 * (a.e3 * b.e23);
        if (e2_3)
            resultE2 += 1.0 * (a.e23 * b.e3);
    }
    var resultE3 = undefined;
    var e3_0 = a.scalar !== undefined && b.e3 !== undefined;
    var e3_1 = a.e2 !== undefined && b.e23 !== undefined;
    var e3_2 = a.e3 !== undefined && b.scalar !== undefined;
    var e3_3 = a.e23 !== undefined && b.e2 !== undefined;
    if (e3_0 || e3_1 || e3_2 || e3_3) {
        resultE3 = 0;
        if (e3_0)
            resultE3 += 1.0 * (a.scalar * b.e3);
        if (e3_1)
            resultE3 += -1.0 * (a.e2 * b.e23);
        if (e3_2)
            resultE3 += 1.0 * (a.e3 * b.scalar);
        if (e3_3)
            resultE3 += 1.0 * (a.e23 * b.e2);
    }
    var resultE01 = undefined;
    var e01_0 = a.scalar !== undefined && b.e01 !== undefined;
    var e01_1 = a.e2 !== undefined && b.e012 !== undefined;
    var e01_2 = a.e3 !== undefined && b.e013 !== undefined;
    var e01_3 = a.e01 !== undefined && b.scalar !== undefined;
    var e01_4 = a.e23 !== undefined && b.e0123 !== undefined;
    var e01_5 = a.e012 !== undefined && b.e2 !== undefined;
    var e01_6 = a.e013 !== undefined && b.e3 !== undefined;
    var e01_7 = a.e0123 !== undefined && b.e23 !== undefined;
    if (e01_0 || e01_1 || e01_2 || e01_3 || e01_4 || e01_5 || e01_6 || e01_7) {
        resultE01 = 0;
        if (e01_0)
            resultE01 += 1.0 * (a.scalar * b.e01);
        if (e01_1)
            resultE01 += -1.0 * (a.e2 * b.e012);
        if (e01_2)
            resultE01 += 1.0 * (a.e3 * b.e013);
        if (e01_3)
            resultE01 += 1.0 * (a.e01 * b.scalar);
        if (e01_4)
            resultE01 += 1.0 * (a.e23 * b.e0123);
        if (e01_5)
            resultE01 += -1.0 * (a.e012 * b.e2);
        if (e01_6)
            resultE01 += 1.0 * (a.e013 * b.e3);
        if (e01_7)
            resultE01 += 1.0 * (a.e0123 * b.e23);
    }
    var resultE02 = undefined;
    var e02_0 = a.scalar !== undefined && b.e02 !== undefined;
    var e02_1 = a.e3 !== undefined && b.e023 !== undefined;
    var e02_2 = a.e02 !== undefined && b.scalar !== undefined;
    var e02_3 = a.e023 !== undefined && b.e3 !== undefined;
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        resultE02 = 0;
        if (e02_0)
            resultE02 += 1.0 * (a.scalar * b.e02);
        if (e02_1)
            resultE02 += 1.0 * (a.e3 * b.e023);
        if (e02_2)
            resultE02 += 1.0 * (a.e02 * b.scalar);
        if (e02_3)
            resultE02 += 1.0 * (a.e023 * b.e3);
    }
    var resultE03 = undefined;
    var e03_0 = a.scalar !== undefined && b.e03 !== undefined;
    var e03_1 = a.e2 !== undefined && b.e023 !== undefined;
    var e03_2 = a.e03 !== undefined && b.scalar !== undefined;
    var e03_3 = a.e023 !== undefined && b.e2 !== undefined;
    if (e03_0 || e03_1 || e03_2 || e03_3) {
        resultE03 = 0;
        if (e03_0)
            resultE03 += 1.0 * (a.scalar * b.e03);
        if (e03_1)
            resultE03 += 1.0 * (a.e2 * b.e023);
        if (e03_2)
            resultE03 += 1.0 * (a.e03 * b.scalar);
        if (e03_3)
            resultE03 += 1.0 * (a.e023 * b.e2);
    }
    var resultE12 = undefined;
    var e12_0 = a.scalar !== undefined && b.e12 !== undefined;
    var e12_1 = a.e3 !== undefined && b.e123 !== undefined;
    var e12_2 = a.e12 !== undefined && b.scalar !== undefined;
    var e12_3 = a.e123 !== undefined && b.e3 !== undefined;
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        resultE12 = 0;
        if (e12_0)
            resultE12 += 1.0 * (a.scalar * b.e12);
        if (e12_1)
            resultE12 += 1.0 * (a.e3 * b.e123);
        if (e12_2)
            resultE12 += 1.0 * (a.e12 * b.scalar);
        if (e12_3)
            resultE12 += 1.0 * (a.e123 * b.e3);
    }
    var resultE13 = undefined;
    var e13_0 = a.scalar !== undefined && b.e13 !== undefined;
    var e13_1 = a.e2 !== undefined && b.e123 !== undefined;
    var e13_2 = a.e13 !== undefined && b.scalar !== undefined;
    var e13_3 = a.e123 !== undefined && b.e2 !== undefined;
    if (e13_0 || e13_1 || e13_2 || e13_3) {
        resultE13 = 0;
        if (e13_0)
            resultE13 += 1.0 * (a.scalar * b.e13);
        if (e13_1)
            resultE13 += 1.0 * (a.e2 * b.e123);
        if (e13_2)
            resultE13 += 1.0 * (a.e13 * b.scalar);
        if (e13_3)
            resultE13 += 1.0 * (a.e123 * b.e2);
    }
    var resultE23 = undefined;
    var e23_0 = a.scalar !== undefined && b.e23 !== undefined;
    var e23_1 = a.e23 !== undefined && b.scalar !== undefined;
    if (e23_0 || e23_1) {
        resultE23 = 0;
        if (e23_0)
            resultE23 += 1.0 * (a.scalar * b.e23);
        if (e23_1)
            resultE23 += 1.0 * (a.e23 * b.scalar);
    }
    var resultE012 = undefined;
    var e012_0 = a.scalar !== undefined && b.e012 !== undefined;
    var e012_1 = a.e3 !== undefined && b.e0123 !== undefined;
    var e012_2 = a.e012 !== undefined && b.scalar !== undefined;
    var e012_3 = a.e0123 !== undefined && b.e3 !== undefined;
    if (e012_0 || e012_1 || e012_2 || e012_3) {
        resultE012 = 0;
        if (e012_0)
            resultE012 += 1.0 * (a.scalar * b.e012);
        if (e012_1)
            resultE012 += -1.0 * (a.e3 * b.e0123);
        if (e012_2)
            resultE012 += 1.0 * (a.e012 * b.scalar);
        if (e012_3)
            resultE012 += 1.0 * (a.e0123 * b.e3);
    }
    var resultE013 = undefined;
    var e013_0 = a.scalar !== undefined && b.e013 !== undefined;
    var e013_1 = a.e2 !== undefined && b.e0123 !== undefined;
    var e013_2 = a.e013 !== undefined && b.scalar !== undefined;
    var e013_3 = a.e0123 !== undefined && b.e2 !== undefined;
    if (e013_0 || e013_1 || e013_2 || e013_3) {
        resultE013 = 0;
        if (e013_0)
            resultE013 += 1.0 * (a.scalar * b.e013);
        if (e013_1)
            resultE013 += -1.0 * (a.e2 * b.e0123);
        if (e013_2)
            resultE013 += 1.0 * (a.e013 * b.scalar);
        if (e013_3)
            resultE013 += 1.0 * (a.e0123 * b.e2);
    }
    var resultE023 = undefined;
    var e023_0 = a.scalar !== undefined && b.e023 !== undefined;
    var e023_1 = a.e023 !== undefined && b.scalar !== undefined;
    if (e023_0 || e023_1) {
        resultE023 = 0;
        if (e023_0)
            resultE023 += 1.0 * (a.scalar * b.e023);
        if (e023_1)
            resultE023 += 1.0 * (a.e023 * b.scalar);
    }
    var resultE123 = undefined;
    var e123_0 = a.scalar !== undefined && b.e123 !== undefined;
    var e123_1 = a.e123 !== undefined && b.scalar !== undefined;
    if (e123_0 || e123_1) {
        resultE123 = 0;
        if (e123_0)
            resultE123 += 1.0 * (a.scalar * b.e123);
        if (e123_1)
            resultE123 += 1.0 * (a.e123 * b.scalar);
    }
    var resultE0123 = undefined;
    var e0123_0 = a.scalar !== undefined && b.e0123 !== undefined;
    var e0123_1 = a.e0123 !== undefined && b.scalar !== undefined;
    if (e0123_0 || e0123_1) {
        resultE0123 = 0;
        if (e0123_0)
            resultE0123 += 1.0 * (a.scalar * b.e0123);
        if (e0123_1)
            resultE0123 += 1.0 * (a.e0123 * b.scalar);
    }
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e3: resultE3,
        e01: resultE01,
        e02: resultE02,
        e03: resultE03,
        e12: resultE12,
        e13: resultE13,
        e23: resultE23,
        e012: resultE012,
        e013: resultE013,
        e023: resultE023,
        e123: resultE123,
        e0123: resultE0123,
    };
    return result;
};
exports.exteriorProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    if (scalar_0) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    if (e0_0 || e0_1) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e1 !== undefined && b.scalar !== undefined;
    if (e1_0 || e1_1) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e1 * b.scalar);
    }
    var resultE2 = undefined;
    var e2_0 = a.scalar !== undefined && b.e2 !== undefined;
    var e2_1 = a.e2 !== undefined && b.scalar !== undefined;
    if (e2_0 || e2_1) {
        resultE2 = 0;
        if (e2_0)
            resultE2 += 1.0 * (a.scalar * b.e2);
        if (e2_1)
            resultE2 += 1.0 * (a.e2 * b.scalar);
    }
    var resultE3 = undefined;
    var e3_0 = a.scalar !== undefined && b.e3 !== undefined;
    var e3_1 = a.e3 !== undefined && b.scalar !== undefined;
    if (e3_0 || e3_1) {
        resultE3 = 0;
        if (e3_0)
            resultE3 += 1.0 * (a.scalar * b.e3);
        if (e3_1)
            resultE3 += 1.0 * (a.e3 * b.scalar);
    }
    var resultE01 = undefined;
    var e01_0 = a.scalar !== undefined && b.e01 !== undefined;
    var e01_1 = a.e0 !== undefined && b.e1 !== undefined;
    var e01_2 = a.e1 !== undefined && b.e0 !== undefined;
    var e01_3 = a.e01 !== undefined && b.scalar !== undefined;
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        resultE01 = 0;
        if (e01_0)
            resultE01 += 1.0 * (a.scalar * b.e01);
        if (e01_1)
            resultE01 += 1.0 * (a.e0 * b.e1);
        if (e01_2)
            resultE01 += -1.0 * (a.e1 * b.e0);
        if (e01_3)
            resultE01 += 1.0 * (a.e01 * b.scalar);
    }
    var resultE02 = undefined;
    var e02_0 = a.scalar !== undefined && b.e02 !== undefined;
    var e02_1 = a.e0 !== undefined && b.e2 !== undefined;
    var e02_2 = a.e2 !== undefined && b.e0 !== undefined;
    var e02_3 = a.e02 !== undefined && b.scalar !== undefined;
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        resultE02 = 0;
        if (e02_0)
            resultE02 += 1.0 * (a.scalar * b.e02);
        if (e02_1)
            resultE02 += 1.0 * (a.e0 * b.e2);
        if (e02_2)
            resultE02 += -1.0 * (a.e2 * b.e0);
        if (e02_3)
            resultE02 += 1.0 * (a.e02 * b.scalar);
    }
    var resultE03 = undefined;
    var e03_0 = a.scalar !== undefined && b.e03 !== undefined;
    var e03_1 = a.e0 !== undefined && b.e3 !== undefined;
    var e03_2 = a.e3 !== undefined && b.e0 !== undefined;
    var e03_3 = a.e03 !== undefined && b.scalar !== undefined;
    if (e03_0 || e03_1 || e03_2 || e03_3) {
        resultE03 = 0;
        if (e03_0)
            resultE03 += 1.0 * (a.scalar * b.e03);
        if (e03_1)
            resultE03 += 1.0 * (a.e0 * b.e3);
        if (e03_2)
            resultE03 += -1.0 * (a.e3 * b.e0);
        if (e03_3)
            resultE03 += 1.0 * (a.e03 * b.scalar);
    }
    var resultE12 = undefined;
    var e12_0 = a.scalar !== undefined && b.e12 !== undefined;
    var e12_1 = a.e1 !== undefined && b.e2 !== undefined;
    var e12_2 = a.e2 !== undefined && b.e1 !== undefined;
    var e12_3 = a.e12 !== undefined && b.scalar !== undefined;
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        resultE12 = 0;
        if (e12_0)
            resultE12 += 1.0 * (a.scalar * b.e12);
        if (e12_1)
            resultE12 += 1.0 * (a.e1 * b.e2);
        if (e12_2)
            resultE12 += -1.0 * (a.e2 * b.e1);
        if (e12_3)
            resultE12 += 1.0 * (a.e12 * b.scalar);
    }
    var resultE13 = undefined;
    var e13_0 = a.scalar !== undefined && b.e13 !== undefined;
    var e13_1 = a.e1 !== undefined && b.e3 !== undefined;
    var e13_2 = a.e3 !== undefined && b.e1 !== undefined;
    var e13_3 = a.e13 !== undefined && b.scalar !== undefined;
    if (e13_0 || e13_1 || e13_2 || e13_3) {
        resultE13 = 0;
        if (e13_0)
            resultE13 += 1.0 * (a.scalar * b.e13);
        if (e13_1)
            resultE13 += 1.0 * (a.e1 * b.e3);
        if (e13_2)
            resultE13 += -1.0 * (a.e3 * b.e1);
        if (e13_3)
            resultE13 += 1.0 * (a.e13 * b.scalar);
    }
    var resultE23 = undefined;
    var e23_0 = a.scalar !== undefined && b.e23 !== undefined;
    var e23_1 = a.e2 !== undefined && b.e3 !== undefined;
    var e23_2 = a.e3 !== undefined && b.e2 !== undefined;
    var e23_3 = a.e23 !== undefined && b.scalar !== undefined;
    if (e23_0 || e23_1 || e23_2 || e23_3) {
        resultE23 = 0;
        if (e23_0)
            resultE23 += 1.0 * (a.scalar * b.e23);
        if (e23_1)
            resultE23 += 1.0 * (a.e2 * b.e3);
        if (e23_2)
            resultE23 += -1.0 * (a.e3 * b.e2);
        if (e23_3)
            resultE23 += 1.0 * (a.e23 * b.scalar);
    }
    var resultE012 = undefined;
    var e012_0 = a.scalar !== undefined && b.e012 !== undefined;
    var e012_1 = a.e0 !== undefined && b.e12 !== undefined;
    var e012_2 = a.e1 !== undefined && b.e02 !== undefined;
    var e012_3 = a.e2 !== undefined && b.e01 !== undefined;
    var e012_4 = a.e01 !== undefined && b.e2 !== undefined;
    var e012_5 = a.e02 !== undefined && b.e1 !== undefined;
    var e012_6 = a.e12 !== undefined && b.e0 !== undefined;
    var e012_7 = a.e012 !== undefined && b.scalar !== undefined;
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7) {
        resultE012 = 0;
        if (e012_0)
            resultE012 += 1.0 * (a.scalar * b.e012);
        if (e012_1)
            resultE012 += 1.0 * (a.e0 * b.e12);
        if (e012_2)
            resultE012 += -1.0 * (a.e1 * b.e02);
        if (e012_3)
            resultE012 += 1.0 * (a.e2 * b.e01);
        if (e012_4)
            resultE012 += 1.0 * (a.e01 * b.e2);
        if (e012_5)
            resultE012 += -1.0 * (a.e02 * b.e1);
        if (e012_6)
            resultE012 += 1.0 * (a.e12 * b.e0);
        if (e012_7)
            resultE012 += 1.0 * (a.e012 * b.scalar);
    }
    var resultE013 = undefined;
    var e013_0 = a.scalar !== undefined && b.e013 !== undefined;
    var e013_1 = a.e0 !== undefined && b.e13 !== undefined;
    var e013_2 = a.e1 !== undefined && b.e03 !== undefined;
    var e013_3 = a.e3 !== undefined && b.e01 !== undefined;
    var e013_4 = a.e01 !== undefined && b.e3 !== undefined;
    var e013_5 = a.e03 !== undefined && b.e1 !== undefined;
    var e013_6 = a.e13 !== undefined && b.e0 !== undefined;
    var e013_7 = a.e013 !== undefined && b.scalar !== undefined;
    if (e013_0 || e013_1 || e013_2 || e013_3 || e013_4 || e013_5 || e013_6 || e013_7) {
        resultE013 = 0;
        if (e013_0)
            resultE013 += 1.0 * (a.scalar * b.e013);
        if (e013_1)
            resultE013 += 1.0 * (a.e0 * b.e13);
        if (e013_2)
            resultE013 += -1.0 * (a.e1 * b.e03);
        if (e013_3)
            resultE013 += 1.0 * (a.e3 * b.e01);
        if (e013_4)
            resultE013 += 1.0 * (a.e01 * b.e3);
        if (e013_5)
            resultE013 += -1.0 * (a.e03 * b.e1);
        if (e013_6)
            resultE013 += 1.0 * (a.e13 * b.e0);
        if (e013_7)
            resultE013 += 1.0 * (a.e013 * b.scalar);
    }
    var resultE023 = undefined;
    var e023_0 = a.scalar !== undefined && b.e023 !== undefined;
    var e023_1 = a.e0 !== undefined && b.e23 !== undefined;
    var e023_2 = a.e2 !== undefined && b.e03 !== undefined;
    var e023_3 = a.e3 !== undefined && b.e02 !== undefined;
    var e023_4 = a.e02 !== undefined && b.e3 !== undefined;
    var e023_5 = a.e03 !== undefined && b.e2 !== undefined;
    var e023_6 = a.e23 !== undefined && b.e0 !== undefined;
    var e023_7 = a.e023 !== undefined && b.scalar !== undefined;
    if (e023_0 || e023_1 || e023_2 || e023_3 || e023_4 || e023_5 || e023_6 || e023_7) {
        resultE023 = 0;
        if (e023_0)
            resultE023 += 1.0 * (a.scalar * b.e023);
        if (e023_1)
            resultE023 += 1.0 * (a.e0 * b.e23);
        if (e023_2)
            resultE023 += -1.0 * (a.e2 * b.e03);
        if (e023_3)
            resultE023 += 1.0 * (a.e3 * b.e02);
        if (e023_4)
            resultE023 += 1.0 * (a.e02 * b.e3);
        if (e023_5)
            resultE023 += -1.0 * (a.e03 * b.e2);
        if (e023_6)
            resultE023 += 1.0 * (a.e23 * b.e0);
        if (e023_7)
            resultE023 += 1.0 * (a.e023 * b.scalar);
    }
    var resultE123 = undefined;
    var e123_0 = a.scalar !== undefined && b.e123 !== undefined;
    var e123_1 = a.e1 !== undefined && b.e23 !== undefined;
    var e123_2 = a.e2 !== undefined && b.e13 !== undefined;
    var e123_3 = a.e3 !== undefined && b.e12 !== undefined;
    var e123_4 = a.e12 !== undefined && b.e3 !== undefined;
    var e123_5 = a.e13 !== undefined && b.e2 !== undefined;
    var e123_6 = a.e23 !== undefined && b.e1 !== undefined;
    var e123_7 = a.e123 !== undefined && b.scalar !== undefined;
    if (e123_0 || e123_1 || e123_2 || e123_3 || e123_4 || e123_5 || e123_6 || e123_7) {
        resultE123 = 0;
        if (e123_0)
            resultE123 += 1.0 * (a.scalar * b.e123);
        if (e123_1)
            resultE123 += 1.0 * (a.e1 * b.e23);
        if (e123_2)
            resultE123 += -1.0 * (a.e2 * b.e13);
        if (e123_3)
            resultE123 += 1.0 * (a.e3 * b.e12);
        if (e123_4)
            resultE123 += 1.0 * (a.e12 * b.e3);
        if (e123_5)
            resultE123 += -1.0 * (a.e13 * b.e2);
        if (e123_6)
            resultE123 += 1.0 * (a.e23 * b.e1);
        if (e123_7)
            resultE123 += 1.0 * (a.e123 * b.scalar);
    }
    var resultE0123 = undefined;
    var e0123_0 = a.scalar !== undefined && b.e0123 !== undefined;
    var e0123_1 = a.e0 !== undefined && b.e123 !== undefined;
    var e0123_2 = a.e1 !== undefined && b.e023 !== undefined;
    var e0123_3 = a.e2 !== undefined && b.e013 !== undefined;
    var e0123_4 = a.e3 !== undefined && b.e012 !== undefined;
    var e0123_5 = a.e01 !== undefined && b.e23 !== undefined;
    var e0123_6 = a.e02 !== undefined && b.e13 !== undefined;
    var e0123_7 = a.e03 !== undefined && b.e12 !== undefined;
    var e0123_8 = a.e12 !== undefined && b.e03 !== undefined;
    var e0123_9 = a.e13 !== undefined && b.e02 !== undefined;
    var e0123_10 = a.e23 !== undefined && b.e01 !== undefined;
    var e0123_11 = a.e012 !== undefined && b.e3 !== undefined;
    var e0123_12 = a.e013 !== undefined && b.e2 !== undefined;
    var e0123_13 = a.e023 !== undefined && b.e1 !== undefined;
    var e0123_14 = a.e123 !== undefined && b.e0 !== undefined;
    var e0123_15 = a.e0123 !== undefined && b.scalar !== undefined;
    if (e0123_0 || e0123_1 || e0123_2 || e0123_3 || e0123_4 || e0123_5 || e0123_6 || e0123_7 || e0123_8 || e0123_9 || e0123_10 || e0123_11 || e0123_12 || e0123_13 || e0123_14 || e0123_15) {
        resultE0123 = 0;
        if (e0123_0)
            resultE0123 += 1.0 * (a.scalar * b.e0123);
        if (e0123_1)
            resultE0123 += 1.0 * (a.e0 * b.e123);
        if (e0123_2)
            resultE0123 += -1.0 * (a.e1 * b.e023);
        if (e0123_3)
            resultE0123 += 1.0 * (a.e2 * b.e013);
        if (e0123_4)
            resultE0123 += -1.0 * (a.e3 * b.e012);
        if (e0123_5)
            resultE0123 += 1.0 * (a.e01 * b.e23);
        if (e0123_6)
            resultE0123 += -1.0 * (a.e02 * b.e13);
        if (e0123_7)
            resultE0123 += 1.0 * (a.e03 * b.e12);
        if (e0123_8)
            resultE0123 += 1.0 * (a.e12 * b.e03);
        if (e0123_9)
            resultE0123 += -1.0 * (a.e13 * b.e02);
        if (e0123_10)
            resultE0123 += 1.0 * (a.e23 * b.e01);
        if (e0123_11)
            resultE0123 += 1.0 * (a.e012 * b.e3);
        if (e0123_12)
            resultE0123 += -1.0 * (a.e013 * b.e2);
        if (e0123_13)
            resultE0123 += 1.0 * (a.e023 * b.e1);
        if (e0123_14)
            resultE0123 += -1.0 * (a.e123 * b.e0);
        if (e0123_15)
            resultE0123 += 1.0 * (a.e0123 * b.scalar);
    }
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e3: resultE3,
        e01: resultE01,
        e02: resultE02,
        e03: resultE03,
        e12: resultE12,
        e13: resultE13,
        e23: resultE23,
        e012: resultE012,
        e013: resultE013,
        e023: resultE023,
        e123: resultE123,
        e0123: resultE0123,
    };
    return result;
};
exports.multiply = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
        e0: a.e0 !== undefined ? a.e0 * b : undefined,
        e1: a.e1 !== undefined ? a.e1 * b : undefined,
        e2: a.e2 !== undefined ? a.e2 * b : undefined,
        e3: a.e3 !== undefined ? a.e3 * b : undefined,
        e01: a.e01 !== undefined ? a.e01 * b : undefined,
        e02: a.e02 !== undefined ? a.e02 * b : undefined,
        e03: a.e03 !== undefined ? a.e03 * b : undefined,
        e12: a.e12 !== undefined ? a.e12 * b : undefined,
        e13: a.e13 !== undefined ? a.e13 * b : undefined,
        e23: a.e23 !== undefined ? a.e23 * b : undefined,
        e012: a.e012 !== undefined ? a.e012 * b : undefined,
        e013: a.e013 !== undefined ? a.e013 * b : undefined,
        e023: a.e023 !== undefined ? a.e023 * b : undefined,
        e123: a.e123 !== undefined ? a.e123 * b : undefined,
        e0123: a.e0123 !== undefined ? a.e0123 * b : undefined,
    };
    return result;
};
exports.div = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
        e0: a.e0 !== undefined ? a.e0 / b : undefined,
        e1: a.e1 !== undefined ? a.e1 / b : undefined,
        e2: a.e2 !== undefined ? a.e2 / b : undefined,
        e3: a.e3 !== undefined ? a.e3 / b : undefined,
        e01: a.e01 !== undefined ? a.e01 / b : undefined,
        e02: a.e02 !== undefined ? a.e02 / b : undefined,
        e03: a.e03 !== undefined ? a.e03 / b : undefined,
        e12: a.e12 !== undefined ? a.e12 / b : undefined,
        e13: a.e13 !== undefined ? a.e13 / b : undefined,
        e23: a.e23 !== undefined ? a.e23 / b : undefined,
        e012: a.e012 !== undefined ? a.e012 / b : undefined,
        e013: a.e013 !== undefined ? a.e013 / b : undefined,
        e023: a.e023 !== undefined ? a.e023 / b : undefined,
        e123: a.e123 !== undefined ? a.e123 / b : undefined,
        e0123: a.e0123 !== undefined ? a.e0123 / b : undefined,
    };
    return result;
};
exports.reversion = function (a) {
    var result = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
        e1: a.e1 && a.e1,
        e2: a.e2 && a.e2,
        e3: a.e3 && a.e3,
        e01: a.e01 && -a.e01,
        e02: a.e02 && -a.e02,
        e03: a.e03 && -a.e03,
        e12: a.e12 && -a.e12,
        e13: a.e13 && -a.e13,
        e23: a.e23 && -a.e23,
        e012: a.e012 && -a.e012,
        e013: a.e013 && -a.e013,
        e023: a.e023 && -a.e023,
        e123: a.e123 && -a.e123,
        e0123: a.e0123 && a.e0123,
    };
    return result;
};
exports.repr = function (a, digits) {
    if (digits === void 0) { digits = 3; }
    var result = "";
    if (a.scalar !== undefined) {
        if (result === "") {
            result += a.scalar.toFixed(digits) + "";
        }
        else {
            result += a.scalar >= 0 ? " + " + a.scalar.toFixed(digits) + "" : " - " + Math.abs(a.scalar).toFixed(digits) + "";
        }
    }
    if (a.e0 !== undefined) {
        if (result === "") {
            result += a.e0.toFixed(digits) + "e0";
        }
        else {
            result += a.e0 >= 0 ? " + " + a.e0.toFixed(digits) + "e0" : " - " + Math.abs(a.e0).toFixed(digits) + "e0";
        }
    }
    if (a.e1 !== undefined) {
        if (result === "") {
            result += a.e1.toFixed(digits) + "e1";
        }
        else {
            result += a.e1 >= 0 ? " + " + a.e1.toFixed(digits) + "e1" : " - " + Math.abs(a.e1).toFixed(digits) + "e1";
        }
    }
    if (a.e2 !== undefined) {
        if (result === "") {
            result += a.e2.toFixed(digits) + "e2";
        }
        else {
            result += a.e2 >= 0 ? " + " + a.e2.toFixed(digits) + "e2" : " - " + Math.abs(a.e2).toFixed(digits) + "e2";
        }
    }
    if (a.e3 !== undefined) {
        if (result === "") {
            result += a.e3.toFixed(digits) + "e3";
        }
        else {
            result += a.e3 >= 0 ? " + " + a.e3.toFixed(digits) + "e3" : " - " + Math.abs(a.e3).toFixed(digits) + "e3";
        }
    }
    if (a.e01 !== undefined) {
        if (result === "") {
            result += a.e01.toFixed(digits) + "e01";
        }
        else {
            result += a.e01 >= 0 ? " + " + a.e01.toFixed(digits) + "e01" : " - " + Math.abs(a.e01).toFixed(digits) + "e01";
        }
    }
    if (a.e02 !== undefined) {
        if (result === "") {
            result += a.e02.toFixed(digits) + "e02";
        }
        else {
            result += a.e02 >= 0 ? " + " + a.e02.toFixed(digits) + "e02" : " - " + Math.abs(a.e02).toFixed(digits) + "e02";
        }
    }
    if (a.e03 !== undefined) {
        if (result === "") {
            result += a.e03.toFixed(digits) + "e03";
        }
        else {
            result += a.e03 >= 0 ? " + " + a.e03.toFixed(digits) + "e03" : " - " + Math.abs(a.e03).toFixed(digits) + "e03";
        }
    }
    if (a.e12 !== undefined) {
        if (result === "") {
            result += a.e12.toFixed(digits) + "e12";
        }
        else {
            result += a.e12 >= 0 ? " + " + a.e12.toFixed(digits) + "e12" : " - " + Math.abs(a.e12).toFixed(digits) + "e12";
        }
    }
    if (a.e13 !== undefined) {
        if (result === "") {
            result += a.e13.toFixed(digits) + "e13";
        }
        else {
            result += a.e13 >= 0 ? " + " + a.e13.toFixed(digits) + "e13" : " - " + Math.abs(a.e13).toFixed(digits) + "e13";
        }
    }
    if (a.e23 !== undefined) {
        if (result === "") {
            result += a.e23.toFixed(digits) + "e23";
        }
        else {
            result += a.e23 >= 0 ? " + " + a.e23.toFixed(digits) + "e23" : " - " + Math.abs(a.e23).toFixed(digits) + "e23";
        }
    }
    if (a.e012 !== undefined) {
        if (result === "") {
            result += a.e012.toFixed(digits) + "e012";
        }
        else {
            result += a.e012 >= 0 ? " + " + a.e012.toFixed(digits) + "e012" : " - " + Math.abs(a.e012).toFixed(digits) + "e012";
        }
    }
    if (a.e013 !== undefined) {
        if (result === "") {
            result += a.e013.toFixed(digits) + "e013";
        }
        else {
            result += a.e013 >= 0 ? " + " + a.e013.toFixed(digits) + "e013" : " - " + Math.abs(a.e013).toFixed(digits) + "e013";
        }
    }
    if (a.e023 !== undefined) {
        if (result === "") {
            result += a.e023.toFixed(digits) + "e023";
        }
        else {
            result += a.e023 >= 0 ? " + " + a.e023.toFixed(digits) + "e023" : " - " + Math.abs(a.e023).toFixed(digits) + "e023";
        }
    }
    if (a.e123 !== undefined) {
        if (result === "") {
            result += a.e123.toFixed(digits) + "e123";
        }
        else {
            result += a.e123 >= 0 ? " + " + a.e123.toFixed(digits) + "e123" : " - " + Math.abs(a.e123).toFixed(digits) + "e123";
        }
    }
    if (a.e0123 !== undefined) {
        if (result === "") {
            result += a.e0123.toFixed(digits) + "e0123";
        }
        else {
            result += a.e0123 >= 0 ? " + " + a.e0123.toFixed(digits) + "e0123" : " - " + Math.abs(a.e0123).toFixed(digits) + "e0123";
        }
    }
    return result;
};
exports.regressiveProduct = function (a, b) {
    return exports.dual(exports.exteriorProduct(exports.dual(a), exports.dual(b)));
};
exports.sandwichProduct = function (a, b) {
    return exports.geometricProduct(b, exports.geometricProduct(a, exports.reversion(b)));
};
exports.commutatorProduct = function (a, b) {
    return exports.multiply(exports.sub(exports.geometricProduct(a, b), exports.geometricProduct(b, a)), 0.5);
};
exports.exponential = function (a) {
    var gp = exports.geometricProduct(a, a);
    if (gp.scalar === undefined) {
        throw new Error("Input to exponential needs to square to scalar");
    }
    var s = gp.scalar;
    if (s < -0.1) {
        var rootS = Math.sign(s) * Math.sqrt(Math.abs(s));
        return exports.add({ scalar: Math.cos(rootS) }, exports.multiply(a, Math.sin(rootS) / rootS));
    }
    else if (s > 0.1) {
        var rootS = Math.sign(s) * Math.sqrt(Math.abs(s));
        return exports.add({ scalar: Math.cosh(rootS) }, exports.multiply(a, Math.sinh(rootS) / rootS));
    }
    else {
        return exports.add({ scalar: 1 }, a);
    }
};
