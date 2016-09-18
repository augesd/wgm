import getParsingFlags from '../create/parsing-flags';

export default function checkOverflow(m) {
    let overflow;
    let a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow = -1;

        // ..

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

