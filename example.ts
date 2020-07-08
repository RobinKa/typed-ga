import * as ga from "./generated/ga_zpp"

const a = { e0: 1 }
const b = { e12: 5 }

// The resulting type of the geometric product will only have e012.
ga.geometricProduct(a, b).e012

// a \vee b will only have scalar
ga.regressiveProduct(a, b).scalar

// The following result will have e01 and e012
const c = { e12: 5, e02: 3, e1: 7 }
ga.geometricProduct(a, c)