/**
 * @copyright 2019 Asmov LLC
 * @license MIT https://github.com/asmov/plur/blob/master/LICENSE.txt
 * @module plur/user/terminal/Browser
 * @version 0.1.0
 */
'use strict';

import PlurClass from '../Class.mjs';
import ITerminal from './ITerminal.mjs';

/**
 * Represents a means of interacting with a user/client via browser client API calls.
 *
 * @implements {IPlurified}
 * @implements {ITerminal}
 */
export default class BrowserTerminal {

    getParameters() {
        return [];
    };
}

PlurClass.plurify('plur/user/terminal/Browser', BrowserTerminal, [ITerminal]);
