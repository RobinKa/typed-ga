"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
    };
    return result;
};
exports.sub = function (a, b) {
    var result = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
    };
    return result;
};
exports.dual = function (a) {
    var result = {
        scalar: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    };
    return result;
};
exports.geometricProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    if (scalar_0) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
    }
    var result = {
        scalar: resultScalar,
    };
    return result;
};
exports.innerProduct = function (a, b) {
    var resultScalar = undefined;
    var scalar_0 = a.scalar !== undefined && b.scalar !== undefined;
    if (scalar_0) {
        resultScalar = 0;
        if (scalar_0)
            resultScalar += 1.0 * (a.scalar * b.scalar);
    }
    var result = {
        scalar: resultScalar,
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
    var result = {
        scalar: resultScalar,
    };
    return result;
};
exports.multiply = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
    };
    return result;
};
exports.div = function (a, b) {
    var result = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
    };
    return result;
};
exports.reversion = function (a) {
    var result = {
        scalar: a.scalar && a.scalar,
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
