/**
 * @copyright 2019 Asmov LLC
 * @license MIT https://github.com/asmov/plur/blob/master/LICENSE.txt
 * @module plur-nodejs/api/Bootstrap
 */
'use strict';

import PlurClass from "../../plur/Class.mjs";
import API from "../../plur/api/API.mjs";
import Bootstrap from "../../plur/api/Bootstrap.mjs";
import NodeJsFileSystem from "../../plur-nodejs/file/System.mjs";
import { singleton as LocalFileSystem } from '../../plur/file/system/Local.mjs';
import { singleton as ApiFileSystem } from '../../plur/file/system/API.mjs';

/**
 * Initializes plur API for use with NodeJS.
 *
 * @implements {IPlurified}
 */
class NodeJsBootstrap extends Bootstrap {
    constructor() {
        super();
        this.setPlatformType(API.PlatformType.NodeJS)
    };

    boot() {
        super.boot();

        // initialize the two main file system apis
        LocalFileSystem.set(new NodeJsFileSystem());
        ApiFileSystem.set(LocalFileSystem.get());
    };
};

PlurClass.plurify('plur-nodejs/api/Bootstrap', NodeJsBootstrap, Bootstrap);

export default NodeJsBootstrap;
