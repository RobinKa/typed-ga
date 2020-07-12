"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) + (b.e1 || 0) : undefined,
        e2: (a.e2 !== undefined || b.e2 !== undefined) ? (a.e2 || 0) + (b.e2 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) + (b.e01 || 0) : undefined,
        e02: (a.e02 !== undefined || b.e02 !== undefined) ? (a.e02 || 0) + (b.e02 || 0) : undefined,
        e12: (a.e12 !== undefined || b.e12 !== undefined) ? (a.e12 || 0) + (b.e12 || 0) : undefined,
        e012: (a.e012 !== undefined || b.e012 !== undefined) ? (a.e012 || 0) + (b.e012 || 0) : undefined,
    };
    return result;
};
exports.sub = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) - (b.e1 || 0) : undefined,
        e2: (a.e2 !== undefined || b.e2 !== undefined) ? (a.e2 || 0) - (b.e2 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) - (b.e01 || 0) : undefined,
        e02: (a.e02 !== undefined || b.e02 !== undefined) ? (a.e02 || 0) - (b.e02 || 0) : undefined,
        e12: (a.e12 !== undefined || b.e12 !== undefined) ? (a.e12 || 0) - (b.e12 || 0) : undefined,
        e012: (a.e012 !== undefined || b.e012 !== undefined) ? (a.e012 || 0) - (b.e012 || 0) : undefined,
    };
    return result;
};
exports.dual = function (a) {
    var result = {
        scalar: a.e012 !== undefined ? 1.0 * a.e012 : undefined,
        e0: a.e12 !== undefined ? 1.0 * a.e12 : undefined,
        e1: a.e02 !== undefined ? -1.0 * a.e02 : undefined,
        e2: a.e01 !== undefined ? 1.0 * a.e01 : undefined,
        e01: a.e2 !== undefined ? 1.0 * a.e2 : undefined,
        e02: a.e1 !== undefined ? -1.0 * a.e1 : undefined,
        e12: a.e0 !== undefined ? 1.0 * a.e0 : undefined,
        e012: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    };
    return result;
};
exports.geometricProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e1 !== undefined && b.e1 !== undefined;
    var scalar_2 = a.e2 !== undefined && b.e2 !== undefined;
    var scalar_3 = a.e12 !== undefined && b.e12 !== undefined;
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += -1.0 * (a.e1 * b.e1);
        if (scalar_2)
            resultScalar += -1.0 * (a.e2 * b.e2);
        if (scalar_3)
            resultScalar += -1.0 * (a.e12 * b.e12);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    var e0_2 = a.e1 !== undefined && b.e01 !== undefined;
    var e0_3 = a.e2 !== undefined && b.e02 !== undefined;
    var e0_4 = a.e01 !== undefined && b.e1 !== undefined;
    var e0_5 = a.e02 !== undefined && b.e2 !== undefined;
    var e0_6 = a.e12 !== undefined && b.e012 !== undefined;
    var e0_7 = a.e012 !== undefined && b.e12 !== undefined;
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
        if (e0_2)
            resultE0 += 1.0 * (a.e1 * b.e01);
        if (e0_3)
            resultE0 += 1.0 * (a.e2 * b.e02);
        if (e0_4)
            resultE0 += -1.0 * (a.e01 * b.e1);
        if (e0_5)
            resultE0 += -1.0 * (a.e02 * b.e2);
        if (e0_6)
            resultE0 += -1.0 * (a.e12 * b.e012);
        if (e0_7)
            resultE0 += -1.0 * (a.e012 * b.e12);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e1 !== undefined && b.scalar !== undefined;
    var e1_2 = a.e2 !== undefined && b.e12 !== undefined;
    var e1_3 = a.e12 !== undefined && b.e2 !== undefined;
    if (e1_0 || e1_1 || e1_2 || e1_3) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e1 * b.scalar);
        if (e1_2)
            resultE1 += 1.0 * (a.e2 * b.e12);
        if (e1_3)
            resultE1 += -1.0 * (a.e12 * b.e2);
    }
    var resultE2 = undefined;
    var e2_0 = a.scalar !== undefined && b.e2 !== undefined;
    var e2_1 = a.e1 !== undefined && b.e12 !== undefined;
    var e2_2 = a.e2 !== undefined && b.scalar !== undefined;
    var e2_3 = a.e12 !== undefined && b.e1 !== undefined;
    if (e2_0 || e2_1 || e2_2 || e2_3) {
        resultE2 = 0;
        if (e2_0)
            resultE2 += 1.0 * (a.scalar * b.e2);
        if (e2_1)
            resultE2 += -1.0 * (a.e1 * b.e12);
        if (e2_2)
            resultE2 += 1.0 * (a.e2 * b.scalar);
        if (e2_3)
            resultE2 += 1.0 * (a.e12 * b.e1);
    }
    var resultE01 = undefined;
    var e01_0 = a.scalar !== undefined && b.e01 !== undefined;
    var e01_1 = a.e0 !== undefined && b.e1 !== undefined;
    var e01_2 = a.e1 !== undefined && b.e0 !== undefined;
    var e01_3 = a.e2 !== undefined && b.e012 !== undefined;
    var e01_4 = a.e01 !== undefined && b.scalar !== undefined;
    var e01_5 = a.e02 !== undefined && b.e12 !== undefined;
    var e01_6 = a.e12 !== undefined && b.e02 !== undefined;
    var e01_7 = a.e012 !== undefined && b.e2 !== undefined;
    if (e01_0 || e01_1 || e01_2 || e01_3 || e01_4 || e01_5 || e01_6 || e01_7) {
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
            resultE01 += 1.0 * (a.e01 * b.scalar);
        if (e01_5)
            resultE01 += 1.0 * (a.e02 * b.e12);
        if (e01_6)
            resultE01 += -1.0 * (a.e12 * b.e02);
        if (e01_7)
            resultE01 += -1.0 * (a.e012 * b.e2);
    }
    var resultE02 = undefined;
    var e02_0 = a.scalar !== undefined && b.e02 !== undefined;
    var e02_1 = a.e0 !== undefined && b.e2 !== undefined;
    var e02_2 = a.e1 !== undefined && b.e012 !== undefined;
    var e02_3 = a.e2 !== undefined && b.e0 !== undefined;
    var e02_4 = a.e01 !== undefined && b.e12 !== undefined;
    var e02_5 = a.e02 !== undefined && b.scalar !== undefined;
    var e02_6 = a.e12 !== undefined && b.e01 !== undefined;
    var e02_7 = a.e012 !== undefined && b.e1 !== undefined;
    if (e02_0 || e02_1 || e02_2 || e02_3 || e02_4 || e02_5 || e02_6 || e02_7) {
        resultE02 = 0;
        if (e02_0)
            resultE02 += 1.0 * (a.scalar * b.e02);
        if (e02_1)
            resultE02 += 1.0 * (a.e0 * b.e2);
        if (e02_2)
            resultE02 += 1.0 * (a.e1 * b.e012);
        if (e02_3)
            resultE02 += -1.0 * (a.e2 * b.e0);
        if (e02_4)
            resultE02 += -1.0 * (a.e01 * b.e12);
        if (e02_5)
            resultE02 += 1.0 * (a.e02 * b.scalar);
        if (e02_6)
            resultE02 += 1.0 * (a.e12 * b.e01);
        if (e02_7)
            resultE02 += 1.0 * (a.e012 * b.e1);
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    };
    return result;
};
exports.innerProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e1 !== undefined && b.e1 !== undefined;
    var scalar_2 = a.e2 !== undefined && b.e2 !== undefined;
    var scalar_3 = a.e12 !== undefined && b.e12 !== undefined;
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += -1.0 * (a.e1 * b.e1);
        if (scalar_2)
            resultScalar += -1.0 * (a.e2 * b.e2);
        if (scalar_3)
            resultScalar += -1.0 * (a.e12 * b.e12);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    var e0_2 = a.e1 !== undefined && b.e01 !== undefined;
    var e0_3 = a.e2 !== undefined && b.e02 !== undefined;
    var e0_4 = a.e01 !== undefined && b.e1 !== undefined;
    var e0_5 = a.e02 !== undefined && b.e2 !== undefined;
    var e0_6 = a.e12 !== undefined && b.e012 !== undefined;
    var e0_7 = a.e012 !== undefined && b.e12 !== undefined;
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
        if (e0_2)
            resultE0 += 1.0 * (a.e1 * b.e01);
        if (e0_3)
            resultE0 += 1.0 * (a.e2 * b.e02);
        if (e0_4)
            resultE0 += -1.0 * (a.e01 * b.e1);
        if (e0_5)
            resultE0 += -1.0 * (a.e02 * b.e2);
        if (e0_6)
            resultE0 += -1.0 * (a.e12 * b.e012);
        if (e0_7)
            resultE0 += -1.0 * (a.e012 * b.e12);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e1 !== undefined && b.scalar !== undefined;
    var e1_2 = a.e2 !== undefined && b.e12 !== undefined;
    var e1_3 = a.e12 !== undefined && b.e2 !== undefined;
    if (e1_0 || e1_1 || e1_2 || e1_3) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e1 * b.scalar);
        if (e1_2)
            resultE1 += 1.0 * (a.e2 * b.e12);
        if (e1_3)
            resultE1 += -1.0 * (a.e12 * b.e2);
    }
    var resultE2 = undefined;
    var e2_0 = a.scalar !== undefined && b.e2 !== undefined;
    var e2_1 = a.e1 !== undefined && b.e12 !== undefined;
    var e2_2 = a.e2 !== undefined && b.scalar !== undefined;
    var e2_3 = a.e12 !== undefined && b.e1 !== undefined;
    if (e2_0 || e2_1 || e2_2 || e2_3) {
        resultE2 = 0;
        if (e2_0)
            resultE2 += 1.0 * (a.scalar * b.e2);
        if (e2_1)
            resultE2 += -1.0 * (a.e1 * b.e12);
        if (e2_2)
            resultE2 += 1.0 * (a.e2 * b.scalar);
        if (e2_3)
            resultE2 += 1.0 * (a.e12 * b.e1);
    }
    var resultE01 = undefined;
    var e01_0 = a.scalar !== undefined && b.e01 !== undefined;
    var e01_1 = a.e2 !== undefined && b.e012 !== undefined;
    var e01_2 = a.e01 !== undefined && b.scalar !== undefined;
    var e01_3 = a.e012 !== undefined && b.e2 !== undefined;
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        resultE01 = 0;
        if (e01_0)
            resultE01 += 1.0 * (a.scalar * b.e01);
        if (e01_1)
            resultE01 += -1.0 * (a.e2 * b.e012);
        if (e01_2)
            resultE01 += 1.0 * (a.e01 * b.scalar);
        if (e01_3)
            resultE01 += -1.0 * (a.e012 * b.e2);
    }
    var resultE02 = undefined;
    var e02_0 = a.scalar !== undefined && b.e02 !== undefined;
    var e02_1 = a.e1 !== undefined && b.e012 !== undefined;
    var e02_2 = a.e02 !== undefined && b.scalar !== undefined;
    var e02_3 = a.e012 !== undefined && b.e1 !== undefined;
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        resultE02 = 0;
        if (e02_0)
            resultE02 += 1.0 * (a.scalar * b.e02);
        if (e02_1)
            resultE02 += 1.0 * (a.e1 * b.e012);
        if (e02_2)
            resultE02 += 1.0 * (a.e02 * b.scalar);
        if (e02_3)
            resultE02 += 1.0 * (a.e012 * b.e1);
    }
    var resultE12 = undefined;
    var e12_0 = a.scalar !== undefined && b.e12 !== undefined;
    var e12_1 = a.e12 !== undefined && b.scalar !== undefined;
    if (e12_0 || e12_1) {
        resultE12 = 0;
        if (e12_0)
            resultE12 += 1.0 * (a.scalar * b.e12);
        if (e12_1)
            resultE12 += 1.0 * (a.e12 * b.scalar);
    }
    var resultE012 = undefined;
    var e012_0 = a.scalar !== undefined && b.e012 !== undefined;
    var e012_1 = a.e012 !== undefined && b.scalar !== undefined;
    if (e012_0 || e012_1) {
        resultE012 = 0;
        if (e012_0)
            resultE012 += 1.0 * (a.scalar * b.e012);
        if (e012_1)
            resultE012 += 1.0 * (a.e012 * b.scalar);
    }
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    };
    return result;
};
exports.multiply = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
        e0: a.e0 !== undefined ? a.e0 * b : undefined,
        e1: a.e1 !== undefined ? a.e1 * b : undefined,
        e2: a.e2 !== undefined ? a.e2 * b : undefined,
        e01: a.e01 !== undefined ? a.e01 * b : undefined,
        e02: a.e02 !== undefined ? a.e02 * b : undefined,
        e12: a.e12 !== undefined ? a.e12 * b : undefined,
        e012: a.e012 !== undefined ? a.e012 * b : undefined,
    };
    return result;
};
exports.div = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
        e0: a.e0 !== undefined ? a.e0 / b : undefined,
        e1: a.e1 !== undefined ? a.e1 / b : undefined,
        e2: a.e2 !== undefined ? a.e2 / b : undefined,
        e01: a.e01 !== undefined ? a.e01 / b : undefined,
        e02: a.e02 !== undefined ? a.e02 / b : undefined,
        e12: a.e12 !== undefined ? a.e12 / b : undefined,
        e012: a.e012 !== undefined ? a.e012 / b : undefined,
    };
    return result;
};
exports.reversion = function (a) {
    var result = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
        e1: a.e1 && a.e1,
        e2: a.e2 && a.e2,
        e01: a.e01 && -a.e01,
        e02: a.e02 && -a.e02,
        e12: a.e12 && -a.e12,
        e012: a.e012 && -a.e012,
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
    if (a.e12 !== undefined) {
        if (result === "") {
            result += a.e12.toFixed(digits) + "e12";
        }
        else {
            result += a.e12 >= 0 ? " + " + a.e12.toFixed(digits) + "e12" : " - " + Math.abs(a.e12).toFixed(digits) + "e12";
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
    if (s < 0) {
        var rootS = Math.sign(s) * Math.sqrt(Math.abs(s));
        return exports.add({ scalar: Math.cos(rootS) }, exports.multiply(a, Math.sin(rootS) / rootS));
    }
    else if (s > 0) {
        var rootS = Math.sign(s) * Math.sqrt(Math.abs(s));
        return exports.add({ scalar: Math.cosh(rootS) }, exports.multiply(a, Math.sinh(rootS) / rootS));
    }
    else {
        return exports.add({ scalar: 1 }, a);
    }
};
