export type BladeScalar = { scalar: number }
export type BladeE0 = { e0: number }
export type BladeE1 = { e1: number }
export type BladeE2 = { e2: number }
export type BladeE3 = { e3: number }
export type BladeE01 = { e01: number }
export type BladeE02 = { e02: number }
export type BladeE03 = { e03: number }
export type BladeE12 = { e12: number }
export type BladeE13 = { e13: number }
export type BladeE23 = { e23: number }
export type BladeE012 = { e012: number }
export type BladeE013 = { e013: number }
export type BladeE023 = { e023: number }
export type BladeE123 = { e123: number }
export type BladeE0123 = { e0123: number }

export type Scalar = BladeScalar
export type Vector = BladeE0 & BladeE1 & BladeE2 & BladeE3
export type BiVector = BladeE01 & BladeE02 & BladeE03 & BladeE12 & BladeE13 & BladeE23
export type TriVector = BladeE012 & BladeE013 & BladeE023 & BladeE123
export type PseudoTriVector = BladeE0 & BladeE1 & BladeE2 & BladeE3
export type PseudoBiVector = BladeE01 & BladeE02 & BladeE03 & BladeE12 & BladeE13 & BladeE23
export type PseudoVector = BladeE012 & BladeE013 & BladeE023 & BladeE123
export type PseudoScalar = BladeE0123
export type Even = BladeScalar & BladeE01 & BladeE02 & BladeE03 & BladeE12 & BladeE13 & BladeE23 & BladeE0123
export type Odd = BladeE0 & BladeE1 & BladeE2 & BladeE3 & BladeE012 & BladeE013 & BladeE023 & BladeE123
export type MultiVector = BladeScalar & BladeE0 & BladeE1 & BladeE2 & BladeE3 & BladeE01 & BladeE02 & BladeE03 & BladeE12 & BladeE13 & BladeE23 & BladeE012 & BladeE013 & BladeE023 & BladeE123 & BladeE0123

export type OptionalMultiVector = {
    scalar?: number
    e0?: number
    e1?: number
    e2?: number
    e3?: number
    e01?: number
    e02?: number
    e03?: number
    e12?: number
    e13?: number
    e23?: number
    e012?: number
    e013?: number
    e023?: number
    e123?: number
    e0123?: number
}

export type AddResultType<A, B> = (
    (A extends BladeScalar ? BladeScalar : {}) &
    (B extends BladeScalar ? BladeScalar : {}) &
    (A extends BladeE0 ? BladeE0 : {}) &
    (B extends BladeE0 ? BladeE0 : {}) &
    (A extends BladeE1 ? BladeE1 : {}) &
    (B extends BladeE1 ? BladeE1 : {}) &
    (A extends BladeE2 ? BladeE2 : {}) &
    (B extends BladeE2 ? BladeE2 : {}) &
    (A extends BladeE3 ? BladeE3 : {}) &
    (B extends BladeE3 ? BladeE3 : {}) &
    (A extends BladeE01 ? BladeE01 : {}) &
    (B extends BladeE01 ? BladeE01 : {}) &
    (A extends BladeE02 ? BladeE02 : {}) &
    (B extends BladeE02 ? BladeE02 : {}) &
    (A extends BladeE03 ? BladeE03 : {}) &
    (B extends BladeE03 ? BladeE03 : {}) &
    (A extends BladeE12 ? BladeE12 : {}) &
    (B extends BladeE12 ? BladeE12 : {}) &
    (A extends BladeE13 ? BladeE13 : {}) &
    (B extends BladeE13 ? BladeE13 : {}) &
    (A extends BladeE23 ? BladeE23 : {}) &
    (B extends BladeE23 ? BladeE23 : {}) &
    (A extends BladeE012 ? BladeE012 : {}) &
    (B extends BladeE012 ? BladeE012 : {}) &
    (A extends BladeE013 ? BladeE013 : {}) &
    (B extends BladeE013 ? BladeE013 : {}) &
    (A extends BladeE023 ? BladeE023 : {}) &
    (B extends BladeE023 ? BladeE023 : {}) &
    (A extends BladeE123 ? BladeE123 : {}) &
    (B extends BladeE123 ? BladeE123 : {}) &
    (A extends BladeE0123 ? BladeE0123 : {}) &
    (B extends BladeE0123 ? BladeE0123 : {})
)

export const add = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
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
    }
    return result as AddResultType<A, B>
}

export const sub = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
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
    }
    return result as AddResultType<A, B>
}

export type DualResultType<A> = (
    (A extends BladeScalar ? BladeE0123 : {}) &
    (A extends BladeE0 ? BladeE123 : {}) &
    (A extends BladeE1 ? BladeE023 : {}) &
    (A extends BladeE2 ? BladeE013 : {}) &
    (A extends BladeE3 ? BladeE012 : {}) &
    (A extends BladeE01 ? BladeE23 : {}) &
    (A extends BladeE02 ? BladeE13 : {}) &
    (A extends BladeE03 ? BladeE12 : {}) &
    (A extends BladeE12 ? BladeE03 : {}) &
    (A extends BladeE13 ? BladeE02 : {}) &
    (A extends BladeE23 ? BladeE01 : {}) &
    (A extends BladeE012 ? BladeE3 : {}) &
    (A extends BladeE013 ? BladeE2 : {}) &
    (A extends BladeE023 ? BladeE1 : {}) &
    (A extends BladeE123 ? BladeE0 : {}) &
    (A extends BladeE0123 ? BladeScalar : {})
)

export const dual = <A extends OptionalMultiVector>(a: A): DualResultType<A> => {
    const result: any = {
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
    }
    return result as DualResultType<A>
}

export type GeometricProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE3 ? BladeE3 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE03 ? BladeE03 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE13 ? BladeE13 : {}) &
        (B extends BladeE23 ? BladeE23 : {}) &
        (B extends BladeE012 ? BladeE012 : {}) &
        (B extends BladeE013 ? BladeE013 : {}) &
        (B extends BladeE023 ? BladeE023 : {}) &
        (B extends BladeE123 ? BladeE123 : {}) &
        (B extends BladeE0123 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE02 : {}) &
        (B extends BladeE3 ? BladeE03 : {}) &
        (B extends BladeE12 ? BladeE012 : {}) &
        (B extends BladeE13 ? BladeE013 : {}) &
        (B extends BladeE23 ? BladeE023 : {}) &
        (B extends BladeE123 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE1 ? BladeScalar : {}) &
        (B extends BladeE2 ? BladeE12 : {}) &
        (B extends BladeE3 ? BladeE13 : {}) &
        (B extends BladeE01 ? BladeE0 : {}) &
        (B extends BladeE02 ? BladeE012 : {}) &
        (B extends BladeE03 ? BladeE013 : {}) &
        (B extends BladeE12 ? BladeE2 : {}) &
        (B extends BladeE13 ? BladeE3 : {}) &
        (B extends BladeE23 ? BladeE123 : {}) &
        (B extends BladeE012 ? BladeE02 : {}) &
        (B extends BladeE013 ? BladeE03 : {}) &
        (B extends BladeE023 ? BladeE0123 : {}) &
        (B extends BladeE123 ? BladeE23 : {}) &
        (B extends BladeE0123 ? BladeE023 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE0 ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE12 : {}) &
        (B extends BladeE2 ? BladeScalar : {}) &
        (B extends BladeE3 ? BladeE23 : {}) &
        (B extends BladeE01 ? BladeE012 : {}) &
        (B extends BladeE02 ? BladeE0 : {}) &
        (B extends BladeE03 ? BladeE023 : {}) &
        (B extends BladeE12 ? BladeE1 : {}) &
        (B extends BladeE13 ? BladeE123 : {}) &
        (B extends BladeE23 ? BladeE3 : {}) &
        (B extends BladeE012 ? BladeE01 : {}) &
        (B extends BladeE013 ? BladeE0123 : {}) &
        (B extends BladeE023 ? BladeE03 : {}) &
        (B extends BladeE123 ? BladeE13 : {}) &
        (B extends BladeE0123 ? BladeE013 : {})
    ) : {}) &
    (A extends BladeE3 ? (
        (B extends BladeScalar ? BladeE3 : {}) &
        (B extends BladeE0 ? BladeE03 : {}) &
        (B extends BladeE1 ? BladeE13 : {}) &
        (B extends BladeE2 ? BladeE23 : {}) &
        (B extends BladeE3 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE013 : {}) &
        (B extends BladeE02 ? BladeE023 : {}) &
        (B extends BladeE03 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE123 : {}) &
        (B extends BladeE13 ? BladeE1 : {}) &
        (B extends BladeE23 ? BladeE2 : {}) &
        (B extends BladeE012 ? BladeE0123 : {}) &
        (B extends BladeE013 ? BladeE01 : {}) &
        (B extends BladeE023 ? BladeE02 : {}) &
        (B extends BladeE123 ? BladeE12 : {}) &
        (B extends BladeE0123 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE1 ? BladeE0 : {}) &
        (B extends BladeE2 ? BladeE012 : {}) &
        (B extends BladeE3 ? BladeE013 : {}) &
        (B extends BladeE12 ? BladeE02 : {}) &
        (B extends BladeE13 ? BladeE03 : {}) &
        (B extends BladeE23 ? BladeE0123 : {}) &
        (B extends BladeE123 ? BladeE023 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE012 : {}) &
        (B extends BladeE2 ? BladeE0 : {}) &
        (B extends BladeE3 ? BladeE023 : {}) &
        (B extends BladeE12 ? BladeE01 : {}) &
        (B extends BladeE13 ? BladeE0123 : {}) &
        (B extends BladeE23 ? BladeE03 : {}) &
        (B extends BladeE123 ? BladeE013 : {})
    ) : {}) &
    (A extends BladeE03 ? (
        (B extends BladeScalar ? BladeE03 : {}) &
        (B extends BladeE1 ? BladeE013 : {}) &
        (B extends BladeE2 ? BladeE023 : {}) &
        (B extends BladeE3 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE0123 : {}) &
        (B extends BladeE13 ? BladeE01 : {}) &
        (B extends BladeE23 ? BladeE02 : {}) &
        (B extends BladeE123 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE0 ? BladeE012 : {}) &
        (B extends BladeE1 ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeE1 : {}) &
        (B extends BladeE3 ? BladeE123 : {}) &
        (B extends BladeE01 ? BladeE02 : {}) &
        (B extends BladeE02 ? BladeE01 : {}) &
        (B extends BladeE03 ? BladeE0123 : {}) &
        (B extends BladeE12 ? BladeScalar : {}) &
        (B extends BladeE13 ? BladeE23 : {}) &
        (B extends BladeE23 ? BladeE13 : {}) &
        (B extends BladeE012 ? BladeE0 : {}) &
        (B extends BladeE013 ? BladeE023 : {}) &
        (B extends BladeE023 ? BladeE013 : {}) &
        (B extends BladeE123 ? BladeE3 : {}) &
        (B extends BladeE0123 ? BladeE03 : {})
    ) : {}) &
    (A extends BladeE13 ? (
        (B extends BladeScalar ? BladeE13 : {}) &
        (B extends BladeE0 ? BladeE013 : {}) &
        (B extends BladeE1 ? BladeE3 : {}) &
        (B extends BladeE2 ? BladeE123 : {}) &
        (B extends BladeE3 ? BladeE1 : {}) &
        (B extends BladeE01 ? BladeE03 : {}) &
        (B extends BladeE02 ? BladeE0123 : {}) &
        (B extends BladeE03 ? BladeE01 : {}) &
        (B extends BladeE12 ? BladeE23 : {}) &
        (B extends BladeE13 ? BladeScalar : {}) &
        (B extends BladeE23 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE023 : {}) &
        (B extends BladeE013 ? BladeE0 : {}) &
        (B extends BladeE023 ? BladeE012 : {}) &
        (B extends BladeE123 ? BladeE2 : {}) &
        (B extends BladeE0123 ? BladeE02 : {})
    ) : {}) &
    (A extends BladeE23 ? (
        (B extends BladeScalar ? BladeE23 : {}) &
        (B extends BladeE0 ? BladeE023 : {}) &
        (B extends BladeE1 ? BladeE123 : {}) &
        (B extends BladeE2 ? BladeE3 : {}) &
        (B extends BladeE3 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE0123 : {}) &
        (B extends BladeE02 ? BladeE03 : {}) &
        (B extends BladeE03 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE13 : {}) &
        (B extends BladeE13 ? BladeE12 : {}) &
        (B extends BladeE23 ? BladeScalar : {}) &
        (B extends BladeE012 ? BladeE013 : {}) &
        (B extends BladeE013 ? BladeE012 : {}) &
        (B extends BladeE023 ? BladeE0 : {}) &
        (B extends BladeE123 ? BladeE1 : {}) &
        (B extends BladeE0123 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {}) &
        (B extends BladeE1 ? BladeE02 : {}) &
        (B extends BladeE2 ? BladeE01 : {}) &
        (B extends BladeE3 ? BladeE0123 : {}) &
        (B extends BladeE12 ? BladeE0 : {}) &
        (B extends BladeE13 ? BladeE023 : {}) &
        (B extends BladeE23 ? BladeE013 : {}) &
        (B extends BladeE123 ? BladeE03 : {})
    ) : {}) &
    (A extends BladeE013 ? (
        (B extends BladeScalar ? BladeE013 : {}) &
        (B extends BladeE1 ? BladeE03 : {}) &
        (B extends BladeE2 ? BladeE0123 : {}) &
        (B extends BladeE3 ? BladeE01 : {}) &
        (B extends BladeE12 ? BladeE023 : {}) &
        (B extends BladeE13 ? BladeE0 : {}) &
        (B extends BladeE23 ? BladeE012 : {}) &
        (B extends BladeE123 ? BladeE02 : {})
    ) : {}) &
    (A extends BladeE023 ? (
        (B extends BladeScalar ? BladeE023 : {}) &
        (B extends BladeE1 ? BladeE0123 : {}) &
        (B extends BladeE2 ? BladeE03 : {}) &
        (B extends BladeE3 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE013 : {}) &
        (B extends BladeE13 ? BladeE012 : {}) &
        (B extends BladeE23 ? BladeE0 : {}) &
        (B extends BladeE123 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE123 ? (
        (B extends BladeScalar ? BladeE123 : {}) &
        (B extends BladeE0 ? BladeE0123 : {}) &
        (B extends BladeE1 ? BladeE23 : {}) &
        (B extends BladeE2 ? BladeE13 : {}) &
        (B extends BladeE3 ? BladeE12 : {}) &
        (B extends BladeE01 ? BladeE023 : {}) &
        (B extends BladeE02 ? BladeE013 : {}) &
        (B extends BladeE03 ? BladeE012 : {}) &
        (B extends BladeE12 ? BladeE3 : {}) &
        (B extends BladeE13 ? BladeE2 : {}) &
        (B extends BladeE23 ? BladeE1 : {}) &
        (B extends BladeE012 ? BladeE03 : {}) &
        (B extends BladeE013 ? BladeE02 : {}) &
        (B extends BladeE023 ? BladeE01 : {}) &
        (B extends BladeE123 ? BladeScalar : {}) &
        (B extends BladeE0123 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE0123 ? (
        (B extends BladeScalar ? BladeE0123 : {}) &
        (B extends BladeE1 ? BladeE023 : {}) &
        (B extends BladeE2 ? BladeE013 : {}) &
        (B extends BladeE3 ? BladeE012 : {}) &
        (B extends BladeE12 ? BladeE03 : {}) &
        (B extends BladeE13 ? BladeE02 : {}) &
        (B extends BladeE23 ? BladeE01 : {}) &
        (B extends BladeE123 ? BladeE0 : {})
    ) : {})

export const geometricProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): GeometricProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    const scalar_1 = a.e1 !== undefined && b.e1 !== undefined
    const scalar_2 = a.e2 !== undefined && b.e2 !== undefined
    const scalar_3 = a.e3 !== undefined && b.e3 !== undefined
    const scalar_4 = a.e12 !== undefined && b.e12 !== undefined
    const scalar_5 = a.e13 !== undefined && b.e13 !== undefined
    const scalar_6 = a.e23 !== undefined && b.e23 !== undefined
    const scalar_7 = a.e123 !== undefined && b.e123 !== undefined
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3 || scalar_4 || scalar_5 || scalar_6 || scalar_7) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += -1.0 * (a.e1! * b.e1!)
        if (scalar_2) resultScalar += -1.0 * (a.e2! * b.e2!)
        if (scalar_3) resultScalar += -1.0 * (a.e3! * b.e3!)
        if (scalar_4) resultScalar += -1.0 * (a.e12! * b.e12!)
        if (scalar_5) resultScalar += -1.0 * (a.e13! * b.e13!)
        if (scalar_6) resultScalar += -1.0 * (a.e23! * b.e23!)
        if (scalar_7) resultScalar += 1.0 * (a.e123! * b.e123!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    const e0_2 = a.e1 !== undefined && b.e01 !== undefined
    const e0_3 = a.e2 !== undefined && b.e02 !== undefined
    const e0_4 = a.e3 !== undefined && b.e03 !== undefined
    const e0_5 = a.e01 !== undefined && b.e1 !== undefined
    const e0_6 = a.e02 !== undefined && b.e2 !== undefined
    const e0_7 = a.e03 !== undefined && b.e3 !== undefined
    const e0_8 = a.e12 !== undefined && b.e012 !== undefined
    const e0_9 = a.e13 !== undefined && b.e013 !== undefined
    const e0_10 = a.e23 !== undefined && b.e023 !== undefined
    const e0_11 = a.e012 !== undefined && b.e12 !== undefined
    const e0_12 = a.e013 !== undefined && b.e13 !== undefined
    const e0_13 = a.e023 !== undefined && b.e23 !== undefined
    const e0_14 = a.e123 !== undefined && b.e0123 !== undefined
    const e0_15 = a.e0123 !== undefined && b.e123 !== undefined
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7 || e0_8 || e0_9 || e0_10 || e0_11 || e0_12 || e0_13 || e0_14 || e0_15) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
        if (e0_2) resultE0 += 1.0 * (a.e1! * b.e01!)
        if (e0_3) resultE0 += 1.0 * (a.e2! * b.e02!)
        if (e0_4) resultE0 += 1.0 * (a.e3! * b.e03!)
        if (e0_5) resultE0 += -1.0 * (a.e01! * b.e1!)
        if (e0_6) resultE0 += -1.0 * (a.e02! * b.e2!)
        if (e0_7) resultE0 += -1.0 * (a.e03! * b.e3!)
        if (e0_8) resultE0 += -1.0 * (a.e12! * b.e012!)
        if (e0_9) resultE0 += -1.0 * (a.e13! * b.e013!)
        if (e0_10) resultE0 += -1.0 * (a.e23! * b.e023!)
        if (e0_11) resultE0 += -1.0 * (a.e012! * b.e12!)
        if (e0_12) resultE0 += -1.0 * (a.e013! * b.e13!)
        if (e0_13) resultE0 += -1.0 * (a.e023! * b.e23!)
        if (e0_14) resultE0 += -1.0 * (a.e123! * b.e0123!)
        if (e0_15) resultE0 += 1.0 * (a.e0123! * b.e123!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e1 !== undefined && b.scalar !== undefined
    const e1_2 = a.e2 !== undefined && b.e12 !== undefined
    const e1_3 = a.e3 !== undefined && b.e13 !== undefined
    const e1_4 = a.e12 !== undefined && b.e2 !== undefined
    const e1_5 = a.e13 !== undefined && b.e3 !== undefined
    const e1_6 = a.e23 !== undefined && b.e123 !== undefined
    const e1_7 = a.e123 !== undefined && b.e23 !== undefined
    if (e1_0 || e1_1 || e1_2 || e1_3 || e1_4 || e1_5 || e1_6 || e1_7) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
        if (e1_2) resultE1 += 1.0 * (a.e2! * b.e12!)
        if (e1_3) resultE1 += 1.0 * (a.e3! * b.e13!)
        if (e1_4) resultE1 += -1.0 * (a.e12! * b.e2!)
        if (e1_5) resultE1 += -1.0 * (a.e13! * b.e3!)
        if (e1_6) resultE1 += -1.0 * (a.e23! * b.e123!)
        if (e1_7) resultE1 += -1.0 * (a.e123! * b.e23!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar !== undefined && b.e2 !== undefined
    const e2_1 = a.e1 !== undefined && b.e12 !== undefined
    const e2_2 = a.e2 !== undefined && b.scalar !== undefined
    const e2_3 = a.e3 !== undefined && b.e23 !== undefined
    const e2_4 = a.e12 !== undefined && b.e1 !== undefined
    const e2_5 = a.e13 !== undefined && b.e123 !== undefined
    const e2_6 = a.e23 !== undefined && b.e3 !== undefined
    const e2_7 = a.e123 !== undefined && b.e13 !== undefined
    if (e2_0 || e2_1 || e2_2 || e2_3 || e2_4 || e2_5 || e2_6 || e2_7) {
        resultE2 = 0
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += -1.0 * (a.e1! * b.e12!)
        if (e2_2) resultE2 += 1.0 * (a.e2! * b.scalar!)
        if (e2_3) resultE2 += 1.0 * (a.e3! * b.e23!)
        if (e2_4) resultE2 += 1.0 * (a.e12! * b.e1!)
        if (e2_5) resultE2 += 1.0 * (a.e13! * b.e123!)
        if (e2_6) resultE2 += -1.0 * (a.e23! * b.e3!)
        if (e2_7) resultE2 += 1.0 * (a.e123! * b.e13!)
    }
    let resultE3 = undefined
    const e3_0 = a.scalar !== undefined && b.e3 !== undefined
    const e3_1 = a.e1 !== undefined && b.e13 !== undefined
    const e3_2 = a.e2 !== undefined && b.e23 !== undefined
    const e3_3 = a.e3 !== undefined && b.scalar !== undefined
    const e3_4 = a.e12 !== undefined && b.e123 !== undefined
    const e3_5 = a.e13 !== undefined && b.e1 !== undefined
    const e3_6 = a.e23 !== undefined && b.e2 !== undefined
    const e3_7 = a.e123 !== undefined && b.e12 !== undefined
    if (e3_0 || e3_1 || e3_2 || e3_3 || e3_4 || e3_5 || e3_6 || e3_7) {
        resultE3 = 0
        if (e3_0) resultE3 += 1.0 * (a.scalar! * b.e3!)
        if (e3_1) resultE3 += -1.0 * (a.e1! * b.e13!)
        if (e3_2) resultE3 += -1.0 * (a.e2! * b.e23!)
        if (e3_3) resultE3 += 1.0 * (a.e3! * b.scalar!)
        if (e3_4) resultE3 += -1.0 * (a.e12! * b.e123!)
        if (e3_5) resultE3 += 1.0 * (a.e13! * b.e1!)
        if (e3_6) resultE3 += 1.0 * (a.e23! * b.e2!)
        if (e3_7) resultE3 += -1.0 * (a.e123! * b.e12!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e0 !== undefined && b.e1 !== undefined
    const e01_2 = a.e1 !== undefined && b.e0 !== undefined
    const e01_3 = a.e2 !== undefined && b.e012 !== undefined
    const e01_4 = a.e3 !== undefined && b.e013 !== undefined
    const e01_5 = a.e01 !== undefined && b.scalar !== undefined
    const e01_6 = a.e02 !== undefined && b.e12 !== undefined
    const e01_7 = a.e03 !== undefined && b.e13 !== undefined
    const e01_8 = a.e12 !== undefined && b.e02 !== undefined
    const e01_9 = a.e13 !== undefined && b.e03 !== undefined
    const e01_10 = a.e23 !== undefined && b.e0123 !== undefined
    const e01_11 = a.e012 !== undefined && b.e2 !== undefined
    const e01_12 = a.e013 !== undefined && b.e3 !== undefined
    const e01_13 = a.e023 !== undefined && b.e123 !== undefined
    const e01_14 = a.e123 !== undefined && b.e023 !== undefined
    const e01_15 = a.e0123 !== undefined && b.e23 !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3 || e01_4 || e01_5 || e01_6 || e01_7 || e01_8 || e01_9 || e01_10 || e01_11 || e01_12 || e01_13 || e01_14 || e01_15) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += -1.0 * (a.e2! * b.e012!)
        if (e01_4) resultE01 += -1.0 * (a.e3! * b.e013!)
        if (e01_5) resultE01 += 1.0 * (a.e01! * b.scalar!)
        if (e01_6) resultE01 += 1.0 * (a.e02! * b.e12!)
        if (e01_7) resultE01 += 1.0 * (a.e03! * b.e13!)
        if (e01_8) resultE01 += -1.0 * (a.e12! * b.e02!)
        if (e01_9) resultE01 += -1.0 * (a.e13! * b.e03!)
        if (e01_10) resultE01 += -1.0 * (a.e23! * b.e0123!)
        if (e01_11) resultE01 += -1.0 * (a.e012! * b.e2!)
        if (e01_12) resultE01 += -1.0 * (a.e013! * b.e3!)
        if (e01_13) resultE01 += -1.0 * (a.e023! * b.e123!)
        if (e01_14) resultE01 += 1.0 * (a.e123! * b.e023!)
        if (e01_15) resultE01 += -1.0 * (a.e0123! * b.e23!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar !== undefined && b.e02 !== undefined
    const e02_1 = a.e0 !== undefined && b.e2 !== undefined
    const e02_2 = a.e1 !== undefined && b.e012 !== undefined
    const e02_3 = a.e2 !== undefined && b.e0 !== undefined
    const e02_4 = a.e3 !== undefined && b.e023 !== undefined
    const e02_5 = a.e01 !== undefined && b.e12 !== undefined
    const e02_6 = a.e02 !== undefined && b.scalar !== undefined
    const e02_7 = a.e03 !== undefined && b.e23 !== undefined
    const e02_8 = a.e12 !== undefined && b.e01 !== undefined
    const e02_9 = a.e13 !== undefined && b.e0123 !== undefined
    const e02_10 = a.e23 !== undefined && b.e03 !== undefined
    const e02_11 = a.e012 !== undefined && b.e1 !== undefined
    const e02_12 = a.e013 !== undefined && b.e123 !== undefined
    const e02_13 = a.e023 !== undefined && b.e3 !== undefined
    const e02_14 = a.e123 !== undefined && b.e013 !== undefined
    const e02_15 = a.e0123 !== undefined && b.e13 !== undefined
    if (e02_0 || e02_1 || e02_2 || e02_3 || e02_4 || e02_5 || e02_6 || e02_7 || e02_8 || e02_9 || e02_10 || e02_11 || e02_12 || e02_13 || e02_14 || e02_15) {
        resultE02 = 0
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e0! * b.e2!)
        if (e02_2) resultE02 += 1.0 * (a.e1! * b.e012!)
        if (e02_3) resultE02 += -1.0 * (a.e2! * b.e0!)
        if (e02_4) resultE02 += -1.0 * (a.e3! * b.e023!)
        if (e02_5) resultE02 += -1.0 * (a.e01! * b.e12!)
        if (e02_6) resultE02 += 1.0 * (a.e02! * b.scalar!)
        if (e02_7) resultE02 += 1.0 * (a.e03! * b.e23!)
        if (e02_8) resultE02 += 1.0 * (a.e12! * b.e01!)
        if (e02_9) resultE02 += 1.0 * (a.e13! * b.e0123!)
        if (e02_10) resultE02 += -1.0 * (a.e23! * b.e03!)
        if (e02_11) resultE02 += 1.0 * (a.e012! * b.e1!)
        if (e02_12) resultE02 += 1.0 * (a.e013! * b.e123!)
        if (e02_13) resultE02 += -1.0 * (a.e023! * b.e3!)
        if (e02_14) resultE02 += -1.0 * (a.e123! * b.e013!)
        if (e02_15) resultE02 += 1.0 * (a.e0123! * b.e13!)
    }
    let resultE03 = undefined
    const e03_0 = a.scalar !== undefined && b.e03 !== undefined
    const e03_1 = a.e0 !== undefined && b.e3 !== undefined
    const e03_2 = a.e1 !== undefined && b.e013 !== undefined
    const e03_3 = a.e2 !== undefined && b.e023 !== undefined
    const e03_4 = a.e3 !== undefined && b.e0 !== undefined
    const e03_5 = a.e01 !== undefined && b.e13 !== undefined
    const e03_6 = a.e02 !== undefined && b.e23 !== undefined
    const e03_7 = a.e03 !== undefined && b.scalar !== undefined
    const e03_8 = a.e12 !== undefined && b.e0123 !== undefined
    const e03_9 = a.e13 !== undefined && b.e01 !== undefined
    const e03_10 = a.e23 !== undefined && b.e02 !== undefined
    const e03_11 = a.e012 !== undefined && b.e123 !== undefined
    const e03_12 = a.e013 !== undefined && b.e1 !== undefined
    const e03_13 = a.e023 !== undefined && b.e2 !== undefined
    const e03_14 = a.e123 !== undefined && b.e012 !== undefined
    const e03_15 = a.e0123 !== undefined && b.e12 !== undefined
    if (e03_0 || e03_1 || e03_2 || e03_3 || e03_4 || e03_5 || e03_6 || e03_7 || e03_8 || e03_9 || e03_10 || e03_11 || e03_12 || e03_13 || e03_14 || e03_15) {
        resultE03 = 0
        if (e03_0) resultE03 += 1.0 * (a.scalar! * b.e03!)
        if (e03_1) resultE03 += 1.0 * (a.e0! * b.e3!)
        if (e03_2) resultE03 += 1.0 * (a.e1! * b.e013!)
        if (e03_3) resultE03 += 1.0 * (a.e2! * b.e023!)
        if (e03_4) resultE03 += -1.0 * (a.e3! * b.e0!)
        if (e03_5) resultE03 += -1.0 * (a.e01! * b.e13!)
        if (e03_6) resultE03 += -1.0 * (a.e02! * b.e23!)
        if (e03_7) resultE03 += 1.0 * (a.e03! * b.scalar!)
        if (e03_8) resultE03 += -1.0 * (a.e12! * b.e0123!)
        if (e03_9) resultE03 += 1.0 * (a.e13! * b.e01!)
        if (e03_10) resultE03 += 1.0 * (a.e23! * b.e02!)
        if (e03_11) resultE03 += -1.0 * (a.e012! * b.e123!)
        if (e03_12) resultE03 += 1.0 * (a.e013! * b.e1!)
        if (e03_13) resultE03 += 1.0 * (a.e023! * b.e2!)
        if (e03_14) resultE03 += 1.0 * (a.e123! * b.e012!)
        if (e03_15) resultE03 += -1.0 * (a.e0123! * b.e12!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar !== undefined && b.e12 !== undefined
    const e12_1 = a.e1 !== undefined && b.e2 !== undefined
    const e12_2 = a.e2 !== undefined && b.e1 !== undefined
    const e12_3 = a.e3 !== undefined && b.e123 !== undefined
    const e12_4 = a.e12 !== undefined && b.scalar !== undefined
    const e12_5 = a.e13 !== undefined && b.e23 !== undefined
    const e12_6 = a.e23 !== undefined && b.e13 !== undefined
    const e12_7 = a.e123 !== undefined && b.e3 !== undefined
    if (e12_0 || e12_1 || e12_2 || e12_3 || e12_4 || e12_5 || e12_6 || e12_7) {
        resultE12 = 0
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e1! * b.e2!)
        if (e12_2) resultE12 += -1.0 * (a.e2! * b.e1!)
        if (e12_3) resultE12 += -1.0 * (a.e3! * b.e123!)
        if (e12_4) resultE12 += 1.0 * (a.e12! * b.scalar!)
        if (e12_5) resultE12 += 1.0 * (a.e13! * b.e23!)
        if (e12_6) resultE12 += -1.0 * (a.e23! * b.e13!)
        if (e12_7) resultE12 += -1.0 * (a.e123! * b.e3!)
    }
    let resultE13 = undefined
    const e13_0 = a.scalar !== undefined && b.e13 !== undefined
    const e13_1 = a.e1 !== undefined && b.e3 !== undefined
    const e13_2 = a.e2 !== undefined && b.e123 !== undefined
    const e13_3 = a.e3 !== undefined && b.e1 !== undefined
    const e13_4 = a.e12 !== undefined && b.e23 !== undefined
    const e13_5 = a.e13 !== undefined && b.scalar !== undefined
    const e13_6 = a.e23 !== undefined && b.e12 !== undefined
    const e13_7 = a.e123 !== undefined && b.e2 !== undefined
    if (e13_0 || e13_1 || e13_2 || e13_3 || e13_4 || e13_5 || e13_6 || e13_7) {
        resultE13 = 0
        if (e13_0) resultE13 += 1.0 * (a.scalar! * b.e13!)
        if (e13_1) resultE13 += 1.0 * (a.e1! * b.e3!)
        if (e13_2) resultE13 += 1.0 * (a.e2! * b.e123!)
        if (e13_3) resultE13 += -1.0 * (a.e3! * b.e1!)
        if (e13_4) resultE13 += -1.0 * (a.e12! * b.e23!)
        if (e13_5) resultE13 += 1.0 * (a.e13! * b.scalar!)
        if (e13_6) resultE13 += 1.0 * (a.e23! * b.e12!)
        if (e13_7) resultE13 += 1.0 * (a.e123! * b.e2!)
    }
    let resultE23 = undefined
    const e23_0 = a.scalar !== undefined && b.e23 !== undefined
    const e23_1 = a.e1 !== undefined && b.e123 !== undefined
    const e23_2 = a.e2 !== undefined && b.e3 !== undefined
    const e23_3 = a.e3 !== undefined && b.e2 !== undefined
    const e23_4 = a.e12 !== undefined && b.e13 !== undefined
    const e23_5 = a.e13 !== undefined && b.e12 !== undefined
    const e23_6 = a.e23 !== undefined && b.scalar !== undefined
    const e23_7 = a.e123 !== undefined && b.e1 !== undefined
    if (e23_0 || e23_1 || e23_2 || e23_3 || e23_4 || e23_5 || e23_6 || e23_7) {
        resultE23 = 0
        if (e23_0) resultE23 += 1.0 * (a.scalar! * b.e23!)
        if (e23_1) resultE23 += -1.0 * (a.e1! * b.e123!)
        if (e23_2) resultE23 += 1.0 * (a.e2! * b.e3!)
        if (e23_3) resultE23 += -1.0 * (a.e3! * b.e2!)
        if (e23_4) resultE23 += 1.0 * (a.e12! * b.e13!)
        if (e23_5) resultE23 += -1.0 * (a.e13! * b.e12!)
        if (e23_6) resultE23 += 1.0 * (a.e23! * b.scalar!)
        if (e23_7) resultE23 += -1.0 * (a.e123! * b.e1!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar !== undefined && b.e012 !== undefined
    const e012_1 = a.e0 !== undefined && b.e12 !== undefined
    const e012_2 = a.e1 !== undefined && b.e02 !== undefined
    const e012_3 = a.e2 !== undefined && b.e01 !== undefined
    const e012_4 = a.e3 !== undefined && b.e0123 !== undefined
    const e012_5 = a.e01 !== undefined && b.e2 !== undefined
    const e012_6 = a.e02 !== undefined && b.e1 !== undefined
    const e012_7 = a.e03 !== undefined && b.e123 !== undefined
    const e012_8 = a.e12 !== undefined && b.e0 !== undefined
    const e012_9 = a.e13 !== undefined && b.e023 !== undefined
    const e012_10 = a.e23 !== undefined && b.e013 !== undefined
    const e012_11 = a.e012 !== undefined && b.scalar !== undefined
    const e012_12 = a.e013 !== undefined && b.e23 !== undefined
    const e012_13 = a.e023 !== undefined && b.e13 !== undefined
    const e012_14 = a.e123 !== undefined && b.e03 !== undefined
    const e012_15 = a.e0123 !== undefined && b.e3 !== undefined
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7 || e012_8 || e012_9 || e012_10 || e012_11 || e012_12 || e012_13 || e012_14 || e012_15) {
        resultE012 = 0
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e0! * b.e12!)
        if (e012_2) resultE012 += -1.0 * (a.e1! * b.e02!)
        if (e012_3) resultE012 += 1.0 * (a.e2! * b.e01!)
        if (e012_4) resultE012 += 1.0 * (a.e3! * b.e0123!)
        if (e012_5) resultE012 += 1.0 * (a.e01! * b.e2!)
        if (e012_6) resultE012 += -1.0 * (a.e02! * b.e1!)
        if (e012_7) resultE012 += -1.0 * (a.e03! * b.e123!)
        if (e012_8) resultE012 += 1.0 * (a.e12! * b.e0!)
        if (e012_9) resultE012 += 1.0 * (a.e13! * b.e023!)
        if (e012_10) resultE012 += -1.0 * (a.e23! * b.e013!)
        if (e012_11) resultE012 += 1.0 * (a.e012! * b.scalar!)
        if (e012_12) resultE012 += 1.0 * (a.e013! * b.e23!)
        if (e012_13) resultE012 += -1.0 * (a.e023! * b.e13!)
        if (e012_14) resultE012 += 1.0 * (a.e123! * b.e03!)
        if (e012_15) resultE012 += -1.0 * (a.e0123! * b.e3!)
    }
    let resultE013 = undefined
    const e013_0 = a.scalar !== undefined && b.e013 !== undefined
    const e013_1 = a.e0 !== undefined && b.e13 !== undefined
    const e013_2 = a.e1 !== undefined && b.e03 !== undefined
    const e013_3 = a.e2 !== undefined && b.e0123 !== undefined
    const e013_4 = a.e3 !== undefined && b.e01 !== undefined
    const e013_5 = a.e01 !== undefined && b.e3 !== undefined
    const e013_6 = a.e02 !== undefined && b.e123 !== undefined
    const e013_7 = a.e03 !== undefined && b.e1 !== undefined
    const e013_8 = a.e12 !== undefined && b.e023 !== undefined
    const e013_9 = a.e13 !== undefined && b.e0 !== undefined
    const e013_10 = a.e23 !== undefined && b.e012 !== undefined
    const e013_11 = a.e012 !== undefined && b.e23 !== undefined
    const e013_12 = a.e013 !== undefined && b.scalar !== undefined
    const e013_13 = a.e023 !== undefined && b.e12 !== undefined
    const e013_14 = a.e123 !== undefined && b.e02 !== undefined
    const e013_15 = a.e0123 !== undefined && b.e2 !== undefined
    if (e013_0 || e013_1 || e013_2 || e013_3 || e013_4 || e013_5 || e013_6 || e013_7 || e013_8 || e013_9 || e013_10 || e013_11 || e013_12 || e013_13 || e013_14 || e013_15) {
        resultE013 = 0
        if (e013_0) resultE013 += 1.0 * (a.scalar! * b.e013!)
        if (e013_1) resultE013 += 1.0 * (a.e0! * b.e13!)
        if (e013_2) resultE013 += -1.0 * (a.e1! * b.e03!)
        if (e013_3) resultE013 += -1.0 * (a.e2! * b.e0123!)
        if (e013_4) resultE013 += 1.0 * (a.e3! * b.e01!)
        if (e013_5) resultE013 += 1.0 * (a.e01! * b.e3!)
        if (e013_6) resultE013 += 1.0 * (a.e02! * b.e123!)
        if (e013_7) resultE013 += -1.0 * (a.e03! * b.e1!)
        if (e013_8) resultE013 += -1.0 * (a.e12! * b.e023!)
        if (e013_9) resultE013 += 1.0 * (a.e13! * b.e0!)
        if (e013_10) resultE013 += 1.0 * (a.e23! * b.e012!)
        if (e013_11) resultE013 += -1.0 * (a.e012! * b.e23!)
        if (e013_12) resultE013 += 1.0 * (a.e013! * b.scalar!)
        if (e013_13) resultE013 += 1.0 * (a.e023! * b.e12!)
        if (e013_14) resultE013 += -1.0 * (a.e123! * b.e02!)
        if (e013_15) resultE013 += 1.0 * (a.e0123! * b.e2!)
    }
    let resultE023 = undefined
    const e023_0 = a.scalar !== undefined && b.e023 !== undefined
    const e023_1 = a.e0 !== undefined && b.e23 !== undefined
    const e023_2 = a.e1 !== undefined && b.e0123 !== undefined
    const e023_3 = a.e2 !== undefined && b.e03 !== undefined
    const e023_4 = a.e3 !== undefined && b.e02 !== undefined
    const e023_5 = a.e01 !== undefined && b.e123 !== undefined
    const e023_6 = a.e02 !== undefined && b.e3 !== undefined
    const e023_7 = a.e03 !== undefined && b.e2 !== undefined
    const e023_8 = a.e12 !== undefined && b.e013 !== undefined
    const e023_9 = a.e13 !== undefined && b.e012 !== undefined
    const e023_10 = a.e23 !== undefined && b.e0 !== undefined
    const e023_11 = a.e012 !== undefined && b.e13 !== undefined
    const e023_12 = a.e013 !== undefined && b.e12 !== undefined
    const e023_13 = a.e023 !== undefined && b.scalar !== undefined
    const e023_14 = a.e123 !== undefined && b.e01 !== undefined
    const e023_15 = a.e0123 !== undefined && b.e1 !== undefined
    if (e023_0 || e023_1 || e023_2 || e023_3 || e023_4 || e023_5 || e023_6 || e023_7 || e023_8 || e023_9 || e023_10 || e023_11 || e023_12 || e023_13 || e023_14 || e023_15) {
        resultE023 = 0
        if (e023_0) resultE023 += 1.0 * (a.scalar! * b.e023!)
        if (e023_1) resultE023 += 1.0 * (a.e0! * b.e23!)
        if (e023_2) resultE023 += 1.0 * (a.e1! * b.e0123!)
        if (e023_3) resultE023 += -1.0 * (a.e2! * b.e03!)
        if (e023_4) resultE023 += 1.0 * (a.e3! * b.e02!)
        if (e023_5) resultE023 += -1.0 * (a.e01! * b.e123!)
        if (e023_6) resultE023 += 1.0 * (a.e02! * b.e3!)
        if (e023_7) resultE023 += -1.0 * (a.e03! * b.e2!)
        if (e023_8) resultE023 += 1.0 * (a.e12! * b.e013!)
        if (e023_9) resultE023 += -1.0 * (a.e13! * b.e012!)
        if (e023_10) resultE023 += 1.0 * (a.e23! * b.e0!)
        if (e023_11) resultE023 += 1.0 * (a.e012! * b.e13!)
        if (e023_12) resultE023 += -1.0 * (a.e013! * b.e12!)
        if (e023_13) resultE023 += 1.0 * (a.e023! * b.scalar!)
        if (e023_14) resultE023 += 1.0 * (a.e123! * b.e01!)
        if (e023_15) resultE023 += -1.0 * (a.e0123! * b.e1!)
    }
    let resultE123 = undefined
    const e123_0 = a.scalar !== undefined && b.e123 !== undefined
    const e123_1 = a.e1 !== undefined && b.e23 !== undefined
    const e123_2 = a.e2 !== undefined && b.e13 !== undefined
    const e123_3 = a.e3 !== undefined && b.e12 !== undefined
    const e123_4 = a.e12 !== undefined && b.e3 !== undefined
    const e123_5 = a.e13 !== undefined && b.e2 !== undefined
    const e123_6 = a.e23 !== undefined && b.e1 !== undefined
    const e123_7 = a.e123 !== undefined && b.scalar !== undefined
    if (e123_0 || e123_1 || e123_2 || e123_3 || e123_4 || e123_5 || e123_6 || e123_7) {
        resultE123 = 0
        if (e123_0) resultE123 += 1.0 * (a.scalar! * b.e123!)
        if (e123_1) resultE123 += 1.0 * (a.e1! * b.e23!)
        if (e123_2) resultE123 += -1.0 * (a.e2! * b.e13!)
        if (e123_3) resultE123 += 1.0 * (a.e3! * b.e12!)
        if (e123_4) resultE123 += 1.0 * (a.e12! * b.e3!)
        if (e123_5) resultE123 += -1.0 * (a.e13! * b.e2!)
        if (e123_6) resultE123 += 1.0 * (a.e23! * b.e1!)
        if (e123_7) resultE123 += 1.0 * (a.e123! * b.scalar!)
    }
    let resultE0123 = undefined
    const e0123_0 = a.scalar !== undefined && b.e0123 !== undefined
    const e0123_1 = a.e0 !== undefined && b.e123 !== undefined
    const e0123_2 = a.e1 !== undefined && b.e023 !== undefined
    const e0123_3 = a.e2 !== undefined && b.e013 !== undefined
    const e0123_4 = a.e3 !== undefined && b.e012 !== undefined
    const e0123_5 = a.e01 !== undefined && b.e23 !== undefined
    const e0123_6 = a.e02 !== undefined && b.e13 !== undefined
    const e0123_7 = a.e03 !== undefined && b.e12 !== undefined
    const e0123_8 = a.e12 !== undefined && b.e03 !== undefined
    const e0123_9 = a.e13 !== undefined && b.e02 !== undefined
    const e0123_10 = a.e23 !== undefined && b.e01 !== undefined
    const e0123_11 = a.e012 !== undefined && b.e3 !== undefined
    const e0123_12 = a.e013 !== undefined && b.e2 !== undefined
    const e0123_13 = a.e023 !== undefined && b.e1 !== undefined
    const e0123_14 = a.e123 !== undefined && b.e0 !== undefined
    const e0123_15 = a.e0123 !== undefined && b.scalar !== undefined
    if (e0123_0 || e0123_1 || e0123_2 || e0123_3 || e0123_4 || e0123_5 || e0123_6 || e0123_7 || e0123_8 || e0123_9 || e0123_10 || e0123_11 || e0123_12 || e0123_13 || e0123_14 || e0123_15) {
        resultE0123 = 0
        if (e0123_0) resultE0123 += 1.0 * (a.scalar! * b.e0123!)
        if (e0123_1) resultE0123 += 1.0 * (a.e0! * b.e123!)
        if (e0123_2) resultE0123 += -1.0 * (a.e1! * b.e023!)
        if (e0123_3) resultE0123 += 1.0 * (a.e2! * b.e013!)
        if (e0123_4) resultE0123 += -1.0 * (a.e3! * b.e012!)
        if (e0123_5) resultE0123 += 1.0 * (a.e01! * b.e23!)
        if (e0123_6) resultE0123 += -1.0 * (a.e02! * b.e13!)
        if (e0123_7) resultE0123 += 1.0 * (a.e03! * b.e12!)
        if (e0123_8) resultE0123 += 1.0 * (a.e12! * b.e03!)
        if (e0123_9) resultE0123 += -1.0 * (a.e13! * b.e02!)
        if (e0123_10) resultE0123 += 1.0 * (a.e23! * b.e01!)
        if (e0123_11) resultE0123 += 1.0 * (a.e012! * b.e3!)
        if (e0123_12) resultE0123 += -1.0 * (a.e013! * b.e2!)
        if (e0123_13) resultE0123 += 1.0 * (a.e023! * b.e1!)
        if (e0123_14) resultE0123 += -1.0 * (a.e123! * b.e0!)
        if (e0123_15) resultE0123 += 1.0 * (a.e0123! * b.scalar!)
    }
    const result: any = {
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
    }
    return result as GeometricProductResultType<A, B>
}

export type InnerProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE3 ? BladeE3 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE03 ? BladeE03 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE13 ? BladeE13 : {}) &
        (B extends BladeE23 ? BladeE23 : {}) &
        (B extends BladeE012 ? BladeE012 : {}) &
        (B extends BladeE013 ? BladeE013 : {}) &
        (B extends BladeE023 ? BladeE023 : {}) &
        (B extends BladeE123 ? BladeE123 : {}) &
        (B extends BladeE0123 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE1 ? BladeScalar : {}) &
        (B extends BladeE01 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE2 : {}) &
        (B extends BladeE13 ? BladeE3 : {}) &
        (B extends BladeE012 ? BladeE02 : {}) &
        (B extends BladeE013 ? BladeE03 : {}) &
        (B extends BladeE123 ? BladeE23 : {}) &
        (B extends BladeE0123 ? BladeE023 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeScalar : {}) &
        (B extends BladeE02 ? BladeE0 : {}) &
        (B extends BladeE12 ? BladeE1 : {}) &
        (B extends BladeE23 ? BladeE3 : {}) &
        (B extends BladeE012 ? BladeE01 : {}) &
        (B extends BladeE023 ? BladeE03 : {}) &
        (B extends BladeE123 ? BladeE13 : {}) &
        (B extends BladeE0123 ? BladeE013 : {})
    ) : {}) &
    (A extends BladeE3 ? (
        (B extends BladeScalar ? BladeE3 : {}) &
        (B extends BladeE3 ? BladeScalar : {}) &
        (B extends BladeE03 ? BladeE0 : {}) &
        (B extends BladeE13 ? BladeE1 : {}) &
        (B extends BladeE23 ? BladeE2 : {}) &
        (B extends BladeE013 ? BladeE01 : {}) &
        (B extends BladeE023 ? BladeE02 : {}) &
        (B extends BladeE123 ? BladeE12 : {}) &
        (B extends BladeE0123 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE1 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE2 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE03 ? (
        (B extends BladeScalar ? BladeE03 : {}) &
        (B extends BladeE3 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE1 ? BladeE2 : {}) &
        (B extends BladeE2 ? BladeE1 : {}) &
        (B extends BladeE12 ? BladeScalar : {}) &
        (B extends BladeE012 ? BladeE0 : {}) &
        (B extends BladeE123 ? BladeE3 : {}) &
        (B extends BladeE0123 ? BladeE03 : {})
    ) : {}) &
    (A extends BladeE13 ? (
        (B extends BladeScalar ? BladeE13 : {}) &
        (B extends BladeE1 ? BladeE3 : {}) &
        (B extends BladeE3 ? BladeE1 : {}) &
        (B extends BladeE13 ? BladeScalar : {}) &
        (B extends BladeE013 ? BladeE0 : {}) &
        (B extends BladeE123 ? BladeE2 : {}) &
        (B extends BladeE0123 ? BladeE02 : {})
    ) : {}) &
    (A extends BladeE23 ? (
        (B extends BladeScalar ? BladeE23 : {}) &
        (B extends BladeE2 ? BladeE3 : {}) &
        (B extends BladeE3 ? BladeE2 : {}) &
        (B extends BladeE23 ? BladeScalar : {}) &
        (B extends BladeE023 ? BladeE0 : {}) &
        (B extends BladeE123 ? BladeE1 : {}) &
        (B extends BladeE0123 ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {}) &
        (B extends BladeE1 ? BladeE02 : {}) &
        (B extends BladeE2 ? BladeE01 : {}) &
        (B extends BladeE12 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE013 ? (
        (B extends BladeScalar ? BladeE013 : {}) &
        (B extends BladeE1 ? BladeE03 : {}) &
        (B extends BladeE3 ? BladeE01 : {}) &
        (B extends BladeE13 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE023 ? (
        (B extends BladeScalar ? BladeE023 : {}) &
        (B extends BladeE2 ? BladeE03 : {}) &
        (B extends BladeE3 ? BladeE02 : {}) &
        (B extends BladeE23 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE123 ? (
        (B extends BladeScalar ? BladeE123 : {}) &
        (B extends BladeE1 ? BladeE23 : {}) &
        (B extends BladeE2 ? BladeE13 : {}) &
        (B extends BladeE3 ? BladeE12 : {}) &
        (B extends BladeE12 ? BladeE3 : {}) &
        (B extends BladeE13 ? BladeE2 : {}) &
        (B extends BladeE23 ? BladeE1 : {}) &
        (B extends BladeE123 ? BladeScalar : {}) &
        (B extends BladeE0123 ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE0123 ? (
        (B extends BladeScalar ? BladeE0123 : {}) &
        (B extends BladeE1 ? BladeE023 : {}) &
        (B extends BladeE2 ? BladeE013 : {}) &
        (B extends BladeE3 ? BladeE012 : {}) &
        (B extends BladeE12 ? BladeE03 : {}) &
        (B extends BladeE13 ? BladeE02 : {}) &
        (B extends BladeE23 ? BladeE01 : {}) &
        (B extends BladeE123 ? BladeE0 : {})
    ) : {})

export const innerProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): InnerProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    const scalar_1 = a.e1 !== undefined && b.e1 !== undefined
    const scalar_2 = a.e2 !== undefined && b.e2 !== undefined
    const scalar_3 = a.e3 !== undefined && b.e3 !== undefined
    const scalar_4 = a.e12 !== undefined && b.e12 !== undefined
    const scalar_5 = a.e13 !== undefined && b.e13 !== undefined
    const scalar_6 = a.e23 !== undefined && b.e23 !== undefined
    const scalar_7 = a.e123 !== undefined && b.e123 !== undefined
    if (scalar_0 || scalar_1 || scalar_2 || scalar_3 || scalar_4 || scalar_5 || scalar_6 || scalar_7) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
        if (scalar_1) resultScalar += -1.0 * (a.e1! * b.e1!)
        if (scalar_2) resultScalar += -1.0 * (a.e2! * b.e2!)
        if (scalar_3) resultScalar += -1.0 * (a.e3! * b.e3!)
        if (scalar_4) resultScalar += -1.0 * (a.e12! * b.e12!)
        if (scalar_5) resultScalar += -1.0 * (a.e13! * b.e13!)
        if (scalar_6) resultScalar += -1.0 * (a.e23! * b.e23!)
        if (scalar_7) resultScalar += 1.0 * (a.e123! * b.e123!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    const e0_2 = a.e1 !== undefined && b.e01 !== undefined
    const e0_3 = a.e2 !== undefined && b.e02 !== undefined
    const e0_4 = a.e3 !== undefined && b.e03 !== undefined
    const e0_5 = a.e01 !== undefined && b.e1 !== undefined
    const e0_6 = a.e02 !== undefined && b.e2 !== undefined
    const e0_7 = a.e03 !== undefined && b.e3 !== undefined
    const e0_8 = a.e12 !== undefined && b.e012 !== undefined
    const e0_9 = a.e13 !== undefined && b.e013 !== undefined
    const e0_10 = a.e23 !== undefined && b.e023 !== undefined
    const e0_11 = a.e012 !== undefined && b.e12 !== undefined
    const e0_12 = a.e013 !== undefined && b.e13 !== undefined
    const e0_13 = a.e023 !== undefined && b.e23 !== undefined
    const e0_14 = a.e123 !== undefined && b.e0123 !== undefined
    const e0_15 = a.e0123 !== undefined && b.e123 !== undefined
    if (e0_0 || e0_1 || e0_2 || e0_3 || e0_4 || e0_5 || e0_6 || e0_7 || e0_8 || e0_9 || e0_10 || e0_11 || e0_12 || e0_13 || e0_14 || e0_15) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
        if (e0_2) resultE0 += 1.0 * (a.e1! * b.e01!)
        if (e0_3) resultE0 += 1.0 * (a.e2! * b.e02!)
        if (e0_4) resultE0 += 1.0 * (a.e3! * b.e03!)
        if (e0_5) resultE0 += -1.0 * (a.e01! * b.e1!)
        if (e0_6) resultE0 += -1.0 * (a.e02! * b.e2!)
        if (e0_7) resultE0 += -1.0 * (a.e03! * b.e3!)
        if (e0_8) resultE0 += -1.0 * (a.e12! * b.e012!)
        if (e0_9) resultE0 += -1.0 * (a.e13! * b.e013!)
        if (e0_10) resultE0 += -1.0 * (a.e23! * b.e023!)
        if (e0_11) resultE0 += -1.0 * (a.e012! * b.e12!)
        if (e0_12) resultE0 += -1.0 * (a.e013! * b.e13!)
        if (e0_13) resultE0 += -1.0 * (a.e023! * b.e23!)
        if (e0_14) resultE0 += -1.0 * (a.e123! * b.e0123!)
        if (e0_15) resultE0 += 1.0 * (a.e0123! * b.e123!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e1 !== undefined && b.scalar !== undefined
    const e1_2 = a.e2 !== undefined && b.e12 !== undefined
    const e1_3 = a.e3 !== undefined && b.e13 !== undefined
    const e1_4 = a.e12 !== undefined && b.e2 !== undefined
    const e1_5 = a.e13 !== undefined && b.e3 !== undefined
    const e1_6 = a.e23 !== undefined && b.e123 !== undefined
    const e1_7 = a.e123 !== undefined && b.e23 !== undefined
    if (e1_0 || e1_1 || e1_2 || e1_3 || e1_4 || e1_5 || e1_6 || e1_7) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
        if (e1_2) resultE1 += 1.0 * (a.e2! * b.e12!)
        if (e1_3) resultE1 += 1.0 * (a.e3! * b.e13!)
        if (e1_4) resultE1 += -1.0 * (a.e12! * b.e2!)
        if (e1_5) resultE1 += -1.0 * (a.e13! * b.e3!)
        if (e1_6) resultE1 += -1.0 * (a.e23! * b.e123!)
        if (e1_7) resultE1 += -1.0 * (a.e123! * b.e23!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar !== undefined && b.e2 !== undefined
    const e2_1 = a.e1 !== undefined && b.e12 !== undefined
    const e2_2 = a.e2 !== undefined && b.scalar !== undefined
    const e2_3 = a.e3 !== undefined && b.e23 !== undefined
    const e2_4 = a.e12 !== undefined && b.e1 !== undefined
    const e2_5 = a.e13 !== undefined && b.e123 !== undefined
    const e2_6 = a.e23 !== undefined && b.e3 !== undefined
    const e2_7 = a.e123 !== undefined && b.e13 !== undefined
    if (e2_0 || e2_1 || e2_2 || e2_3 || e2_4 || e2_5 || e2_6 || e2_7) {
        resultE2 = 0
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += -1.0 * (a.e1! * b.e12!)
        if (e2_2) resultE2 += 1.0 * (a.e2! * b.scalar!)
        if (e2_3) resultE2 += 1.0 * (a.e3! * b.e23!)
        if (e2_4) resultE2 += 1.0 * (a.e12! * b.e1!)
        if (e2_5) resultE2 += 1.0 * (a.e13! * b.e123!)
        if (e2_6) resultE2 += -1.0 * (a.e23! * b.e3!)
        if (e2_7) resultE2 += 1.0 * (a.e123! * b.e13!)
    }
    let resultE3 = undefined
    const e3_0 = a.scalar !== undefined && b.e3 !== undefined
    const e3_1 = a.e1 !== undefined && b.e13 !== undefined
    const e3_2 = a.e2 !== undefined && b.e23 !== undefined
    const e3_3 = a.e3 !== undefined && b.scalar !== undefined
    const e3_4 = a.e12 !== undefined && b.e123 !== undefined
    const e3_5 = a.e13 !== undefined && b.e1 !== undefined
    const e3_6 = a.e23 !== undefined && b.e2 !== undefined
    const e3_7 = a.e123 !== undefined && b.e12 !== undefined
    if (e3_0 || e3_1 || e3_2 || e3_3 || e3_4 || e3_5 || e3_6 || e3_7) {
        resultE3 = 0
        if (e3_0) resultE3 += 1.0 * (a.scalar! * b.e3!)
        if (e3_1) resultE3 += -1.0 * (a.e1! * b.e13!)
        if (e3_2) resultE3 += -1.0 * (a.e2! * b.e23!)
        if (e3_3) resultE3 += 1.0 * (a.e3! * b.scalar!)
        if (e3_4) resultE3 += -1.0 * (a.e12! * b.e123!)
        if (e3_5) resultE3 += 1.0 * (a.e13! * b.e1!)
        if (e3_6) resultE3 += 1.0 * (a.e23! * b.e2!)
        if (e3_7) resultE3 += -1.0 * (a.e123! * b.e12!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e2 !== undefined && b.e012 !== undefined
    const e01_2 = a.e3 !== undefined && b.e013 !== undefined
    const e01_3 = a.e01 !== undefined && b.scalar !== undefined
    const e01_4 = a.e23 !== undefined && b.e0123 !== undefined
    const e01_5 = a.e012 !== undefined && b.e2 !== undefined
    const e01_6 = a.e013 !== undefined && b.e3 !== undefined
    const e01_7 = a.e0123 !== undefined && b.e23 !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3 || e01_4 || e01_5 || e01_6 || e01_7) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += -1.0 * (a.e2! * b.e012!)
        if (e01_2) resultE01 += -1.0 * (a.e3! * b.e013!)
        if (e01_3) resultE01 += 1.0 * (a.e01! * b.scalar!)
        if (e01_4) resultE01 += -1.0 * (a.e23! * b.e0123!)
        if (e01_5) resultE01 += -1.0 * (a.e012! * b.e2!)
        if (e01_6) resultE01 += -1.0 * (a.e013! * b.e3!)
        if (e01_7) resultE01 += -1.0 * (a.e0123! * b.e23!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar !== undefined && b.e02 !== undefined
    const e02_1 = a.e1 !== undefined && b.e012 !== undefined
    const e02_2 = a.e3 !== undefined && b.e023 !== undefined
    const e02_3 = a.e02 !== undefined && b.scalar !== undefined
    const e02_4 = a.e13 !== undefined && b.e0123 !== undefined
    const e02_5 = a.e012 !== undefined && b.e1 !== undefined
    const e02_6 = a.e023 !== undefined && b.e3 !== undefined
    const e02_7 = a.e0123 !== undefined && b.e13 !== undefined
    if (e02_0 || e02_1 || e02_2 || e02_3 || e02_4 || e02_5 || e02_6 || e02_7) {
        resultE02 = 0
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e1! * b.e012!)
        if (e02_2) resultE02 += -1.0 * (a.e3! * b.e023!)
        if (e02_3) resultE02 += 1.0 * (a.e02! * b.scalar!)
        if (e02_4) resultE02 += 1.0 * (a.e13! * b.e0123!)
        if (e02_5) resultE02 += 1.0 * (a.e012! * b.e1!)
        if (e02_6) resultE02 += -1.0 * (a.e023! * b.e3!)
        if (e02_7) resultE02 += 1.0 * (a.e0123! * b.e13!)
    }
    let resultE03 = undefined
    const e03_0 = a.scalar !== undefined && b.e03 !== undefined
    const e03_1 = a.e1 !== undefined && b.e013 !== undefined
    const e03_2 = a.e2 !== undefined && b.e023 !== undefined
    const e03_3 = a.e03 !== undefined && b.scalar !== undefined
    const e03_4 = a.e12 !== undefined && b.e0123 !== undefined
    const e03_5 = a.e013 !== undefined && b.e1 !== undefined
    const e03_6 = a.e023 !== undefined && b.e2 !== undefined
    const e03_7 = a.e0123 !== undefined && b.e12 !== undefined
    if (e03_0 || e03_1 || e03_2 || e03_3 || e03_4 || e03_5 || e03_6 || e03_7) {
        resultE03 = 0
        if (e03_0) resultE03 += 1.0 * (a.scalar! * b.e03!)
        if (e03_1) resultE03 += 1.0 * (a.e1! * b.e013!)
        if (e03_2) resultE03 += 1.0 * (a.e2! * b.e023!)
        if (e03_3) resultE03 += 1.0 * (a.e03! * b.scalar!)
        if (e03_4) resultE03 += -1.0 * (a.e12! * b.e0123!)
        if (e03_5) resultE03 += 1.0 * (a.e013! * b.e1!)
        if (e03_6) resultE03 += 1.0 * (a.e023! * b.e2!)
        if (e03_7) resultE03 += -1.0 * (a.e0123! * b.e12!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar !== undefined && b.e12 !== undefined
    const e12_1 = a.e3 !== undefined && b.e123 !== undefined
    const e12_2 = a.e12 !== undefined && b.scalar !== undefined
    const e12_3 = a.e123 !== undefined && b.e3 !== undefined
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        resultE12 = 0
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += -1.0 * (a.e3! * b.e123!)
        if (e12_2) resultE12 += 1.0 * (a.e12! * b.scalar!)
        if (e12_3) resultE12 += -1.0 * (a.e123! * b.e3!)
    }
    let resultE13 = undefined
    const e13_0 = a.scalar !== undefined && b.e13 !== undefined
    const e13_1 = a.e2 !== undefined && b.e123 !== undefined
    const e13_2 = a.e13 !== undefined && b.scalar !== undefined
    const e13_3 = a.e123 !== undefined && b.e2 !== undefined
    if (e13_0 || e13_1 || e13_2 || e13_3) {
        resultE13 = 0
        if (e13_0) resultE13 += 1.0 * (a.scalar! * b.e13!)
        if (e13_1) resultE13 += 1.0 * (a.e2! * b.e123!)
        if (e13_2) resultE13 += 1.0 * (a.e13! * b.scalar!)
        if (e13_3) resultE13 += 1.0 * (a.e123! * b.e2!)
    }
    let resultE23 = undefined
    const e23_0 = a.scalar !== undefined && b.e23 !== undefined
    const e23_1 = a.e1 !== undefined && b.e123 !== undefined
    const e23_2 = a.e23 !== undefined && b.scalar !== undefined
    const e23_3 = a.e123 !== undefined && b.e1 !== undefined
    if (e23_0 || e23_1 || e23_2 || e23_3) {
        resultE23 = 0
        if (e23_0) resultE23 += 1.0 * (a.scalar! * b.e23!)
        if (e23_1) resultE23 += -1.0 * (a.e1! * b.e123!)
        if (e23_2) resultE23 += 1.0 * (a.e23! * b.scalar!)
        if (e23_3) resultE23 += -1.0 * (a.e123! * b.e1!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar !== undefined && b.e012 !== undefined
    const e012_1 = a.e3 !== undefined && b.e0123 !== undefined
    const e012_2 = a.e012 !== undefined && b.scalar !== undefined
    const e012_3 = a.e0123 !== undefined && b.e3 !== undefined
    if (e012_0 || e012_1 || e012_2 || e012_3) {
        resultE012 = 0
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e3! * b.e0123!)
        if (e012_2) resultE012 += 1.0 * (a.e012! * b.scalar!)
        if (e012_3) resultE012 += -1.0 * (a.e0123! * b.e3!)
    }
    let resultE013 = undefined
    const e013_0 = a.scalar !== undefined && b.e013 !== undefined
    const e013_1 = a.e2 !== undefined && b.e0123 !== undefined
    const e013_2 = a.e013 !== undefined && b.scalar !== undefined
    const e013_3 = a.e0123 !== undefined && b.e2 !== undefined
    if (e013_0 || e013_1 || e013_2 || e013_3) {
        resultE013 = 0
        if (e013_0) resultE013 += 1.0 * (a.scalar! * b.e013!)
        if (e013_1) resultE013 += -1.0 * (a.e2! * b.e0123!)
        if (e013_2) resultE013 += 1.0 * (a.e013! * b.scalar!)
        if (e013_3) resultE013 += 1.0 * (a.e0123! * b.e2!)
    }
    let resultE023 = undefined
    const e023_0 = a.scalar !== undefined && b.e023 !== undefined
    const e023_1 = a.e1 !== undefined && b.e0123 !== undefined
    const e023_2 = a.e023 !== undefined && b.scalar !== undefined
    const e023_3 = a.e0123 !== undefined && b.e1 !== undefined
    if (e023_0 || e023_1 || e023_2 || e023_3) {
        resultE023 = 0
        if (e023_0) resultE023 += 1.0 * (a.scalar! * b.e023!)
        if (e023_1) resultE023 += 1.0 * (a.e1! * b.e0123!)
        if (e023_2) resultE023 += 1.0 * (a.e023! * b.scalar!)
        if (e023_3) resultE023 += -1.0 * (a.e0123! * b.e1!)
    }
    let resultE123 = undefined
    const e123_0 = a.scalar !== undefined && b.e123 !== undefined
    const e123_1 = a.e123 !== undefined && b.scalar !== undefined
    if (e123_0 || e123_1) {
        resultE123 = 0
        if (e123_0) resultE123 += 1.0 * (a.scalar! * b.e123!)
        if (e123_1) resultE123 += 1.0 * (a.e123! * b.scalar!)
    }
    let resultE0123 = undefined
    const e0123_0 = a.scalar !== undefined && b.e0123 !== undefined
    const e0123_1 = a.e0123 !== undefined && b.scalar !== undefined
    if (e0123_0 || e0123_1) {
        resultE0123 = 0
        if (e0123_0) resultE0123 += 1.0 * (a.scalar! * b.e0123!)
        if (e0123_1) resultE0123 += 1.0 * (a.e0123! * b.scalar!)
    }
    const result: any = {
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
    }
    return result as InnerProductResultType<A, B>
}

export type ExteriorProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE3 ? BladeE3 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE03 ? BladeE03 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE13 ? BladeE13 : {}) &
        (B extends BladeE23 ? BladeE23 : {}) &
        (B extends BladeE012 ? BladeE012 : {}) &
        (B extends BladeE013 ? BladeE013 : {}) &
        (B extends BladeE023 ? BladeE023 : {}) &
        (B extends BladeE123 ? BladeE123 : {}) &
        (B extends BladeE0123 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE02 : {}) &
        (B extends BladeE3 ? BladeE03 : {}) &
        (B extends BladeE12 ? BladeE012 : {}) &
        (B extends BladeE13 ? BladeE013 : {}) &
        (B extends BladeE23 ? BladeE023 : {}) &
        (B extends BladeE123 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE12 : {}) &
        (B extends BladeE3 ? BladeE13 : {}) &
        (B extends BladeE02 ? BladeE012 : {}) &
        (B extends BladeE03 ? BladeE013 : {}) &
        (B extends BladeE23 ? BladeE123 : {}) &
        (B extends BladeE023 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE0 ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE12 : {}) &
        (B extends BladeE3 ? BladeE23 : {}) &
        (B extends BladeE01 ? BladeE012 : {}) &
        (B extends BladeE03 ? BladeE023 : {}) &
        (B extends BladeE13 ? BladeE123 : {}) &
        (B extends BladeE013 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE3 ? (
        (B extends BladeScalar ? BladeE3 : {}) &
        (B extends BladeE0 ? BladeE03 : {}) &
        (B extends BladeE1 ? BladeE13 : {}) &
        (B extends BladeE2 ? BladeE23 : {}) &
        (B extends BladeE01 ? BladeE013 : {}) &
        (B extends BladeE02 ? BladeE023 : {}) &
        (B extends BladeE12 ? BladeE123 : {}) &
        (B extends BladeE012 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE012 : {}) &
        (B extends BladeE3 ? BladeE013 : {}) &
        (B extends BladeE23 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE012 : {}) &
        (B extends BladeE3 ? BladeE023 : {}) &
        (B extends BladeE13 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE03 ? (
        (B extends BladeScalar ? BladeE03 : {}) &
        (B extends BladeE1 ? BladeE013 : {}) &
        (B extends BladeE2 ? BladeE023 : {}) &
        (B extends BladeE12 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE0 ? BladeE012 : {}) &
        (B extends BladeE3 ? BladeE123 : {}) &
        (B extends BladeE03 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE13 ? (
        (B extends BladeScalar ? BladeE13 : {}) &
        (B extends BladeE0 ? BladeE013 : {}) &
        (B extends BladeE2 ? BladeE123 : {}) &
        (B extends BladeE02 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE23 ? (
        (B extends BladeScalar ? BladeE23 : {}) &
        (B extends BladeE0 ? BladeE023 : {}) &
        (B extends BladeE1 ? BladeE123 : {}) &
        (B extends BladeE01 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {}) &
        (B extends BladeE3 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE013 ? (
        (B extends BladeScalar ? BladeE013 : {}) &
        (B extends BladeE2 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE023 ? (
        (B extends BladeScalar ? BladeE023 : {}) &
        (B extends BladeE1 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE123 ? (
        (B extends BladeScalar ? BladeE123 : {}) &
        (B extends BladeE0 ? BladeE0123 : {})
    ) : {}) &
    (A extends BladeE0123 ? (
        (B extends BladeScalar ? BladeE0123 : {})
    ) : {})

export const exteriorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): ExteriorProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar !== undefined && b.scalar !== undefined
    if (scalar_0) {
        resultScalar = 0
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar !== undefined && b.e0 !== undefined
    const e0_1 = a.e0 !== undefined && b.scalar !== undefined
    if (e0_0 || e0_1) {
        resultE0 = 0
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar !== undefined && b.e1 !== undefined
    const e1_1 = a.e1 !== undefined && b.scalar !== undefined
    if (e1_0 || e1_1) {
        resultE1 = 0
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar !== undefined && b.e2 !== undefined
    const e2_1 = a.e2 !== undefined && b.scalar !== undefined
    if (e2_0 || e2_1) {
        resultE2 = 0
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e2! * b.scalar!)
    }
    let resultE3 = undefined
    const e3_0 = a.scalar !== undefined && b.e3 !== undefined
    const e3_1 = a.e3 !== undefined && b.scalar !== undefined
    if (e3_0 || e3_1) {
        resultE3 = 0
        if (e3_0) resultE3 += 1.0 * (a.scalar! * b.e3!)
        if (e3_1) resultE3 += 1.0 * (a.e3! * b.scalar!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar !== undefined && b.e01 !== undefined
    const e01_1 = a.e0 !== undefined && b.e1 !== undefined
    const e01_2 = a.e1 !== undefined && b.e0 !== undefined
    const e01_3 = a.e01 !== undefined && b.scalar !== undefined
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        resultE01 = 0
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar !== undefined && b.e02 !== undefined
    const e02_1 = a.e0 !== undefined && b.e2 !== undefined
    const e02_2 = a.e2 !== undefined && b.e0 !== undefined
    const e02_3 = a.e02 !== undefined && b.scalar !== undefined
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        resultE02 = 0
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e0! * b.e2!)
        if (e02_2) resultE02 += -1.0 * (a.e2! * b.e0!)
        if (e02_3) resultE02 += 1.0 * (a.e02! * b.scalar!)
    }
    let resultE03 = undefined
    const e03_0 = a.scalar !== undefined && b.e03 !== undefined
    const e03_1 = a.e0 !== undefined && b.e3 !== undefined
    const e03_2 = a.e3 !== undefined && b.e0 !== undefined
    const e03_3 = a.e03 !== undefined && b.scalar !== undefined
    if (e03_0 || e03_1 || e03_2 || e03_3) {
        resultE03 = 0
        if (e03_0) resultE03 += 1.0 * (a.scalar! * b.e03!)
        if (e03_1) resultE03 += 1.0 * (a.e0! * b.e3!)
        if (e03_2) resultE03 += -1.0 * (a.e3! * b.e0!)
        if (e03_3) resultE03 += 1.0 * (a.e03! * b.scalar!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar !== undefined && b.e12 !== undefined
    const e12_1 = a.e1 !== undefined && b.e2 !== undefined
    const e12_2 = a.e2 !== undefined && b.e1 !== undefined
    const e12_3 = a.e12 !== undefined && b.scalar !== undefined
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        resultE12 = 0
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e1! * b.e2!)
        if (e12_2) resultE12 += -1.0 * (a.e2! * b.e1!)
        if (e12_3) resultE12 += 1.0 * (a.e12! * b.scalar!)
    }
    let resultE13 = undefined
    const e13_0 = a.scalar !== undefined && b.e13 !== undefined
    const e13_1 = a.e1 !== undefined && b.e3 !== undefined
    const e13_2 = a.e3 !== undefined && b.e1 !== undefined
    const e13_3 = a.e13 !== undefined && b.scalar !== undefined
    if (e13_0 || e13_1 || e13_2 || e13_3) {
        resultE13 = 0
        if (e13_0) resultE13 += 1.0 * (a.scalar! * b.e13!)
        if (e13_1) resultE13 += 1.0 * (a.e1! * b.e3!)
        if (e13_2) resultE13 += -1.0 * (a.e3! * b.e1!)
        if (e13_3) resultE13 += 1.0 * (a.e13! * b.scalar!)
    }
    let resultE23 = undefined
    const e23_0 = a.scalar !== undefined && b.e23 !== undefined
    const e23_1 = a.e2 !== undefined && b.e3 !== undefined
    const e23_2 = a.e3 !== undefined && b.e2 !== undefined
    const e23_3 = a.e23 !== undefined && b.scalar !== undefined
    if (e23_0 || e23_1 || e23_2 || e23_3) {
        resultE23 = 0
        if (e23_0) resultE23 += 1.0 * (a.scalar! * b.e23!)
        if (e23_1) resultE23 += 1.0 * (a.e2! * b.e3!)
        if (e23_2) resultE23 += -1.0 * (a.e3! * b.e2!)
        if (e23_3) resultE23 += 1.0 * (a.e23! * b.scalar!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar !== undefined && b.e012 !== undefined
    const e012_1 = a.e0 !== undefined && b.e12 !== undefined
    const e012_2 = a.e1 !== undefined && b.e02 !== undefined
    const e012_3 = a.e2 !== undefined && b.e01 !== undefined
    const e012_4 = a.e01 !== undefined && b.e2 !== undefined
    const e012_5 = a.e02 !== undefined && b.e1 !== undefined
    const e012_6 = a.e12 !== undefined && b.e0 !== undefined
    const e012_7 = a.e012 !== undefined && b.scalar !== undefined
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7) {
        resultE012 = 0
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e0! * b.e12!)
        if (e012_2) resultE012 += -1.0 * (a.e1! * b.e02!)
        if (e012_3) resultE012 += 1.0 * (a.e2! * b.e01!)
        if (e012_4) resultE012 += 1.0 * (a.e01! * b.e2!)
        if (e012_5) resultE012 += -1.0 * (a.e02! * b.e1!)
        if (e012_6) resultE012 += 1.0 * (a.e12! * b.e0!)
        if (e012_7) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    let resultE013 = undefined
    const e013_0 = a.scalar !== undefined && b.e013 !== undefined
    const e013_1 = a.e0 !== undefined && b.e13 !== undefined
    const e013_2 = a.e1 !== undefined && b.e03 !== undefined
    const e013_3 = a.e3 !== undefined && b.e01 !== undefined
    const e013_4 = a.e01 !== undefined && b.e3 !== undefined
    const e013_5 = a.e03 !== undefined && b.e1 !== undefined
    const e013_6 = a.e13 !== undefined && b.e0 !== undefined
    const e013_7 = a.e013 !== undefined && b.scalar !== undefined
    if (e013_0 || e013_1 || e013_2 || e013_3 || e013_4 || e013_5 || e013_6 || e013_7) {
        resultE013 = 0
        if (e013_0) resultE013 += 1.0 * (a.scalar! * b.e013!)
        if (e013_1) resultE013 += 1.0 * (a.e0! * b.e13!)
        if (e013_2) resultE013 += -1.0 * (a.e1! * b.e03!)
        if (e013_3) resultE013 += 1.0 * (a.e3! * b.e01!)
        if (e013_4) resultE013 += 1.0 * (a.e01! * b.e3!)
        if (e013_5) resultE013 += -1.0 * (a.e03! * b.e1!)
        if (e013_6) resultE013 += 1.0 * (a.e13! * b.e0!)
        if (e013_7) resultE013 += 1.0 * (a.e013! * b.scalar!)
    }
    let resultE023 = undefined
    const e023_0 = a.scalar !== undefined && b.e023 !== undefined
    const e023_1 = a.e0 !== undefined && b.e23 !== undefined
    const e023_2 = a.e2 !== undefined && b.e03 !== undefined
    const e023_3 = a.e3 !== undefined && b.e02 !== undefined
    const e023_4 = a.e02 !== undefined && b.e3 !== undefined
    const e023_5 = a.e03 !== undefined && b.e2 !== undefined
    const e023_6 = a.e23 !== undefined && b.e0 !== undefined
    const e023_7 = a.e023 !== undefined && b.scalar !== undefined
    if (e023_0 || e023_1 || e023_2 || e023_3 || e023_4 || e023_5 || e023_6 || e023_7) {
        resultE023 = 0
        if (e023_0) resultE023 += 1.0 * (a.scalar! * b.e023!)
        if (e023_1) resultE023 += 1.0 * (a.e0! * b.e23!)
        if (e023_2) resultE023 += -1.0 * (a.e2! * b.e03!)
        if (e023_3) resultE023 += 1.0 * (a.e3! * b.e02!)
        if (e023_4) resultE023 += 1.0 * (a.e02! * b.e3!)
        if (e023_5) resultE023 += -1.0 * (a.e03! * b.e2!)
        if (e023_6) resultE023 += 1.0 * (a.e23! * b.e0!)
        if (e023_7) resultE023 += 1.0 * (a.e023! * b.scalar!)
    }
    let resultE123 = undefined
    const e123_0 = a.scalar !== undefined && b.e123 !== undefined
    const e123_1 = a.e1 !== undefined && b.e23 !== undefined
    const e123_2 = a.e2 !== undefined && b.e13 !== undefined
    const e123_3 = a.e3 !== undefined && b.e12 !== undefined
    const e123_4 = a.e12 !== undefined && b.e3 !== undefined
    const e123_5 = a.e13 !== undefined && b.e2 !== undefined
    const e123_6 = a.e23 !== undefined && b.e1 !== undefined
    const e123_7 = a.e123 !== undefined && b.scalar !== undefined
    if (e123_0 || e123_1 || e123_2 || e123_3 || e123_4 || e123_5 || e123_6 || e123_7) {
        resultE123 = 0
        if (e123_0) resultE123 += 1.0 * (a.scalar! * b.e123!)
        if (e123_1) resultE123 += 1.0 * (a.e1! * b.e23!)
        if (e123_2) resultE123 += -1.0 * (a.e2! * b.e13!)
        if (e123_3) resultE123 += 1.0 * (a.e3! * b.e12!)
        if (e123_4) resultE123 += 1.0 * (a.e12! * b.e3!)
        if (e123_5) resultE123 += -1.0 * (a.e13! * b.e2!)
        if (e123_6) resultE123 += 1.0 * (a.e23! * b.e1!)
        if (e123_7) resultE123 += 1.0 * (a.e123! * b.scalar!)
    }
    let resultE0123 = undefined
    const e0123_0 = a.scalar !== undefined && b.e0123 !== undefined
    const e0123_1 = a.e0 !== undefined && b.e123 !== undefined
    const e0123_2 = a.e1 !== undefined && b.e023 !== undefined
    const e0123_3 = a.e2 !== undefined && b.e013 !== undefined
    const e0123_4 = a.e3 !== undefined && b.e012 !== undefined
    const e0123_5 = a.e01 !== undefined && b.e23 !== undefined
    const e0123_6 = a.e02 !== undefined && b.e13 !== undefined
    const e0123_7 = a.e03 !== undefined && b.e12 !== undefined
    const e0123_8 = a.e12 !== undefined && b.e03 !== undefined
    const e0123_9 = a.e13 !== undefined && b.e02 !== undefined
    const e0123_10 = a.e23 !== undefined && b.e01 !== undefined
    const e0123_11 = a.e012 !== undefined && b.e3 !== undefined
    const e0123_12 = a.e013 !== undefined && b.e2 !== undefined
    const e0123_13 = a.e023 !== undefined && b.e1 !== undefined
    const e0123_14 = a.e123 !== undefined && b.e0 !== undefined
    const e0123_15 = a.e0123 !== undefined && b.scalar !== undefined
    if (e0123_0 || e0123_1 || e0123_2 || e0123_3 || e0123_4 || e0123_5 || e0123_6 || e0123_7 || e0123_8 || e0123_9 || e0123_10 || e0123_11 || e0123_12 || e0123_13 || e0123_14 || e0123_15) {
        resultE0123 = 0
        if (e0123_0) resultE0123 += 1.0 * (a.scalar! * b.e0123!)
        if (e0123_1) resultE0123 += 1.0 * (a.e0! * b.e123!)
        if (e0123_2) resultE0123 += -1.0 * (a.e1! * b.e023!)
        if (e0123_3) resultE0123 += 1.0 * (a.e2! * b.e013!)
        if (e0123_4) resultE0123 += -1.0 * (a.e3! * b.e012!)
        if (e0123_5) resultE0123 += 1.0 * (a.e01! * b.e23!)
        if (e0123_6) resultE0123 += -1.0 * (a.e02! * b.e13!)
        if (e0123_7) resultE0123 += 1.0 * (a.e03! * b.e12!)
        if (e0123_8) resultE0123 += 1.0 * (a.e12! * b.e03!)
        if (e0123_9) resultE0123 += -1.0 * (a.e13! * b.e02!)
        if (e0123_10) resultE0123 += 1.0 * (a.e23! * b.e01!)
        if (e0123_11) resultE0123 += 1.0 * (a.e012! * b.e3!)
        if (e0123_12) resultE0123 += -1.0 * (a.e013! * b.e2!)
        if (e0123_13) resultE0123 += 1.0 * (a.e023! * b.e1!)
        if (e0123_14) resultE0123 += -1.0 * (a.e123! * b.e0!)
        if (e0123_15) resultE0123 += 1.0 * (a.e0123! * b.scalar!)
    }
    const result: any = {
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
    }
    return result as ExteriorProductResultType<A, B>
}

export const multiply = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
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
    }
    return result as A
}

export const div = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
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
    }
    return result as A
}

export const reversion = <A extends OptionalMultiVector>(a: A): A => {
    const result: any = {
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
    if (a.e0 !== undefined) {
        if (result === "") {
            result += a.e0.toFixed(digits) + "e0"
        } else {
            result += a.e0 >= 0 ? " + " + a.e0.toFixed(digits) + "e0" : " - " + Math.abs(a.e0).toFixed(digits) + "e0"
        }
    }
    if (a.e1 !== undefined) {
        if (result === "") {
            result += a.e1.toFixed(digits) + "e1"
        } else {
            result += a.e1 >= 0 ? " + " + a.e1.toFixed(digits) + "e1" : " - " + Math.abs(a.e1).toFixed(digits) + "e1"
        }
    }
    if (a.e2 !== undefined) {
        if (result === "") {
            result += a.e2.toFixed(digits) + "e2"
        } else {
            result += a.e2 >= 0 ? " + " + a.e2.toFixed(digits) + "e2" : " - " + Math.abs(a.e2).toFixed(digits) + "e2"
        }
    }
    if (a.e3 !== undefined) {
        if (result === "") {
            result += a.e3.toFixed(digits) + "e3"
        } else {
            result += a.e3 >= 0 ? " + " + a.e3.toFixed(digits) + "e3" : " - " + Math.abs(a.e3).toFixed(digits) + "e3"
        }
    }
    if (a.e01 !== undefined) {
        if (result === "") {
            result += a.e01.toFixed(digits) + "e01"
        } else {
            result += a.e01 >= 0 ? " + " + a.e01.toFixed(digits) + "e01" : " - " + Math.abs(a.e01).toFixed(digits) + "e01"
        }
    }
    if (a.e02 !== undefined) {
        if (result === "") {
            result += a.e02.toFixed(digits) + "e02"
        } else {
            result += a.e02 >= 0 ? " + " + a.e02.toFixed(digits) + "e02" : " - " + Math.abs(a.e02).toFixed(digits) + "e02"
        }
    }
    if (a.e03 !== undefined) {
        if (result === "") {
            result += a.e03.toFixed(digits) + "e03"
        } else {
            result += a.e03 >= 0 ? " + " + a.e03.toFixed(digits) + "e03" : " - " + Math.abs(a.e03).toFixed(digits) + "e03"
        }
    }
    if (a.e12 !== undefined) {
        if (result === "") {
            result += a.e12.toFixed(digits) + "e12"
        } else {
            result += a.e12 >= 0 ? " + " + a.e12.toFixed(digits) + "e12" : " - " + Math.abs(a.e12).toFixed(digits) + "e12"
        }
    }
    if (a.e13 !== undefined) {
        if (result === "") {
            result += a.e13.toFixed(digits) + "e13"
        } else {
            result += a.e13 >= 0 ? " + " + a.e13.toFixed(digits) + "e13" : " - " + Math.abs(a.e13).toFixed(digits) + "e13"
        }
    }
    if (a.e23 !== undefined) {
        if (result === "") {
            result += a.e23.toFixed(digits) + "e23"
        } else {
            result += a.e23 >= 0 ? " + " + a.e23.toFixed(digits) + "e23" : " - " + Math.abs(a.e23).toFixed(digits) + "e23"
        }
    }
    if (a.e012 !== undefined) {
        if (result === "") {
            result += a.e012.toFixed(digits) + "e012"
        } else {
            result += a.e012 >= 0 ? " + " + a.e012.toFixed(digits) + "e012" : " - " + Math.abs(a.e012).toFixed(digits) + "e012"
        }
    }
    if (a.e013 !== undefined) {
        if (result === "") {
            result += a.e013.toFixed(digits) + "e013"
        } else {
            result += a.e013 >= 0 ? " + " + a.e013.toFixed(digits) + "e013" : " - " + Math.abs(a.e013).toFixed(digits) + "e013"
        }
    }
    if (a.e023 !== undefined) {
        if (result === "") {
            result += a.e023.toFixed(digits) + "e023"
        } else {
            result += a.e023 >= 0 ? " + " + a.e023.toFixed(digits) + "e023" : " - " + Math.abs(a.e023).toFixed(digits) + "e023"
        }
    }
    if (a.e123 !== undefined) {
        if (result === "") {
            result += a.e123.toFixed(digits) + "e123"
        } else {
            result += a.e123 >= 0 ? " + " + a.e123.toFixed(digits) + "e123" : " - " + Math.abs(a.e123).toFixed(digits) + "e123"
        }
    }
    if (a.e0123 !== undefined) {
        if (result === "") {
            result += a.e0123.toFixed(digits) + "e0123"
        } else {
            result += a.e0123 >= 0 ? " + " + a.e0123.toFixed(digits) + "e0123" : " - " + Math.abs(a.e0123).toFixed(digits) + "e0123"
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
    if (gp.scalar === undefined) {
        throw new Error("Input to exponential needs to square to scalar")
    }
    const s = gp.scalar as number

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