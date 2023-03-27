import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'FOODAPP API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API food ordering app',
    },
    servers:[{
        url: 'http://localhost:4000',
        description: 'Development server'
    }],

    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
};

const options = {
    swaggerDefinition,
    apis: ['./dist/utils/swagger.js'],
};

export const swaggerSpec = swaggerJSDoc(options);

/**
 * @swagger
 * components:
 *      schemas:
 *         User:
 *             type: object
 *             properties:
 *                 email: 
 *                      type: string
 *                 password:
 *                      type: string
 *                 confirm_password: 
 *                      type: string
 *                 phone: 
 *                      type: string
 *                 address:
 *                      type: string
 *                 firstName:
 *                     type: string
 *                 lastName:
 *                    type: string
 * 
 */


/**
 * @swagger
 * /:
 *  get:
 *      description: Use to test home route
 *      responses:
 *          '200':
 *              description: A successful response
 * /users/get-all-users:
 *  get:
 *      description: Use to request all users
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                 application/json: 
 *                     schema:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/User'
 *
 * /users/verify/{signature}:
 *  get:
 *      description: Use to request all users
 *      parameters:
 *        - in: path
 *          name: signature
 *          required: true
 *          description: signature is needed to verify user
 *          schema:
 *           type: string
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                 application/json: 
 *                     schema:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/User'
 * /users/signup:
 *  post:
 *      description: request to register a new user
 *      requestBody:
 *        content:
 *            application/json:
 *              schema:
 *                  $ref : '#/components/schemas/User'
 *      responses:
 *          '200':
 *              description: A successful response
 * 
 * /users/login:
 *  post:
 *      description: request to register a new user
 *      requestBody:
 *        content:
 *            application/json:
 *              schema:
 *                  $ref : '#/components/schemas/User'
 *      responses:
 *          '200':
 *              description: A successful response
 * 
 * /users/update-profile:
 *  patch:
 *      description: request to update user profile
 *      components:
 *          securitySchemes:
 *              bearerAuth:
 *              type: http
 *              scheme: bearer
 *              description: "Bearer token authentication"
 *      requestBody:
 *        content:
 *            application/json:
 *              schema:
 *                  $ref : '#/components/schemas/User'
 *      responses:
 *          '200':
 *              description: A successful response
 * 
 * 
 * 
 * 
 * 
 *              
 */