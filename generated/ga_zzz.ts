export type BladeScalar = { scalar: number }
export type BladeE0 = { e0: number }
export type BladeE1 = { e1: number }
export type BladeE2 = { e2: number }
export type BladeE01 = { e01: number }
export type BladeE02 = { e02: number }
export type BladeE12 = { e12: number }
export type BladeE012 = { e012: number }

export type OptionalMultiVector = {
    scalar?: number
    e0?: number
    e1?: number
    e2?: number
    e01?: number
    e02?: number
    e12?: number
    e012?: number
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
    (A extends BladeE01 ? BladeE01 : {}) &
    (B extends BladeE01 ? BladeE01 : {}) &
    (A extends BladeE02 ? BladeE02 : {}) &
    (B extends BladeE02 ? BladeE02 : {}) &
    (A extends BladeE12 ? BladeE12 : {}) &
    (B extends BladeE12 ? BladeE12 : {}) &
    (A extends BladeE012 ? BladeE012 : {}) &
    (B extends BladeE012 ? BladeE012 : {})
)

export const add = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar || b.scalar) ? (a.scalar || 0) + (b.scalar || 0) : undefined,
        e0: (a.e0 || b.e0) ? (a.e0 || 0) + (b.e0 || 0) : undefined,
        e1: (a.e1 || b.e1) ? (a.e1 || 0) + (b.e1 || 0) : undefined,
        e2: (a.e2 || b.e2) ? (a.e2 || 0) + (b.e2 || 0) : undefined,
        e01: (a.e01 || b.e01) ? (a.e01 || 0) + (b.e01 || 0) : undefined,
        e02: (a.e02 || b.e02) ? (a.e02 || 0) + (b.e02 || 0) : undefined,
        e12: (a.e12 || b.e12) ? (a.e12 || 0) + (b.e12 || 0) : undefined,
        e012: (a.e012 || b.e012) ? (a.e012 || 0) + (b.e012 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export const sub = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): AddResultType<A, B> => {
    const result: any = {
        scalar: (a.scalar || b.scalar) ? (a.scalar || 0) - (b.scalar || 0) : undefined,
        e0: (a.e0 || b.e0) ? (a.e0 || 0) - (b.e0 || 0) : undefined,
        e1: (a.e1 || b.e1) ? (a.e1 || 0) - (b.e1 || 0) : undefined,
        e2: (a.e2 || b.e2) ? (a.e2 || 0) - (b.e2 || 0) : undefined,
        e01: (a.e01 || b.e01) ? (a.e01 || 0) - (b.e01 || 0) : undefined,
        e02: (a.e02 || b.e02) ? (a.e02 || 0) - (b.e02 || 0) : undefined,
        e12: (a.e12 || b.e12) ? (a.e12 || 0) - (b.e12 || 0) : undefined,
        e012: (a.e012 || b.e012) ? (a.e012 || 0) - (b.e012 || 0) : undefined,
    }
    return result as AddResultType<A, B>
}

export type DualResultType<A> = (
    (A extends BladeScalar ? BladeE012 : {}) &
    (A extends BladeE0 ? BladeE12 : {}) &
    (A extends BladeE1 ? BladeE02 : {}) &
    (A extends BladeE2 ? BladeE01 : {}) &
    (A extends BladeE01 ? BladeE2 : {}) &
    (A extends BladeE02 ? BladeE1 : {}) &
    (A extends BladeE12 ? BladeE0 : {}) &
    (A extends BladeE012 ? BladeScalar : {})
)

export const dual = <A extends OptionalMultiVector>(a: A): DualResultType<A> => {
    const result: any = {
        scalar: a.e012 !== undefined ? 1.0 * a.e012 : undefined,
        e0: a.e12 !== undefined ? 1.0 * a.e12 : undefined,
        e1: a.e02 !== undefined ? -1.0 * a.e02 : undefined,
        e2: a.e01 !== undefined ? 1.0 * a.e01 : undefined,
        e01: a.e2 !== undefined ? 1.0 * a.e2 : undefined,
        e02: a.e1 !== undefined ? -1.0 * a.e1 : undefined,
        e12: a.e0 !== undefined ? 1.0 * a.e0 : undefined,
        e012: a.scalar !== undefined ? 1.0 * a.scalar : undefined,
    }
    return result as DualResultType<A>
}

export type GeometricProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE12 : {}) &
        (B extends BladeE02 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE0 ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE12 : {}) &
        (B extends BladeE01 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE0 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {})
    ) : {})

export const geometricProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): GeometricProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar && b.scalar
    if (scalar_0) {
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar && b.e0
    const e0_1 = a.e0 && b.scalar
    if (e0_0 || e0_1) {
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar && b.e1
    const e1_1 = a.e1 && b.scalar
    if (e1_0 || e1_1) {
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar && b.e2
    const e2_1 = a.e2 && b.scalar
    if (e2_0 || e2_1) {
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e2! * b.scalar!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar && b.e01
    const e01_1 = a.e0 && b.e1
    const e01_2 = a.e1 && b.e0
    const e01_3 = a.e01 && b.scalar
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar && b.e02
    const e02_1 = a.e0 && b.e2
    const e02_2 = a.e2 && b.e0
    const e02_3 = a.e02 && b.scalar
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e0! * b.e2!)
        if (e02_2) resultE02 += -1.0 * (a.e2! * b.e0!)
        if (e02_3) resultE02 += 1.0 * (a.e02! * b.scalar!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar && b.e12
    const e12_1 = a.e1 && b.e2
    const e12_2 = a.e2 && b.e1
    const e12_3 = a.e12 && b.scalar
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e1! * b.e2!)
        if (e12_2) resultE12 += -1.0 * (a.e2! * b.e1!)
        if (e12_3) resultE12 += 1.0 * (a.e12! * b.scalar!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar && b.e012
    const e012_1 = a.e0 && b.e12
    const e012_2 = a.e1 && b.e02
    const e012_3 = a.e2 && b.e01
    const e012_4 = a.e01 && b.e2
    const e012_5 = a.e02 && b.e1
    const e012_6 = a.e12 && b.e0
    const e012_7 = a.e012 && b.scalar
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7) {
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e0! * b.e12!)
        if (e012_2) resultE012 += -1.0 * (a.e1! * b.e02!)
        if (e012_3) resultE012 += 1.0 * (a.e2! * b.e01!)
        if (e012_4) resultE012 += 1.0 * (a.e01! * b.e2!)
        if (e012_5) resultE012 += -1.0 * (a.e02! * b.e1!)
        if (e012_6) resultE012 += 1.0 * (a.e12! * b.e0!)
        if (e012_7) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    }
    return result as GeometricProductResultType<A, B>
}

export type InnerProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {})
    ) : {})

export const innerProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): InnerProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar && b.scalar
    if (scalar_0) {
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar && b.e0
    const e0_1 = a.e0 && b.scalar
    if (e0_0 || e0_1) {
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar && b.e1
    const e1_1 = a.e1 && b.scalar
    if (e1_0 || e1_1) {
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar && b.e2
    const e2_1 = a.e2 && b.scalar
    if (e2_0 || e2_1) {
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e2! * b.scalar!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar && b.e01
    const e01_1 = a.e01 && b.scalar
    if (e01_0 || e01_1) {
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar && b.e02
    const e02_1 = a.e02 && b.scalar
    if (e02_0 || e02_1) {
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e02! * b.scalar!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar && b.e12
    const e12_1 = a.e12 && b.scalar
    if (e12_0 || e12_1) {
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e12! * b.scalar!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar && b.e012
    const e012_1 = a.e012 && b.scalar
    if (e012_0 || e012_1) {
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    }
    return result as InnerProductResultType<A, B>
}

export type ExteriorProductResultType<A, B> =
    (A extends BladeScalar ? (
        (B extends BladeScalar ? BladeScalar : {}) &
        (B extends BladeE0 ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE1 : {}) &
        (B extends BladeE2 ? BladeE2 : {}) &
        (B extends BladeE01 ? BladeE01 : {}) &
        (B extends BladeE02 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE12 : {}) &
        (B extends BladeE012 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE0 ? (
        (B extends BladeScalar ? BladeE0 : {}) &
        (B extends BladeE1 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE02 : {}) &
        (B extends BladeE12 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE1 ? (
        (B extends BladeScalar ? BladeE1 : {}) &
        (B extends BladeE0 ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE12 : {}) &
        (B extends BladeE02 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE2 ? (
        (B extends BladeScalar ? BladeE2 : {}) &
        (B extends BladeE0 ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE12 : {}) &
        (B extends BladeE01 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE01 ? (
        (B extends BladeScalar ? BladeE01 : {}) &
        (B extends BladeE2 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE02 ? (
        (B extends BladeScalar ? BladeE02 : {}) &
        (B extends BladeE1 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE12 ? (
        (B extends BladeScalar ? BladeE12 : {}) &
        (B extends BladeE0 ? BladeE012 : {})
    ) : {}) &
    (A extends BladeE012 ? (
        (B extends BladeScalar ? BladeE012 : {})
    ) : {})

export const exteriorProduct = <A extends OptionalMultiVector, B extends OptionalMultiVector>(a: A, b: B): ExteriorProductResultType<A, B> => {
    let resultScalar = undefined
    const scalar_0 = a.scalar && b.scalar
    if (scalar_0) {
        if (scalar_0) resultScalar += 1.0 * (a.scalar! * b.scalar!)
    }
    let resultE0 = undefined
    const e0_0 = a.scalar && b.e0
    const e0_1 = a.e0 && b.scalar
    if (e0_0 || e0_1) {
        if (e0_0) resultE0 += 1.0 * (a.scalar! * b.e0!)
        if (e0_1) resultE0 += 1.0 * (a.e0! * b.scalar!)
    }
    let resultE1 = undefined
    const e1_0 = a.scalar && b.e1
    const e1_1 = a.e1 && b.scalar
    if (e1_0 || e1_1) {
        if (e1_0) resultE1 += 1.0 * (a.scalar! * b.e1!)
        if (e1_1) resultE1 += 1.0 * (a.e1! * b.scalar!)
    }
    let resultE2 = undefined
    const e2_0 = a.scalar && b.e2
    const e2_1 = a.e2 && b.scalar
    if (e2_0 || e2_1) {
        if (e2_0) resultE2 += 1.0 * (a.scalar! * b.e2!)
        if (e2_1) resultE2 += 1.0 * (a.e2! * b.scalar!)
    }
    let resultE01 = undefined
    const e01_0 = a.scalar && b.e01
    const e01_1 = a.e0 && b.e1
    const e01_2 = a.e1 && b.e0
    const e01_3 = a.e01 && b.scalar
    if (e01_0 || e01_1 || e01_2 || e01_3) {
        if (e01_0) resultE01 += 1.0 * (a.scalar! * b.e01!)
        if (e01_1) resultE01 += 1.0 * (a.e0! * b.e1!)
        if (e01_2) resultE01 += -1.0 * (a.e1! * b.e0!)
        if (e01_3) resultE01 += 1.0 * (a.e01! * b.scalar!)
    }
    let resultE02 = undefined
    const e02_0 = a.scalar && b.e02
    const e02_1 = a.e0 && b.e2
    const e02_2 = a.e2 && b.e0
    const e02_3 = a.e02 && b.scalar
    if (e02_0 || e02_1 || e02_2 || e02_3) {
        if (e02_0) resultE02 += 1.0 * (a.scalar! * b.e02!)
        if (e02_1) resultE02 += 1.0 * (a.e0! * b.e2!)
        if (e02_2) resultE02 += -1.0 * (a.e2! * b.e0!)
        if (e02_3) resultE02 += 1.0 * (a.e02! * b.scalar!)
    }
    let resultE12 = undefined
    const e12_0 = a.scalar && b.e12
    const e12_1 = a.e1 && b.e2
    const e12_2 = a.e2 && b.e1
    const e12_3 = a.e12 && b.scalar
    if (e12_0 || e12_1 || e12_2 || e12_3) {
        if (e12_0) resultE12 += 1.0 * (a.scalar! * b.e12!)
        if (e12_1) resultE12 += 1.0 * (a.e1! * b.e2!)
        if (e12_2) resultE12 += -1.0 * (a.e2! * b.e1!)
        if (e12_3) resultE12 += 1.0 * (a.e12! * b.scalar!)
    }
    let resultE012 = undefined
    const e012_0 = a.scalar && b.e012
    const e012_1 = a.e0 && b.e12
    const e012_2 = a.e1 && b.e02
    const e012_3 = a.e2 && b.e01
    const e012_4 = a.e01 && b.e2
    const e012_5 = a.e02 && b.e1
    const e012_6 = a.e12 && b.e0
    const e012_7 = a.e012 && b.scalar
    if (e012_0 || e012_1 || e012_2 || e012_3 || e012_4 || e012_5 || e012_6 || e012_7) {
        if (e012_0) resultE012 += 1.0 * (a.scalar! * b.e012!)
        if (e012_1) resultE012 += 1.0 * (a.e0! * b.e12!)
        if (e012_2) resultE012 += -1.0 * (a.e1! * b.e02!)
        if (e012_3) resultE012 += 1.0 * (a.e2! * b.e01!)
        if (e012_4) resultE012 += 1.0 * (a.e01! * b.e2!)
        if (e012_5) resultE012 += -1.0 * (a.e02! * b.e1!)
        if (e012_6) resultE012 += 1.0 * (a.e12! * b.e0!)
        if (e012_7) resultE012 += 1.0 * (a.e012! * b.scalar!)
    }
    const result: any = {
        scalar: resultScalar,
        e0: resultE0,
        e1: resultE1,
        e2: resultE2,
        e01: resultE01,
        e02: resultE02,
        e12: resultE12,
        e012: resultE012,
    }
    return result as ExteriorProductResultType<A, B>
}

export const multiply = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar && a.scalar * b,
        e0: a.e0 && a.e0 * b,
        e1: a.e1 && a.e1 * b,
        e2: a.e2 && a.e2 * b,
        e01: a.e01 && a.e01 * b,
        e02: a.e02 && a.e02 * b,
        e12: a.e12 && a.e12 * b,
        e012: a.e012 && a.e012 * b,
    }
    return result as A
}

export const div = <A extends OptionalMultiVector>(a: A, b: number): A => {
    const result: any = {
        scalar: a.scalar && a.scalar / b,
        e0: a.e0 && a.e0 / b,
        e1: a.e1 && a.e1 / b,
        e2: a.e2 && a.e2 / b,
        e01: a.e01 && a.e01 / b,
        e02: a.e02 && a.e02 / b,
        e12: a.e12 && a.e12 / b,
        e012: a.e012 && a.e012 / b,
    }
    return result as A
}

export const reversion = <A extends OptionalMultiVector>(a: A): A => {
    const result: any = {
        scalar: a.scalar && a.scalar,
        e0: a.e0 && a.e0,
        e1: a.e1 && a.e1,
        e2: a.e2 && a.e2,
        e01: a.e01 && -a.e01,
        e02: a.e02 && -a.e02,
        e12: a.e12 && -a.e12,
        e012: a.e012 && -a.e012,
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