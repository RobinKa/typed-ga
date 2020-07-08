export type BladeScalar = { scalar: number }
export type BladeE0 = { e0: number }

export type OptionalMultiVector = {
    scalar?: number
    e0?: number
}

export type AddResultType<A, B> = (
    (A extends BladeScalar ? BladeScalar : {}) &
    (B extends BladeScalar ? BladeScalar : {}) &
    (A extends BladeE0 ? BladeE0 : {}) &
    (B extends BladeE0 ? BladeE0 : {})
)

export const add = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar || b.scalar) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 || b.e0) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export const sub = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar || b.scalar) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 || b.e0) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export type DualResultType<A> = (
    (A extends BladeScalar ? BladeE0 : {}) &
    (A extends BladeE0 ? BladeScalar : {})
)

export const dual = <A extends OptionalMultiVector>(a: A): DualResultType<A> => {
    const result: any = {
        scalar: a.e0 !== undefined ? 1.0 * a.e0 : undefined,
        e0: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    }
    return result as DualResultType<A>
}

export type GeometricProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE0 ? BladeScalar : {})
    ) : {})

export const geometricProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): GeometricProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar && b.scalar
    const scalar_1 = a.e0 && b.e0
    if (scalar_0 || scalar_1) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += -1.0 * (a.e0! * b.e0!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar && b.e0
    const e0_1 = a.e0 && b.scalar
    if (e0_0 || e0_1) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
    }
    return result as GeometricProductResultType<A, B>
}

export type InnerProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE0 ? BladeScalar : {})
    ) : {})

export const innerProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): InnerProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar && b.scalar
    const scalar_1 = a.e0 && b.e0
    if (scalar_0 || scalar_1) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += -1.0 * (a.e0! * b.e0!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar && b.e0
    const e0_1 = a.e0 && b.scalar
    if (e0_0 || e0_1) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
    }
    return result as InnerProductResultType<A, B>
}

export type ExteriorProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {})
    ) : {})

export const exteriorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): ExteriorProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar && b.scalar
    if (scalar_0) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar && b.e0
    const e0_1 = a.e0 && b.scalar
    if (e0_0 || e0_1) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
    }
    return result as ExteriorProductResultType<A, B>
}

export const multiply = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar && a.scalar * b,
        e0: a.e0 && a.e0 * b,
    }
    return result as A
}

export const div = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar && a.scalar / b,
        e0: a.e0 && a.e0 / b,
    }
    return result as A
}

export const reversion = <A extends OptionalMultiVector>(a: A): A => {
    const result: any = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
    }
    return result as A
}

export const regressiveProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    dual(exteriorProduct(dual(a), dual(b)))

export const sandwichProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    geometricProduct(b, geometricProduct(a, reversion(b)))

export const commutatorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    multiply(sub(geometricProduct(a, b), geometricProduct(b, a)), 0.5)

export const exponential = <A extends OptionalMultiVector>(a: A) => {
    const gp = geometricProduct(a, a) as any
    if (gp.scalar === undefined) {
        throw new Error("Input to exponential needs to square to scalar")
    }
    const s = gp.scalar as number

    if (s < -0.1) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cos(rootS) }, multiply(div(a, rootS), Math.sin(rootS) / rootS))
    } else if (s > 0.1) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cosh(rootS) }, multiply(div(a, rootS), Math.sinh(rootS) / rootS))
    } else {
        return add({ scalar: 1 }, a)
    }
}