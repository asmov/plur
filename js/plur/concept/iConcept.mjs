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
 * 
 * The base language concept framework provides definitions for: 
 * * concept/iType - The concepts of type and structure.
 * * concept/iVariable - The concepts of a type variable, inspection, and mutation.
 * * concept/iValue - The concepts of value, both primitive and complex.
 * * concept/iClass - The object-oriented concepts of a type class, inheritance, and polymorphism.
 * * concept/iInterface - The object-oriented concepts of a class interface or class trait, implementation, and class contract.
 *
 * Composite framework concepts define:
 * * concept/iModel - The concept of a data model and its accessors and mutators.
 * * concept/iConfig - The concept of a class and object configuration model, built on the data model.
 * * concept/iCreatable - The concept that a class may be instantiated with only a class-specific iConfig and iModel.
 * 
 * Conformance framework concepts define:
 * * concept/Conformant - The concept of conformance to programming contract specifications.
 * * concept/Portable - The concept of stricter standards within contracts that allow for language independence. 
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
