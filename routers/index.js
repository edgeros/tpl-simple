/*
 * Copyright (c) 2020 EdgerOS Team.
 * All rights reserved.
 *
 * Detailed license information can be found in the LICENSE file.
 *
 * File: demo rest api.
 *
 * Author: Li.Ping <liping@acoinfo.com>
 *
 */
const WebApp = require('webapp');
const Router = WebApp.Router;
const router = Router.create();

router.get('/', function (req, res) {
	res.send('<div style="color:#fff">Hello world</div>')
})

module.exports = router
