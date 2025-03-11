import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: '*', // Allows requests from any origin (change this in production)
    methods: 'GET,POST,SSE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();