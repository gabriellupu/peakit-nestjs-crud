```
npm i -g @nestjs/cli
npm install -g ts-node
nest new peakit_nestjs

npm i --save @nestjsx/crud class-transformer class-validator
npm i --save @nestjsx/crud-request
npm i --save @nestjsx/crud-typeorm @nestjs/typeorm typeorm
npm i --save @nestjs/swagger
npm i --save swagger-ui-express
npm install mysql --save

nest g module users
```

```
// Create user.entity.ts, users.service.ts, users.controller.ts
```

```
// Configure Swagger in main.ts

 const swaggerOptions = new DocumentBuilder()
    .setBasePath('/')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(`/swagger`, app, document);

```

```
// Configure TypeORM in src/app.module.ts

imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'peakit',
      entities: [__dirname + '/**/*.entity.ts,.js}'],
      synchronize: true,
    }),
    ...
]
```

### NestJS Docs
https://docs.nestjs.com/

### NestJS Swagger
https://github.com/nestjs/swagger

### NestJSX Crud
* https://github.com/nestjsx/crud
* https://www.npmjs.com/package/@nestjsx/crud-request
* https://www.npmjs.com/package/@nestjsx/crud-typeorm

### Comprehensive article
https://hackernoon.com/quick-and-easy-crud-with-nestjs-nestjsxcrud-and-testmace-t9cn313h
