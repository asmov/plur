/**
 * The Plur framework defines a portable metalanguage standard for abstract software language concepts within the domain
 * of data model, structure, and protocol. The core definition library is known collectively as the Plur Metalanguage (PlurML).
 * 
 * PlurML abstractly defines concepts commonly found in various object-oriented programming languages in a general
 * manner. It provides language-specific definitions as well, which dictate how syntax is used directly.
 *
 * PlurML provides a common way to refer to primitive types, values, interfaces, and classes along with common patterns for
 * how they may be used.
 *
 * The kernel of the PlurML library is the definition of an abstract software concept, aptly named iConcept. It exists
 * as a trait or interface in each programming language supported and all other PlurML concepts are derived from it.
 *
 * iConcept and all derivatives are explicitly design-by-contract in nature. All derivatives of iConcept must provide
 * a programming contract specification in their source-code documentation, which must be conformed to by every type that
 * implements them. This is known as "conformance".
 */

import 'plur/Meta.mjs' as PlurMeta;

/**
 *** @contract
 * All derived types must provide a contract specification in its source documentation, indicated by a @contract doc header.
 * All derived types must conform to contract specifications that they inherit.
 * All implemented types must conform to the contract specifications that they're implementing.
*/
export default class iConcept {
    static namepath = 'plur/iConcept';
};

PlurMeta.conformInteface(iConcept);
