/**
 * @copyright 2019 Asmov LLC
 * @license MIT https://github.com/asmov/plur/blob/master/LICENSE.txt
 * @module plur/error/Type
 */
'use strict';

import PlurClass from '../../plur/Class.mjs';
import PlurError from '../../plur/error/Error.mjs';

/**
 * Errors thrown by assertions - typically in tests.
 *
 */
export default class TypeError extends PlurError {
    constructor(message, data) {
        if (typeof message === 'object') {
            data = message;
            message = 'Unexpected data type';
        } else if (typeof message === 'undefined') {
            message = 'Unexpected data type';
        }

        super(message, data);
    }
};

PlurClass.plurify('plur/error/Type', TypeError);
