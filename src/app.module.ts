import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesRepository } from './repositories/expenses.repository';
import { CreateExpenseUseCase } from './use-cases/create-expense.servce';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense, ExpenseSchema } from './database/ExpenseSchema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [CategoryController, ExpensesController],
  providers: [
    ExpensesRepository,
    CreateExpenseUseCase,
  ],
})
export class AppModule { }
