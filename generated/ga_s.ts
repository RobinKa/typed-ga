export type BladeScalar = { scalar: number }

export type Scalar = BladeScalar
export type PseudoScalar = BladeScalar
export type Even = BladeScalar
export type MultiVector = BladeScalar

export type OptionalMultiVector = {
    scalar?: number
}

export type AddResultType<A, B> = (
    (A extends BladeScalar ? BladeScalar : {}) &
    (B extends BladeScalar ? BladeScalar : {})
)

export const add = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export const sub = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar !== undefined || b.scalar !== undefined) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export type DualResultType<A> = (
    (A extends BladeScalar ? BladeScalar : {})
)

export const dual = <A extends OptionalMultiVector>(a: A): DualResultType<A> => {
    const result: any = {
        scalar: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    }
    return result as DualResultType<A>
}

export type GeometricProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {})
    ) : {})

export const geometricProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): GeometricProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    if (scalar_0) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
    }
    return result as GeometricProductResultType<A, B>
}

export type InnerProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {})
    ) : {})

export const innerProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): InnerProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    if (scalar_0) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
    }
    return result as InnerProductResultType<A, B>
}

export type ExteriorProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {})
    ) : {})

export const exteriorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): ExteriorProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    if (scalar_0) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
    }
    return result as ExteriorProductResultType<A, B>
}

export const multiply = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar !== undefined ? a.scalar * b : undefined,
    }
    return result as A
}

export const div = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar !== undefined ? a.scalar / b : undefined,
    }
    return result as A
}

export const reversion = <A extends OptionalMultiVector>(a: A): A => {
    const result: any = {
        scalar: a.scalar && a.scalar,
    }
    return result as A
}

export const repr = <A extends OptionalMultiVector>(a: A, digits: number = 3): string => {
    let result = ""
    if (a.scalar !== undefined) {
        if (result === "") {
            result += a.scalar.toFixed(digits) + ""
        } else {
            result += a.scalar >= 0 ? " + " + a.scalar.toFixed(digits) + "" : " - " + Math.abs(a.scalar).toFixed(digits) + ""
        }
    }
    return result
}

export const regressiveProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    dual(exteriorProduct(dual(a), dual(b)))

export const sandwichProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    geometricProduct(b, geometricProduct(a, reversion(b)))

export const commutatorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B) =>
    multiply(sub(geometricProduct(a, b), geometricProduct(b, a)), 0.5)

export const exponential = <A extends OptionalMultiVector>(a: A) => {
    const gp = geometricProduct(a, a) as any
    const s = gp.scalar || 0

    // TODO: Check if non-scalar parts are non-zero

    if (s < 0) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cos(rootS) }, multiply(a, Math.sin(rootS) / rootS))
    } else if (s > 0) {
        const rootS = Math.sign(s) * Math.sqrt(Math.abs(s))
        return add({ scalar: Math.cosh(rootS) }, multiply(a, Math.sinh(rootS) / rootS))
    } else {
        return add({ scalar: 1 }, a)
    }
}