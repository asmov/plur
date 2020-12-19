/**
 * @copyright 2019 Asmov LLC
 * @license MIT https://github.com/asmov/plur/blob/master/LICENSE.txt
 * @module plur/design/tree/INode
 */
'use strict';

import PlurClass from '../../../plur/Class.mjs';
import InterfaceError from '../../../plur/error/Interface.mjs';

/**
 * Tree Node Interface
 *
 * @interface
 * @implements {IPurified}
 */
export default class ITreeNode {
    constructor() {
        throw new InterfaceError({'this': this});
    };
}

PlurClass.plurify('plur/design/tree/INode', ITreeNode);

/**
 * Gets the value for this node.
 *
 * @type {Function}
 * @abstract
 * @returns mixed|null value
 */
ITreeNode.prototype.get = PlurClass.abstractMethod;

/**
 * Sets the value for this node.
 *
 * @type {Function}
 * @abstract
 * @param mixed value
 * @returns mixed|null
 */
ITreeNode.prototype.set = PlurClass.abstractMethod;

/**
 * Retrieves children of this node.
 * If a constructor is provided, only children that are instances of such will be returned.
 *
 * @type {Function}
 * @param Function instanceOfConstructor|undefined Filters out all children that are not derived from this constructor
 * @returns plur/design/tree/INode[] children
 */
ITreeNode.prototype.children = PlurClass.abstractMethod;

/**
 * Retrieves the parent.
 *
 * @type {Function}
 * @abstract
 * @returns plur/design/tree/INode|null parent
 */
ITreeNode.prototype.parent = PlurClass.abstractMethod;

/**
 * Adds a child.
 *
 * @type {Function}
 * @abstract
 * @param plur/design/tree/INode child
 * @returns plur/design/tree/INode child
 */
ITreeNode.prototype.addChild = PlurClass.abstractMethod;

/**
 * Removes a child.
 *
 * @type {Function}
 * @abstract
 * @param plur/design/tree/INode child
 */
ITreeNode.prototype.removeChild = PlurClass.abstractMethod;


/**
 * Determines whether a child exists or not.
 *
 * @type {Function}
 * @param plur/design/tree/INode child The child to search for.
 * @returns boolean hasChild TRUE if child exists. FALSE if not.
 */
ITreeNode.prototype.hasChild = PlurClass.abstractMethod;

/**
 * Determines whether this node is the root node of the tree or not.
 *
 * @type {Function}
 * @abstract
 * @returns boolean TRUE if this node is the root of the tree, FALSE if not
 */
ITreeNode.prototype.isRoot = PlurClass.abstractMethod;

/**
 * Retrieves the root node for this tree.
 *
 * @type {Function}
 * @abstract
 * @returns plur/design/tree/INode root
 */
ITreeNode.prototype.root = PlurClass.abstractMethod;

/**
 * Determines whether this node is childless or not.
 *
 * @type {Function}
 * @abstract
 * @returns boolean
 */
ITreeNode.prototype.isLeaf = PlurClass.abstractMethod;

/**
 * Factory method that creates a new child branch chain, each subsequent child branch corresponding to its index in the
 * provided array.
 *
 * @type {Function}
 * @param string[] treeList An array to be walked. An array of arrays specifies multiple branches, and can be complex.
 *      | {} treeMap A map to be walked. Can be complex.
 * @param Function valueConstructor Will construct a value object and fill the new node
 *      | Function(plur/design/tree/INode parent := plur/design/tree/INode newChild) constructionCallback
 *          A callback can be used to manually create and return each child.
 * @returns plur/design/tree/INode newLeaves[] All new leaf nodes are returned
 */
ITreeNode.prototype.expand = PlurClass.abstractMethod;

