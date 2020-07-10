"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) + (b.e1 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) + (b.e01 || 0) : undefined,
    };
    return result;
};
exports.sub = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
        e1: (a.e1 !== undefined || b.e1 !== undefined) ? (a.e1 || 0) - (b.e1 || 0) : undefined,
        e01: (a.e01 !== undefined || b.e01 !== undefined) ? (a.e01 || 0) - (b.e01 || 0) : undefined,
    };
    return result;
};
exports.dual = function (a) {
    var result = {
        scalar: a.e01 !== undefined ? 1.0 * a.e01 : undefined,
        e0: a.e1 !== undefined ? 1.0 * a.e1 : undefined,
        e1: a.e0 !== undefined ? -1.0 * a.e0 : undefined,
        e01: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    };
    return result;
};
exports.geometricProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e0 !== undefined && b.e0 !== undefined;
    var scalar_2 = a.e1 !== undefined && b.e1 !== undefined;
    var scalar_3 = a.e01 !== undefined && b.e01 !== undefined;
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += 1.0 * (a.e0 * b.e0);
        if (scalar_2)
            resultScalar += 1.0 * (a.e1 * b.e1);
        if (scalar_3)
            resultScalar += -1.0 * (a.e01 * b.e01);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    var e0_2 = a.e1 !== undefined && b.e01 !== undefined;
    var e0_3 = a.e01 !== undefined && b.e1 !== undefined;
    if (e0_0 || e0_1 || e0_2 || e0_3) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
        if (e0_2)
            resultE0 += -1.0 * (a.e1 * b.e01);
        if (e0_3)
            resultE0 += 1.0 * (a.e01 * b.e1);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e0 !== undefined && b.e01 !== undefined;
    var e1_2 = a.e1 !== undefined && b.scalar !== undefined;
    var e1_3 = a.e01 !== undefined && b.e0 !== undefined;
    if (e1_0 || e1_1 || e1_2 || e1_3) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e0 * b.e01);
        if (e1_2)
            resultE1 += 1.0 * (a.e1 * b.scalar);
        if (e1_3)
            resultE1 += -1.0 * (a.e01 * b.e0);
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e01: resultE01,
    };
    return result;
};
exports.innerProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e0 !== undefined && b.e0 !== undefined;
    var scalar_2 = a.e1 !== undefined && b.e1 !== undefined;
    var scalar_3 = a.e01 !== undefined && b.e01 !== undefined;
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += 1.0 * (a.e0 * b.e0);
        if (scalar_2)
            resultScalar += 1.0 * (a.e1 * b.e1);
        if (scalar_3)
            resultScalar += -1.0 * (a.e01 * b.e01);
    }
    var resultE0 = undefined;
    var e0_0 = a.scalar !== undefined && b.e0 !== undefined;
    var e0_1 = a.e0 !== undefined && b.scalar !== undefined;
    var e0_2 = a.e1 !== undefined && b.e01 !== undefined;
    var e0_3 = a.e01 !== undefined && b.e1 !== undefined;
    if (e0_0 || e0_1 || e0_2 || e0_3) {
        resultE0 = 0;
        if (e0_0)
            resultE0 += 1.0 * (a.scalar * b.e0);
        if (e0_1)
            resultE0 += 1.0 * (a.e0 * b.scalar);
        if (e0_2)
            resultE0 += -1.0 * (a.e1 * b.e01);
        if (e0_3)
            resultE0 += 1.0 * (a.e01 * b.e1);
    }
    var resultE1 = undefined;
    var e1_0 = a.scalar !== undefined && b.e1 !== undefined;
    var e1_1 = a.e0 !== undefined && b.e01 !== undefined;
    var e1_2 = a.e1 !== undefined && b.scalar !== undefined;
    var e1_3 = a.e01 !== undefined && b.e0 !== undefined;
    if (e1_0 || e1_1 || e1_2 || e1_3) {
        resultE1 = 0;
        if (e1_0)
            resultE1 += 1.0 * (a.scalar * b.e1);
        if (e1_1)
            resultE1 += 1.0 * (a.e0 * b.e01);
        if (e1_2)
            resultE1 += 1.0 * (a.e1 * b.scalar);
        if (e1_3)
            resultE1 += -1.0 * (a.e01 * b.e0);
    }
    var resultE01 = undefined;
    var e01_0 = a.scalar !== undefined && b.e01 !== undefined;
    var e01_1 = a.e01 !== undefined && b.scalar !== undefined;
    if (e01_0 || e01_1) {
        resultE01 = 0;
        if (e01_0)
            resultE01 += 1.0 * (a.scalar * b.e01);
        if (e01_1)
            resultE01 += 1.0 * (a.e01 * b.scalar);
    }
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e01: resultE01,
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e01: resultE01,
    };
    return result;
};
exports.multiply = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
        e0: a.e0 !== undefined ? a.e0 * b : undefined,
        e1: a.e1 !== undefined ? a.e1 * b : undefined,
        e01: a.e01 !== undefined ? a.e01 * b : undefined,
    };
    return result;
};
exports.div = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
        e0: a.e0 !== undefined ? a.e0 / b : undefined,
        e1: a.e1 !== undefined ? a.e1 / b : undefined,
        e01: a.e01 !== undefined ? a.e01 / b : undefined,
    };
    return result;
};
exports.reversion = function (a) {
    var result = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
        e1: a.e1 && a.e1,
        e01: a.e01 && -a.e01,
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
    if (a.e01 !== undefined) {
        if (result === "") {
            result += a.e01.toFixed(digits) + "e01";
        }
        else {
            result += a.e01 >= 0 ? " + " + a.e01.toFixed(digits) + "e01" : " - " + Math.abs(a.e01).toFixed(digits) + "e01";
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
