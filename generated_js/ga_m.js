"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
    };
    return result;
};
exports.sub = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 !== undefined || b.e0 !== undefined) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
    };
    return result;
};
exports.dual = function (a) {
    var result = {
        scalar: a.e0 !== undefined ? 1.0 * a.e0 : undefined,
        e0: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    };
    return result;
};
exports.geometricProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e0 !== undefined && b.e0 !== undefined;
    if (scalar_0 || scalar_1) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += -1.0 * (a.e0 * b.e0);
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
    };
    return result;
};
exports.innerProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    var scalar_1 = a.e0 !== undefined && b.e0 !== undefined;
    if (scalar_0 || scalar_1) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
        if (scalar_1)
            resultScalar += -1.0 * (a.e0 * b.e0);
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
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
    var result = {
        scalar: resultScalar,
        e0: resultE0,
    };
    return result;
};
exports.multiply = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
        e0: a.e0 !== undefined ? a.e0 * b : undefined,
    };
    return result;
};
exports.div = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
        e0: a.e0 !== undefined ? a.e0 / b : undefined,
    };
    return result;
};
exports.reversion = function (a) {
    var result = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
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
