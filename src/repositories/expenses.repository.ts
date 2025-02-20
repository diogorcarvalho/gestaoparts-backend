import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Expense, ExpenseDocument } from "src/database/ExpenseSchema";
import { IExpenseEntity } from "src/domain/entities/IExpense";

@Injectable()
export class ExpensesRepository {
    constructor(
        @InjectModel(Expense.name) private readonly expenseModel: Model<ExpenseDocument>,
    ) { }
    
    async findAll(): Promise<IExpenseEntity[]> {
        const expenses = await this.expenseModel.find().exec();
        return expenses.map(expense => expense.toObject());
    }
    
    async create(expense: IExpenseEntity): Promise<void> {
        const createdExpense = new this.expenseModel(expense);
        await createdExpense.save();
    }

    async delete(id: string): Promise<void> {
        await this.expenseModel.findByIdAndDelete(id).exec();
    }
}
