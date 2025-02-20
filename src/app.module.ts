import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesRepository } from './repositories/expenses.repository';
import { CreateExpenseUseCase } from './use-cases/create-expense.servce';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense, ExpenseSchema } from './database/ExpenseSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/finances'),
  ],
  controllers: [CategoryController, ExpensesController],
  providers: [
    ExpensesRepository,
    CreateExpenseUseCase,
  ],
})
export class AppModule {}
