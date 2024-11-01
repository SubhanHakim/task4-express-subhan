/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Sign in
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "subhan"
 *               required: true
 *               password:
 *                 type: string
 *                 example: "123456"
 *                 required: true
 *     responses:       
 *       200:
 *         description: Success
 *       404:
 *         description: Login Failed
 */
