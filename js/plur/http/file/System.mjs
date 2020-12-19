/**
 * @copyright 2019 Asmov LLC
 * @license MIT https://github.com/asmov/plur/blob/master/LICENSE.txt
 * @module plur/http/file/System
 */
'use strict';

import PlurClass from '../../../plur/Class.mjs';
import AFileSystem from '../../../plur/file/ASystem.mjs';

/**
 * Represents the underlying File System through Node.JS.
 *
 */
export default class HttpFileSystem extends AFileSystem {
    constructor(homepath, paths) {
        super('/', homepath);

        this._paths = paths;
    };

    find(dir, pattern) {
        const foundpaths = [];
        const paths = this._paths;

        for (let i = 0; i < paths.length; ++i) {
            const path = paths[i];
            if (path.startsWith(dir) && pattern.test(paths[i])) {
                foundpaths.push(paths[i]);
            }
        }

        return new Promise(function(resolve, reject) {
            resolve(foundpaths);
        });
    };
};

PlurClass.plurify('plur/http/file/System', HttpFileSystem);
